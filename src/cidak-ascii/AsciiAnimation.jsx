import React, { useEffect, useRef, useState } from 'react';
import '../App.css';

/**
 * AsciiAnimation
 * - Measures the <pre> container to compute a character grid (cols x rows)
 * - Runs a simple animation loop that updates the displayed ASCII text
 * - Uses a ref so measurements happen against the real DOM element
 */
export const AsciiAnimation = () => {
  const [displayed, setDisplayed] = useState('');
  const [dimensions, setDimensions] = useState({ width: 80, height: 40 });
  const [isReady, setIsReady] = useState(false); // isReady: becomes true after we successfully measure the container
  const containerRef = useRef(null);

  const calculateDimensions = () => {
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;
    const span = document.createElement('span');
    span.style.font = getComputedStyle(el).font;
    // span.style.color = '';
    span.style.visibility = 'hidden';
    span.style.position = 'absolute';
    span.textContent = 'M'; // Wide glyph for measurement
    document.body.appendChild(span);


    const charWidth = span.offsetWidth; 
    const charHeight = span.offsetHeight;
    document.body.removeChild(span);

    // Computes how many chars fit; floor to ensure => ensure that there is no overflow
    const cols = Math.max(1, Math.floor(rect.width / charWidth));
    const rows = Math.max(1, Math.floor(rect.height / charHeight));

    setDimensions({ width: cols, height: rows });
    setIsReady(true);
  };

  useEffect(() => {
    const initialize = () => {
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => setTimeout(calculateDimensions, 120));
      } else {
        setTimeout(calculateDimensions, 200);       // @DylanPrinsloo if conservative delay, please let layout settle
      }
    };

    if (document.readyState === 'complete') { // @DylanPrinsloo if page already loaded, initialize immediately
      initialize();
    } else {
      window.addEventListener('load', initialize);
    }

    // Recalculate after resize (debounced with small timeout, minimizes requests, Helps with lower end devices)
    let resizeTimer = null;
    const handleResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(calculateDimensions, 80);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', initialize);
      if (resizeTimer) clearTimeout(resizeTimer);
    };
  }, []);

    //  ___________________________________________________________
    //    ____ ___ ____    _    _   __                            |
    //   / ___|_ _|  _ \  / \  | \_/ /                            |
    //  | |    | || | | |/ _ \ |    /                             |
    //  | |___ | || |_| / ___ \|  _ \                             |  
    //   \____|___|____/_/   \_\_/ \_\                            |
    //                                       - cidak.co           |
    // ___________________________________________________________|

  useEffect(() => {
    if (!isReady || dimensions.width <= 0 || dimensions.height <= 0) return;

    let frame = 0;
    let timerId = null;
    let running = true;

    const renderFrame = () => {
      frame++;
      const t = frame * 0.10; // time factor to control speed

      let out = '';
      for (let y = 0; y < dimensions.height; y++) {
        for (let x = 0; x < dimensions.width; x++) {

          // Center the coordinates
          const nx = (x / dimensions.width) - 0;
          const ny = (y / dimensions.height) - 0.5;
          
          // Convert to polar coordinates
          const r = Math.sqrt(nx * nx + ny * ny);
          const angle = Math.atan2(ny, nx);
          
          // Flower parameters
          const petalCount = 12;
          const frequency = 9;
          const pulsing = 1 + 0.4 * Math.sin(t * 1.5);
          
          // Create flower pattern
          const petals = Math.sin(angle * petalCount);
          const rings = Math.cos(r * frequency * pulsing - t);
          const fade = Math.exp(-r * 0.5); // fade outward
          
          const v = petals * rings * fade;

          // Map v to a small set of ASCII density chars
          const charset = ' ._:+=#@%$';
          const idx = Math.floor(((v + 1) / 2) * (charset.length - 1));
          out += charset[Math.max(0, Math.min(charset.length - 1, idx))];
        }
        if (y < dimensions.height - 1) out += '\n';
      }

      setDisplayed(out);

      // schedule next frame
      if (!running) return;
      timerId = setTimeout(renderFrame, 1000 / 500);
    };

    renderFrame();

    return () => {
      running = false;
      if (timerId) clearTimeout(timerId);
    };
  }, [dimensions, isReady]); // re-run when dimensions change

  // Render the ASCII inside a <pre>. The containerRef is used for sizing.
  return (
    <pre ref={containerRef} className="ascii-container" aria-live="off">
      {displayed}
    </pre>
  );
};

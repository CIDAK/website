import React, { useEffect, useRef, useState, useCallback } from 'react';
import '../App.css';

export const AsciiAnimation = () => {
  const [displayed, setDisplayed] = useState('');
  const [dimensions, setDimensions] = useState({ width: 80, height: 40 });
  const [isReady, setIsReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  // Check if device is mobile
  const checkIfMobile = () => {
    const mobile = window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    setIsMobile(mobile);
  };

  // Wrap calculateDimensions in useCallback
  const calculateDimensions = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;
    
    const span = document.createElement('span');
    span.style.font = getComputedStyle(el).font;
    span.style.visibility = 'hidden';
    span.style.position = 'absolute';
    span.textContent = 'M';
    document.body.appendChild(span);

    const charWidth = span.offsetWidth; 
    const charHeight = span.offsetHeight;
    document.body.removeChild(span);

    // For mobile, add extra padding and allow overflow
    const padding = isMobile ? 5 : 0;
    const cols = Math.max(1, Math.floor(rect.width / charWidth) + padding);
    const rows = Math.max(1, Math.floor(rect.height / charHeight) + padding);

    setDimensions({ width: cols, height: rows });
    setIsReady(true);
  }, [isMobile, containerRef]);

  useEffect(() => {
    checkIfMobile();
    
    const initialize = () => {
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => setTimeout(calculateDimensions, 120));
      } else {
        setTimeout(calculateDimensions, 200);
      }
    };

    if (document.readyState === 'complete') {
      initialize();
    } else {
      window.addEventListener('load', initialize);
    }

    let resizeTimer = null;
    const handleResize = () => {
      checkIfMobile();
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(calculateDimensions, 80);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', initialize);
      if (resizeTimer) clearTimeout(resizeTimer);
    };
  }, [isMobile, calculateDimensions]); // <-- Add calculateDimensions here

  useEffect(() => {
    if (!isReady || dimensions.width <= 0 || dimensions.height <= 0) return;

    let frame = 0;
    let timerId = null;
    let running = true;

    const renderFrame = () => {
      frame++;
      // Slower animation on mobile devices
      const timeSpeed = isMobile ? 0.10 : 0.15;
      const t = frame * timeSpeed;

      let out = '';
      for (let y = 0; y < dimensions.height; y++) {
        for (let x = 0; x < dimensions.width; x++) {

          const nx = (x / dimensions.width) - 0;
          const ny = (y / dimensions.height) - 0.5;
          
          const r = Math.sqrt(nx * nx + ny * ny);
          const angle = Math.atan2(ny, nx);
          
          const petalCount = 12;
          const frequency = 9;
          const pulsing = 1 + 0.4 * Math.sin(t * 1.5);
          
          const petals = Math.sin(angle * petalCount);
          const rings = Math.cos(r * frequency * pulsing - t);
          const fade = Math.exp(-r * 0.5);
          
          const v = petals * rings * fade;

          const charset = ' ._:+=#@%$';
          const idx = Math.floor(((v + 1) / 2) * (charset.length - 1));
          out += charset[Math.max(0, Math.min(charset.length - 1, idx))];
        }
        if (y < dimensions.height - 1) out += '\n';
      }

      setDisplayed(out);

      if (!running) return;
      // Slower frame rate on mobile to improve performance
      const frameRate = isMobile ? 1000 / 15 : 1000 / 500;
      timerId = setTimeout(renderFrame, frameRate);
    };

    renderFrame();

    return () => {
      running = false;
      if (timerId) clearTimeout(timerId);
    };
  }, [dimensions, isReady, isMobile]);

  // Render the ASCII inside a <pre>. The containerRef is used for sizing.
  return (
    <pre ref={containerRef} className="ascii-container" aria-live="off">
      {displayed}
    </pre>
  );
};

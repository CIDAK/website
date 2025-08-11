import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const Wave_Char = [' ', '.', ':', '-', '=', '+', '*', '#', '@'];

export const AsciiAnimation = () => {
  const [displayed, setDisplayed] = useState('');
  const [dimensions, setDimensions] = useState({ width: 80, height: 40 });
  const containerRef = useRef(null);
  
  // Function to calculate how many characters fit in the container
  const calculateDimensions = () => {
    if (!containerRef.current) return;
    
    // Get the actual container size in pixels
    const containerRect = containerRef.current.getBoundingClientRect();
    
    // Create a temporary element to measure character size
    const testElement = document.createElement('span');
    testElement.style.font = getComputedStyle(containerRef.current).font;
    testElement.style.visibility = 'hidden';
    testElement.style.position = 'absolute';
    testElement.textContent = 'M'; // Use 'M' as it's typically the widest character
    document.body.appendChild(testElement);
    
    // Get character dimensions
    const charWidth = testElement.offsetWidth;
    const charHeight = testElement.offsetHeight;
    
    // Clean up
    document.body.removeChild(testElement);
    
    // Calculate how many characters fit
    const cols = Math.floor(containerRect.width / charWidth);
    const rows = Math.floor(containerRect.height / charHeight);
    
    // Update dimensions with some padding to ensure it fits nicely
    setDimensions({
      width: Math.max(0, cols ), 
      height: Math.max(0, rows )
    });
  };
  
  // Effect to handle window resizing
  useEffect(() => {
    // Calculate initial dimensions
    const initialCalculation = () => {
      setTimeout(calculateDimensions, 100); // Small delay to ensure rendering is complete
    };
    
    initialCalculation();
    
    // Recalculate on window resize
    const handleResize = () => {
      setTimeout(calculateDimensions, 50);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Main animation effect
  useEffect(() => {
    let frameCount = 0;
    let animationId;
    
    const animate = () => {
      frameCount++;
      
      // Convert frame count to time - this drives our wave motion
      const t = frameCount * 0.05; // Slightly faster animation
      
      // Calculate the center of our dynamic grid
      const centerX = dimensions.width / 25;
      const centerY = dimensions.height / 2;
      
      let newDisplay = '';
      
      // Generate ripple for the dynamically sized grid
      for (let y = 0; y < dimensions.height; y++) {
        for (let x = 0; x < dimensions.width; x++) {
          // Distance from ripple center (this is our radius)
          const r = Math.sqrt((x + centerX)**2 + (y - centerY)**2);
          
          // Ripple parameters - these control the wave behavior
          const amplitude = 3; 
          const waveNumber = 0.20; 
          const frequency = 0.3; 
          const dampingRate = 0.04; 
          
          // The mathematical heart
          const damping = Math.exp(-r * dampingRate); // Exponential decay
          const waveValue = amplitude * damping * Math.sin(waveNumber * r - frequency * t);
          
          // Convert the continuous wave value to discrete character indices
          const normalized = (waveValue + amplitude * damping) / (2 * amplitude * damping + 0.001);
          const charIndex = Math.floor(normalized * (Wave_Char.length - 1));
          const safeIndex = Math.max(0, Math.min(Wave_Char.length - 1, charIndex));
          
          newDisplay += Wave_Char[safeIndex];
        }
        newDisplay += '\n';
      }
      
      setDisplayed(newDisplay);
      
      // Use setTimeout instead of setInterval for smoother animation
      animationId = setTimeout(animate, 60); // ~16 FPS for smooth motion
    };
    
    animate();
  
    return () => {
      if (animationId) {
        clearTimeout(animationId);
      }
    };
  }, [dimensions]);
  
  return (
    <pre 
      ref={containerRef} 
      className="ascii-container"
    >
      {displayed}
    </pre>
  );
};
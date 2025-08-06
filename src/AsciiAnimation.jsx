import React, { useState, useEffect } from 'react';
import './App.css';

export const AsciiAnimation = () => { 
  const [displayed, setDisplayed] = useState('');  // “Here is the blank screen. I'm will slowly add characters to it.”

  const cidak = ['C', 'I', 'D', 'A', 'K']

  useEffect(() => {  // start animation
    let i = 0;

    const timer = setInterval(() => {

      setDisplayed((prev) => prev + cidak[i]);

      i += 1;

      if (i >= cidak.length) {

        clearInterval(timer);
      }
    }, 50);



    // Clean up 
    return () => clearInterval(timer);
  }, [cidak]);

  // Render (I changed it too a jsx file to make it easier for me @DylanPrinsloo) 
  return (
    <pre className="ascii-container">
      {displayed}
    </pre>
  );
};

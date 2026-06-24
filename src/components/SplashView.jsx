import React, { useEffect } from 'react';

export default function SplashView({ onNext }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onNext();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <div className="splash-screen" onClick={onNext} title="Click to skip">
      <div className="splash-card">
        <div className="splash-content">
          <img 
            src="/splash-butterfly.png" 
            alt="ELVORA Butterfly Logo" 
            className="splash-butterfly"
          />
          <h1 className="splash-title">ELVORA</h1>
        </div>
      </div>
    </div>
  );
}

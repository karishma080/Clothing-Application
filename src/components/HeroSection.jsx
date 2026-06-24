import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { heroSlides } from '../data';

export default function HeroSection({ onShopClick }) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-container">
      {heroSlides.map((slide, index) => (
        <div 
          key={slide.id} 
          className={`hero-slide ${index === activeSlide ? 'active' : ''}`}
        >
          <div 
            className="hero-bg-image" 
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="container">
            <div className="hero-content">
              <span className="hero-subtitle">{slide.subtitle}</span>
              <h1 className="hero-title heading-serif">{slide.title}</h1>
              <p className="hero-tagline">{slide.tagline}</p>
              <button className="hero-btn" onClick={onShopClick}>
                {slide.buttonText}
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="hero-indicators">
        {heroSlides.map((_, index) => (
          <button 
            key={index}
            className={`hero-indicator-dot ${index === activeSlide ? 'active' : ''}`}
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import '../styles/slider.css';

export default function ExpandableSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Manual click activation
  const setActive = (index) => {
    setCurrentIndex(index);
  };

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="options">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`option ${currentIndex === index ? 'active' : ''}`}
          style={{ '--optionImage': `url(${slide.image})` }}
          onClick={() => setActive(index)}
        >
          <div className="label">
            <div className="icon">
              {slide.icon.startsWith('/') ? (
                <img src={slide.icon} alt={slide.title} className="icon-image" />
              ) : (
                <i className={slide.icon}></i>
              )}
            </div>
            <div className="info">
              <div className="main">{slide.title}</div>
              <div className="sub">{slide.subtitle}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

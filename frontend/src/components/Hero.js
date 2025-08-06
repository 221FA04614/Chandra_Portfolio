import React, { useState, useEffect, useMemo } from 'react';
import './Hero.css';

export default function Hero({ profile }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  // DEBUG: useMemo is used here to prevent the 'titles' array from being recreated on every render,
  // which would cause the useEffect hook to run unnecessarily.
  const titles = useMemo(() => [
    "Full-Stack Developer",
    "AI/ML Enthusiast",
  ], []);

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, titles]);

  if (!profile) return null;

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="hero-grid-pattern" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 0h40v40H0V0zm20 20a20 20 0 1 1 0-40 20 20 0 0 1 0 40z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="hero-content">
        <div className="hero-animation-wrapper">
          <h1 className="hero-name">
            <span className="gradient-text">
              {profile.name.split(' ').slice(-1)[0]}
            </span>
          </h1>
          
          <div className="hero-typing-animation">
            <span className="hero-i-am">I'm a </span>
            <span className="hero-dynamic-text">
              {displayText}
              <span className="hero-cursor">|</span>
            </span>
          </div>

          <p className="hero-description">
            Passionate about creating innovative solutions through code, 
            specializing in full-stack development and artificial intelligence.
          </p>

          <div className="hero-cta-buttons">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="hero-cta-button primary"
            >
              View My Work
            </button>
            
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="hero-cta-button secondary"
            >
              Get In Touch
            </button>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <div className="scroll-indicator-content">
            <span className="scroll-text">Scroll Down</span>
            <svg className="scroll-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
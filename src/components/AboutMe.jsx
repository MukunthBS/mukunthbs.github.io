import React, { useState, useRef } from "react";
import "../styles/AboutMe.css";

const AboutMe = () => {
  const [openSection, setOpenSection] = useState(null);
  const backgroundRef = useRef(null);

  const toggleSection = (section) => {
    const wasOpen = openSection === section;
    setOpenSection(wasOpen ? null : section);
    
    if (!wasOpen) {
      setTimeout(() => {
        if (backgroundRef.current) {
          backgroundRef.current.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center',
            inline: 'nearest'
          });
        }
      }, 400);
    }
  };

  return (
    <div className="about-container">
      <div className="about-content">
        <div className="hero-section">
          <div className="hero-left">
            <div className="profile-image">
              <img src="/assets/profile.jpg" alt="Mukunth" />
            </div>
          </div>
          <div className="hero-right">
            <div className="intro-window">
              <p className="intro">
                <a 
                  href="https://www.whatyoumissedintamilclass.io/post/vanakkam-a-tamil-greeting-for-the-soul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vanakkam-link"
                >
                  Vanakkam
                </a>! I'm Mukunth — a developer fluent in code and caffeine. I turn
                tangled ideas into clean interfaces and try to keep the crying (mine
                or the user's) to a minimum.
              </p>
            </div>
          </div>
        </div>

        <div className="background-section">
          <section 
            ref={backgroundRef}
            className={`accordion-item background ${openSection === 'background' ? 'open' : ''}`}
          >
            <div 
              className="accordion-trigger"
              onClick={() => toggleSection('background')}
            >
              <div className="accordion-label">
                <h3>background</h3>
              </div>
              <div className="accordion-indicator">
                <span className="indicator-line"></span>
                <span className={`indicator-icon ${openSection === 'background' ? 'open' : ''}`}>
                  <i className="fas fa-plus"></i>
                </span>
              </div>
            </div>
            <div className="accordion-content">
              <div className="accordion-body">
                <p>
                  A recent Master's graduate in Computer Science from the University
                  of Utah, I bring a diverse background in development, research,
                  and design. My experience spans from cryptography research to
                  full-stack development, allowing me to approach problems with a
                  unique perspective and create innovative solutions.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

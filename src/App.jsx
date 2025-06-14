import React, { useState } from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Works from './components/Works';
import TechStack from './components/TechStack';
import Contact from './components/Contact';

function App() {
  const [activePopup, setActivePopup] = useState(null);

  const openPopup = (name) => {
    setActivePopup(name);
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  const isOpen = Boolean(activePopup);

  const renderPopupContent = () => {
    switch (activePopup) {
      case 'about-me':
        return <AboutMe />;
      case 'works':
        return <Works />;
      case 'tech-stack':
        return <TechStack />;
      case 'contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <div className="name">Mukunth Balaramachandran Srinivasan</div>

      <div className="nav">
        <ul>
          <li onClick={() => openPopup('about-me')}>About Me</li>
          <li onClick={() => openPopup('works')}>Works</li>
          <li onClick={() => openPopup('tech-stack')}>Tech Stack</li>
          <li onClick={() => openPopup('contact')}>Contact</li>
        </ul>
      </div>

      <div className={`overlay ${isOpen ? 'show' : 'hide'}`} onClick={closePopup} />

      <div className={`pop-ups ${isOpen ? 'show' : 'hide'}`}>
        <div className="popup-content">
          <div className="title">
            <span className="close" onClick={closePopup}>
              x
            </span>
          </div>
          <div className="content">
            {renderPopupContent()}
          </div>
        </div>
      </div>

      <div className="quote">
        <div>ARS LONGA VITA BREVIS</div>
        <div>art is eternal, life is short</div>
      </div>

      <div className="links">
        <a href="https://www.linkedin.com/in/mukunth-bs/">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="mailto:bsmukunth@gmail.com">
          <i className="fa-solid fa-at"></i>
        </a>
        <a href="https://github.com/MukunthBS/">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  );
}

export default App;

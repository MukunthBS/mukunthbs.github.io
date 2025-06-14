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
      case 'who-i-am':
        return <AboutMe />;
      case 'what-i-built':
        return <Works />;
      case 'what-i-use':
        return <TechStack />;
      case 'where-i-am':
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
          <li onClick={() => openPopup('who-i-am')}>who-i-am</li>
          <li onClick={() => openPopup('what-i-built')}>what-i-built</li>
          <li onClick={() => openPopup('what-i-use')}>what-i-use</li>
          <li onClick={() => openPopup('where-i-am')}>where-i-am</li>
        </ul>
      </div>

      <div className={`overlay ${isOpen ? 'show' : 'hide'}`} onClick={closePopup} />

      <div className={`pop-ups ${isOpen ? 'show' : 'hide'}`}>
        <div className="popup-content">
          <div className="title">
            <p>portfolio/{activePopup}/</p>
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

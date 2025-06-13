import React, { useState } from 'react';
import './App.css';
import BehindTheScenes from './components/BehindTheScenes';
import ThePrologue from './components/ThePrologue';
import Chapters from './components/Chapters';
import SpinOffs from './components/SpinOffs';

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
      case 'behind-the-scenes':
        return <BehindTheScenes />;
      case 'the-prologue':
        return <ThePrologue />;
      case 'chapters':
        return <Chapters />;
      case 'spin-offs':
        return <SpinOffs />;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <div className="name">Mukunth Balaramachandran Srinivasan</div>

      <div className="nav">
        <ul>
          <li onClick={() => openPopup('behind-the-scenes')}>behind-the-scenes</li>
          <li onClick={() => openPopup('the-prologue')}>the-prologue</li>
          <li onClick={() => openPopup('chapters')}>chapters</li>
          <li onClick={() => openPopup('spin-offs')}>spin-offs</li>
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

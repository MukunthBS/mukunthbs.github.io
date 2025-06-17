import React, { useState, useEffect } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Works from "./components/Works";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";

function App() {
  const [activePopup, setActivePopup] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const openPopup = (name) => {
    setActivePopup(name);
    setIsVisible(true);
    // Use requestAnimationFrame to ensure the element is in the DOM before starting animation
    requestAnimationFrame(() => {
      setIsAnimating(true);
    });
  };

  const closePopup = () => {
    setIsAnimating(false);
    // Wait for animation to complete before removing content
    setTimeout(() => {
      setIsVisible(false);
      setActivePopup(null);
    }, 500); // Match this with CSS transition duration
  };

  const renderPopupContent = () => {
    if (!activePopup) return null;

    switch (activePopup) {
      case "who-i-am":
        return <AboutMe />;
      case "what-i-built":
        return <Works />;
      case "what-i-use":
        return <TechStack />;
      case "where-i-am":
        return <Contact />;
      default:
        return null;
    }
  };

  const getTitleIcon = (section) => {
    switch (section) {
      case "who-i-am":
        return <i className="fa-solid fa-user"></i>;
      case "what-i-built":
        return <i className="fa-solid fa-code"></i>;
      case "what-i-use":
        return <i className="fa-solid fa-tools"></i>;
      case "where-i-am":
        return <i className="fa-solid fa-envelope"></i>;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <div className="background-blur"></div>
      <div className="name">Mukunth Balaramachandran Srinivasan</div>

      <div className="nav">
        <ul>
          <li onClick={() => openPopup("who-i-am")}>who-i-am</li>
          <li onClick={() => openPopup("what-i-built")}>what-i-built</li>
          <li onClick={() => openPopup("what-i-use")}>what-i-use</li>
          <li onClick={() => openPopup("where-i-am")}>where-i-am</li>
        </ul>
      </div>

      {isVisible && (
        <>
          <div
            className={`overlay ${isAnimating ? "show" : ""}`}
            onClick={closePopup}
          />

          <div className={`pop-ups ${isAnimating ? "show" : ""}`}>
            <div className="title">
              <div className="title-content">
                <span className="title-icon">{getTitleIcon(activePopup)}</span>
                <p>portfolio/{activePopup}/</p>
              </div>
              <span className="close" onClick={closePopup}>
                x
              </span>
            </div>
            <div className="content">{renderPopupContent()}</div>
          </div>
        </>
      )}

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

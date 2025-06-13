import React from 'react';
import '../styles/ThePrologue.css';

const ThePrologue = () => {
  return (
    <div className="prologue-container">
      <div className="prologue-content">
        <h2>The Prologue</h2>
        <p className="intro">
          This is where my story begins. I'm a passionate developer focused on creating meaningful 
          digital experiences through clean code and innovative solutions.
        </p>
        <div className="prologue-details">
          <section className="about-me">
            <h3>About Me</h3>
            <p>
              A software developer with a keen eye for detail and a passion for creating elegant solutions. 
              My journey in technology is driven by curiosity and a desire to build things that make a difference.
            </p>
          </section>
          <section className="philosophy">
            <h3>My Philosophy</h3>
            <ul>
              <li>Write clean, maintainable code</li>
              <li>Focus on user experience</li>
              <li>Embrace continuous learning</li>
              <li>Build with purpose</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ThePrologue; 
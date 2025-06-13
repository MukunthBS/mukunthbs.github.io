import React from 'react';
import '../styles/BTS.css';

const BehindTheScenes = () => {
  return (
    <div className="bts-container">
      <div className="bts-content">
        <h2>Behind the Scenes</h2>
        <p>
          Welcome to my development journey! Here you'll find insights into my technical decisions, 
          challenges faced, and the learning process behind each project.
        </p>
        <div className="bts-details">
          <section className="tech-stack">
            <h3>Tech Stack</h3>
            <ul>
              <li>React</li>
              <li>CSS3</li>
              <li>JavaScript</li>
            </ul>
          </section>
          <section className="development-process">
            <h3>Development Process</h3>
            <p>
              This portfolio was built with a focus on clean code, performance, and user experience.
              Each component was carefully crafted to ensure smooth interactions and maintainable code.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BehindTheScenes; 
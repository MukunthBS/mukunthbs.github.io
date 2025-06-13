import React from 'react';
import '../styles/Chapters.css';

const Chapters = () => {
  return (
    <div className="chapters-container">
      <div className="chapters-content">
        <h2>Chapters</h2>
        <p className="intro">
          Explore my major projects and achievements. Each chapter represents a significant milestone 
          in my development career and showcases my technical expertise.
        </p>
        <div className="chapters-grid">
          <section className="chapter">
            <h3>Project One</h3>
            <p>
              A full-stack web application built with React and Node.js, featuring real-time updates 
              and responsive design.
            </p>
            <div className="tech-tags">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </div>
          </section>
          <section className="chapter">
            <h3>Project Two</h3>
            <p>
              An innovative mobile-first solution that demonstrates advanced UI/UX principles and 
              performance optimization.
            </p>
            <div className="tech-tags">
              <span>React Native</span>
              <span>Redux</span>
              <span>Firebase</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Chapters; 
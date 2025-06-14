import React from 'react';
import '../styles/Works.css';

const Works = () => {
  return (
    <div className="works-container">
      <div className="works-content">
        <h2>my works</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>project 1</h3>
            <p>A brief description of the first project and its key features.</p>
            <div className="project-links">
              <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
          <div className="project-card">
            <h3>project 2</h3>
            <p>A brief description of the second project and its key features.</p>
            <div className="project-links">
              <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
          <div className="project-card">
            <h3>project 3</h3>
            <p>A brief description of the third project and its key features.</p>
            <div className="project-links">
              <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works; 
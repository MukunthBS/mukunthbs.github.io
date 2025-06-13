import React from 'react';
import '../styles/SpinOffs.css';

const SpinOffs = () => {
  return (
    <div className="spin-offs-container">
      <div className="spin-offs-content">
        <h2>Spin-offs</h2>
        <p className="intro">
          Discover my side projects, experiments, and creative endeavors. These smaller ventures 
          reflect my curiosity and drive to explore new technologies.
        </p>
        <div className="experiments-grid">
          <section className="experiment">
            <h3>UI Component Library</h3>
            <p>
              A collection of reusable React components built with accessibility and customization in mind.
            </p>
            <div className="experiment-tags">
              <span>React</span>
              <span>Storybook</span>
              <span>CSS Modules</span>
            </div>
          </section>
          <section className="experiment">
            <h3>Animation Playground</h3>
            <p>
              A creative space for exploring CSS animations and interactive web experiences.
            </p>
            <div className="experiment-tags">
              <span>CSS</span>
              <span>GSAP</span>
              <span>Canvas</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SpinOffs; 
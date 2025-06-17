import React from "react";
import "../styles/AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2>about me</h2>
        <div className="intro-section">
          <div className="profile-image">
            <img src="/assets/profile.jpg" alt="Mukunth" />
          </div>
          <p className="intro">
            Hi! I'm Mukunth — a developer fluent in code and caffeine. I turn
            tangled ideas into clean interfaces and try to keep the crying (mine
            or the user's) to a minimum.
          </p>
        </div>
        <div className="about-details">
          <section className="background">
            <h3>background</h3>
            <p>
              A recent Master's graduate in Computer Science from the University
              of Utah, I bring a diverse background in development, research,
              and design. My experience spans from cryptography research to
              full-stack development, allowing me to approach problems with a
              unique perspective and create innovative solutions.
            </p>
          </section>
          <section className="philosophy">
            <h3>my expertise</h3>
            <ul>
              <li>Front-End Development</li>
              <li>Data Visualization</li>
              <li>UI/UX Design</li>
              <li>Cryptography</li>
              <li>Applied Machine Learning</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

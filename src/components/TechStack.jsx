import React from "react";
import "../styles/TechStack.css";

const TechStack = () => {
  return (
    <div className="tech-container">
      <div className="tech-content">
        <h2>tech stack</h2>
        <div className="tech-grid">
          <div className="tech-category">
            <h3>frontend</h3>
            <div className="tech-items">
              <div className="tech-item">
                <span className="tech-name">React</span>
                <div className="tech-level">
                  <div className="progress" style={{ width: "90%" }}></div>
                </div>
              </div>
              <div className="tech-item">
                <span className="tech-name">JavaScript</span>
                <div className="tech-level">
                  <div className="progress" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div className="tech-item">
                <span className="tech-name">HTML/CSS</span>
                <div className="tech-level">
                  <div className="progress" style={{ width: "95%" }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="tech-category">
            <h3>backend</h3>
            <div className="tech-items">
              <div className="tech-item">
                <span className="tech-name">Node.js</span>
                <div className="tech-level">
                  <div className="progress" style={{ width: "80%" }}></div>
                </div>
              </div>
              <div className="tech-item">
                <span className="tech-name">Python</span>
                <div className="tech-level">
                  <div className="progress" style={{ width: "75%" }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="tech-category">
            <h3>tools & others</h3>
            <div className="tech-items">
              <div className="tech-item">
                <span className="tech-name">Git</span>
                <div className="tech-level">
                  <div className="progress" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div className="tech-item">
                <span className="tech-name">Docker</span>
                <div className="tech-level">
                  <div className="progress" style={{ width: "70%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;

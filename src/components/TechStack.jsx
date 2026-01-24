import React from "react";
import "../styles/TechStack.css";

const TechStack = () => {
  const techIcons = {
    // Languages & Tools
    Python: "fab fa-python",
    "C#": "fas fa-code",
    Java: "fab fa-java",
    SQL: "fas fa-database",
    MATLAB: "fas fa-calculator",
    "Assembly (8086)": "fas fa-microchip",
    "HTML/CSS/JavaScript": "fab fa-js",
    GLSL: "fas fa-cube",

    // Libraries & Frameworks
    React: "fab fa-react",
    "Node.js": "fab fa-node-js",
    OpenGL: "fas fa-cube",
    snarkjs: "fas fa-shield-alt",
    Tkinter: "fas fa-window-maximize",
    Pandas: "fas fa-table",
    NumPy: "fas fa-calculator",
    Matplotlib: "fas fa-chart-line",
    "D3.js": "fas fa-chart-bar",

    // Software & Platforms
    Git: "fab fa-git-alt",
    Unity: "fas fa-gamepad",
    Arduino: "fas fa-microchip",
    "Adobe Photoshop/Premiere Pro": "fas fa-palette",
    "MS Office": "fas fa-file-word",
  };

  const categories = {
    "Languages & Tools": [
      "Python",
      "C#",
      "Java",
      "SQL",
      "MATLAB",
      "Assembly (8086)",
      "HTML/CSS/JavaScript",
      "GLSL",
    ],
    "Libraries & Frameworks": [
      "React",
      "Node.js",
      "OpenGL",
      "snarkjs",
      "Tkinter",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "D3.js",
    ],
    "Software & Platforms": [
      "Git",
      "Unity",
      "Arduino",
      "Adobe Photoshop/Premiere Pro",
      "MS Office",
    ],
  };

  return (
    <div className="tech-container">
      <div className="tech-content">
        {Object.entries(categories).map(([category, techs]) => (
          <div key={category} className="tech-section">
            <div className="section-header">
              <h3>{category}</h3>
            </div>
            <div className="tech-cloud">
              {techs.map((tech) => (
                <div key={tech} className="tech-badge">
                  <div className="tech-badge-icon">
                    <i className={techIcons[tech]}></i>
                  </div>
                  <span className="tech-badge-name">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;

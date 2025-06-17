import React from "react";
import "../styles/Works.css";

const Works = () => {
  const projects = [
    {
      title:
        "Cards on the Table: Secure Card Games without a Trusted Party using ZK-Proofs",
      description: [
        "Privacy-preserving card game using zero-knowledge proofs for fair play without trusted parties.",
      ],
      tech: ["JavaScript", "snarkjs", "Circom", "ZK-Proofs"],
      github: "#",
      demo: "#",
    },
    {
      title: "GPU Pipeline and Rendering Techniques",
      description: [
        "Advanced 3D rendering implementation with OpenGL featuring modern graphics techniques.",
      ],
      tech: ["OpenGL", "GLSL", "C++"],
      github: "#",
      demo: "#",
    },
    {
      title: "'Moe' - A Custom Programming Language Interpreter",
      description: [
        "Racket-based interpreter supporting core programming features with comprehensive testing.",
      ],
      tech: ["Racket", "Testing"],
      github: "#",
      demo: "#",
    },
    {
      title:
        "Named Entity Recognition and Sentiment Analysis using BERT encodings on Tamil Language",
      description: [
        "NLP system for Tamil language with high-accuracy entity recognition and sentiment analysis.",
      ],
      tech: ["Python", "BERT", "React", "NLP"],
      github: "#",
      demo: "#",
    },
    {
      title: "Neural Style Transfer Software",
      description: [
        "Interactive image style transfer tool using VGG19 with customizable parameters.",
      ],
      tech: ["Python", "VGG19", "Tkinter"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <div className="works-container">
      <div className="works-content">
        <h2>my works</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-card-inner">
                <div className="project-card-front">
                  <h3>{project.title}</h3>
                  <div className="project-description">
                    {project.description.map((desc, i) => (
                      <p key={i} dangerouslySetInnerHTML={{ __html: desc }} />
                    ))}
                  </div>
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="project-card-back">
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <i className="fab fa-github"></i>
                      View Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <i className="fas fa-external-link-alt"></i>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;

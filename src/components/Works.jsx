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
      github: "https://github.com/maadscientist/ZK_blackjack",
    },
    {
      title: "GPU Pipeline and Rendering Techniques",
      description: [
        "Advanced 3D rendering implementation with OpenGL featuring modern graphics techniques.",
      ],
      tech: ["OpenGL", "GLSL", "C++"],
      github: "https://github.com/MukunthBS/Interactive-Computer-Graphics",
    },
    {
      title: "'Moe' - A Custom Programming Language Interpreter",
      description: [
        "Racket-based interpreter supporting core programming features with comprehensive testing.",
      ],
      tech: ["Racket", "Testing"],
      github: "https://github.com/MukunthBS/moe",
    },
    {
      title:
        "Named Entity Recognition and Sentiment Analysis using BERT encodings on Tamil Language",
      description: [
        "NLP system for Tamil language with high-accuracy entity recognition and sentiment analysis.",
      ],
      tech: ["Python", "BERT", "React", "NLP"],
    },
    {
      title: "Neural Style Transfer Software",
      description: [
        "Interactive image style transfer tool using VGG19 with customizable parameters.",
      ],
      tech: ["Python", "VGG19", "Tkinter"],
      github: "https://github.com/MukunthBS/Neural-Style-Transfer-GUI",
    },
  ];

  return (
    <div className="works-container">
      <div className="works-content">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-card-inner">
                <div className="project-card-front">
                  <div className="project-card-content">
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
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-bottom"
                    >
                      <i className="fab fa-github"></i>
                      View Code
                    </a>
                  )}
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

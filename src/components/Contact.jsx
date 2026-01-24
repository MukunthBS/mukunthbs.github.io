import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-intro">
          <p>
            Feel free to reach out for any queries or just a friendly hello!
          </p>
        </div>

        <div className="contact-grid">
          <div 
            className="contact-card email-card"
            onClick={() => window.location.href = "mailto:bsmukunth@gmail.com"}
          >
            <div className="card-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="card-content">
              <h3>Email</h3>
              <p className="card-value">bsmukunth@gmail.com</p>
              <span className="card-hint">Click to send email</span>
            </div>
            <div className="card-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>

          <div className="contact-card location-card">
            <div className="card-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="card-content">
              <h3>Location</h3>
              <p className="card-value">Salt Lake City, UT</p>
              <span className="card-hint">Currently based in Utah</span>
            </div>
          </div>

          <a
            href="https://github.com/MukunthBS"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card social-card github-card"
          >
            <div className="card-icon">
              <i className="fab fa-github"></i>
            </div>
            <div className="card-content">
              <h3>GitHub</h3>
              <p className="card-value">@MukunthBS</p>
              <span className="card-hint">View my repositories</span>
            </div>
            <div className="card-arrow">
              <i className="fas fa-external-link-alt"></i>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/mukunth-bs"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card social-card linkedin-card"
          >
            <div className="card-icon">
              <i className="fab fa-linkedin"></i>
            </div>
            <div className="card-content">
              <h3>LinkedIn</h3>
              <p className="card-value">mukunth-bs</p>
              <span className="card-hint">Connect professionally</span>
            </div>
            <div className="card-arrow">
              <i className="fas fa-external-link-alt"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

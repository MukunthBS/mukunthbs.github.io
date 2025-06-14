import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h2>contact me</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>get in touch</h3>
            <p>
              Feel free to reach out for any queries or just a friendly hello!
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>bsmukunth@gmail.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+1 (385)-563-8216</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Salt Lake City, UT</span>
              </div>
            </div>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send<i className="fa-regular fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

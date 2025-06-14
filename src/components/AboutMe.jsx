import React from "react";
import "../styles/AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2>about me</h2>
        <p className="intro">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
          quaerat delectus veritatis aliquid, molestiae vero. Autem distinctio,
          dignissimos enim totam cupiditate sed id hic harum accusamus atque
          dolores et fugit.
        </p>
        <div className="about-details">
          <section className="background">
            <h3>background</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Veniam quaerat delectus veritatis aliquid, molestiae vero. Autem
              distinctio, dignissimos enim totam cupiditate sed id hic harum
              accusamus atque dolores et fugit.
            </p>
          </section>
          <section className="philosophy">
            <h3>my philosophy</h3>
            <ul>
              <li>Write clean, maintainable code</li>
              <li>Focus on user experience</li>
              <li>Embrace continuous learning</li>
              <li>Build with purpose</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

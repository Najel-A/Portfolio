import React from "react";
import "../styles/about.css";
import profileImage from "../assets/home.png"; // Import image

const About = () => {
  return (
    <section id="about" className="about">
      {/* Header */}
      <h2 className="about__header">About Me</h2>

      {/* Content */}
      <div className="about__content">
        {/* Image Container */}
        <div className="about__image-container">
          <img
            src={profileImage}
            alt="Portrait of Me"
            className="about__image"
          />
        </div>

        {/* Text Container */}
        <div className="about__text-container">
          <p className="about__text">
            Hello! I'm a software engineer based in the Bay Area, California. I
            earned my Bachelor of Science in Computer Engineering with a minor
            in Computer Science from the University of California, Santa Cruz.
            Currently, I am pursuing a Master of Science in Applied Data Intelligence
            at San Jose State University.
          </p>
          <p className="about__text">
            I'm passionate about building robust, scalable systems—whether it's on the backend, 
            across the full stack, or within data infrastructure. I'm especially interested in 
            roles that involve backend development, data engineering, or AI/ML, and my current 
            master's program in Applied Data Intelligence has given me 
            hands-on experience with many of these topics.
          </p>
          <p className="about__text">
            Outside of work, I enjoy snowboarding 
            in the winter, lifting weights, and going to music festivals!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import "../styles/about.css";

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
            src="/path-to-your-image.jpg"
            alt="Portrait of Me"
            className="about__image"
          />
        </div>

        {/* Text Container */}
        <div className="about__text-container">
          <p className="about__text">
            Hello! I’m a software engineer based in the Bay Area, California. I
            earned my Bachelor of Science in Computer Engineering with a minor
            in Computer Science from the University of California, Santa Cruz.
            Currently, I’m pursuing a Master of Science in Data Analytics with
            a specialization in Data Engineering at San Jose State University.
          </p>
          <p className="about__text">
            My professional interests focus on AI/ML roles as well as backend
            roles within software engineering. In my free time, I enjoy
            snowboarding in the winter, hiking during summer, and working on
            personal web development projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

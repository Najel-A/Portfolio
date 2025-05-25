import React, { useState } from "react";
import "../styles/projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Traffic Data Analysis",
      description: "Amazon Redshift Analysis of Bay Area Traffic",
      link: "https://github.com/Najel-A/Traffic-Data",
    },

    {
        title: "Generative Visuals",
        description: "A hackathon project that syncs laser visuals with music files using generative AI and Machine Learning.",
        link: "https://github.com/Najel-A/generative-visuals",
    },

    {
        title: "Job Market Analysis",
        description: "Interavtive PowerBI Dashboard exploring the U.S. Job Market",
        link: "https://github.com/Najel-A/Analyzing-Job-Market",
    },

    {
      title: "Slack Clone",
      description: "Kotlin, Swift, & React Native Slack clone with FastAPI backend.",
      link: "https://gitfront.io/r/user-5426869/6vgYNRwwnUYs/Slack-Clone/",
    },

    
  ];

  const [currentProject, setCurrentProject] = useState(0);

  const handlePrev = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="projects" className="projects">
      <h2 className="projects__header">Projects</h2>

      <div className="projects__container">
        <button className="projects__arrow projects__arrow--left" onClick={handlePrev}>
          &#8249;
        </button>

        <div className="projects__content">
          <h3 className="projects__title">{projects[currentProject].title}</h3>
          <p className="projects__description">{projects[currentProject].description}</p>
          <a
            href={projects[currentProject].link}
            target="_blank"
            rel="noopener noreferrer"
            className="projects__link"
          >
            View Project
          </a>
        </div>

        <button className="projects__arrow projects__arrow--right" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default Projects;

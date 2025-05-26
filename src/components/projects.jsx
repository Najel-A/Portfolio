import React, { useState } from "react";
import "../styles/projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Uber Clone",
      description: "Designed and developed a full-stack ride share application using a microservice architecture that replicates Uber’s core functionalities, including real-time ride requests, driver-rider matching, and trip tracking. Built with the MERN stack, Kafka for asynchronous event streaming, Redis for ride caching, and SQL for handling billing and payment data. The system is containerized using Docker and orchestrated with Kubernetes for scalable deployment.",
      link: "https://github.com/Najel-A/UberClone",
    },

    {
      title: "Traffic Data Analysis",
      description: "Analyzed Bay Area traffic patterns using Python and Amazon Redshift. Ingested, cleaned, and transformed large-scale transportation datasets to uncover trends in vehicle flow by time, location, and direction. Leveraged Redshift’s data warehousing capabilities for efficient querying and aggregation, enabling insights into peak congestion hours and infrastructure usage.",
      link: "https://github.com/Najel-A/Traffic-Data",
    },

    {
        title: "Job Market Analysis",
        description: "Developed an interactive Power BI dashboard to explore trends in the U.S. job market. Integrated and cleaned labor market datasets to visualize key metrics such as job postings by industry, unemployment rates, and regional demand. Enabled dynamic filtering and drill-down capabilities to support data-driven insights for workforce planning and economic analysis.",
        link: "https://github.com/Najel-A/Analyzing-Job-Market",
    },

    {
      title: "UberEats Clone",
      description: "Built a full-stack food delivery platform replicating core Uber Eats functionalities, including restaurant browsing, order placement, and real-time delivery tracking. Developed using the MERN stack, with Kafka enabling asynchronous communication between services. Utilized Docker for containerization and Kubernetes for orchestrating scalable deployment.",
      link: "https://github.com/Najel-A/UberEats-Clone",
    },

    {
      title: "Slack Clone",
      description: "A cross-platform messaging app built with Kotlin (Android), Swift (iOS), and React Native. Backend powered by FastAPI.",
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

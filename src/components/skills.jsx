import React from "react";
import "../styles/skills.css";

const Skills = () => {
  const technicalSkills = ["React", "JavaScript", "Python", "C++", "Django", "Firebase"];
  const personalSkills = ["Problem-Solving", "Teamwork", "Communication", "Time Management"];

  return (
    <section id="skills" className="skills">
      <h2 className="skills__header">My Skills</h2>

      <div className="skills__content">
        {/* Technical Skills */}
        <div className="skills__category">
          <h3 className="skills__category-title">Technical Skills</h3>
          <ul className="skills__list">
            {technicalSkills.map((skill, index) => (
              <li key={index} className="skills__item">{skill}</li>
            ))}
          </ul>
        </div>

        {/* Personal Skills */}
        <div className="skills__category">
          <h3 className="skills__category-title">Personal Skills</h3>
          <ul className="skills__list">
            {personalSkills.map((skill, index) => (
              <li key={index} className="skills__item">{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;

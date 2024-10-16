import React from "react";
import "../styles/Skills.css"; // Import your CSS file

function Skills() {
  const skillsList = [
    { name: "Java, Spring Boot, Hibernate", icon: "fas fa-code" },
    { name: "RESTful API Development", icon: "fas fa-plug" },
    { name: "Oracle, PostgreSQL, Microsoft SQL Server", icon: "fas fa-database" },
    { name: "Microservices Architecture", icon: "fas fa-cogs" },
    { name: "Docker & Containerization", icon: "fab fa-docker" },
    { name: "Version Control (Git)", icon: "fab fa-git" },
  ];

  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>
      <p>Here are some of the technologies and tools I work with:</p>
      <ul className="skills-list">
        {skillsList.map((skill, index) => (
          <li key={index} className="skill-item">
            <i className={skill.icon}></i> {/* Icon */}
            <span>{skill.name}</span> {/* Wrap skill name for better styling */}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;

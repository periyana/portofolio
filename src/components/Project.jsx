import React from "react";
import "../styles/Project.css";

function Project() {
  const projectList = [
    {
      title: "Register",
      description: "API for user authentication using Java Spring Boot, featuring secure login and registration functionalities. This project implements JWT for token management and includes validation for user inputs to enhance security.",
      link: "https://github.com/periyana/api-register", // Add actual project link
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <ul className="project-list">
        {projectList.map((project, index) => (
          <li key={index} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Project;

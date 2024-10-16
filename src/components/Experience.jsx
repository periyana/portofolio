import React from "react";
import "../styles/Experience.css";

function Experience() {
  const experienceList = [
    {
      jobTitle: "Java Backend Developer",
      company: "PT. NEXT Transformtech Indonesia",
      duration: "Sep 2023 - Present",
      responsibilities: [
        "Developing and maintaining server-side applications using Java, Spring Boot, and Hibernate.",
        "Designing RESTful APIs to enhance functionality and user experience.",
        "Collaborating with cross-functional teams to deliver high-quality software solutions.",
      ],
    },
    {
      jobTitle: "Software Intern",
      company: "PT. Microtek Informa Solusindo",
      duration: "Jun 2021 - Dec 2021",
      responsibilities: ["Assisted in developing web applications and services.", "Participated in code reviews and testing phases.", "Gained hands-on experience with SQL databases."],
    },
  ];

  return (
    <section className="experience" id="experience">
      <h2>Experience</h2>
      <ul className="experience-list">
        {experienceList.map((experience, index) => (
          <li key={index} className="experience-item">
            <h3>{experience.jobTitle}</h3>
            <p>
              <strong>{experience.company}</strong> | {experience.duration}
            </p>
            <ul className="responsibilities-list">
              {experience.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Experience;

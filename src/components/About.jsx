import React from "react";
import "../styles/About.css"; // Make sure to import the CSS file
import myHeroImage from "../asset/profile.jpg"; // Import the image

function About() {
  return (
    <section className="about" id="about">
      <div className="profile-container">
        <img
          src={myHeroImage} // Use the imported image
          alt="Profile"
          className="profile-image"
        />
      </div>
      <div className="scrolling-text">
        <p>I AM A BACKEND DEVELOPER</p>
      </div>
      <p>
        I am a dedicated Java backend developer with over 2 years of experience in designing, implementing, and maintaining robust server-side applications. My expertise lies in utilizing Java frameworks such as Spring and Hibernate to
        build scalable and efficient web services.
      </p>
      <p>
        I have a strong foundation in RESTful API development, as well as database management using Oracle, PostgreSQL, and Microsoft SQL Server. I thrive in collaborative environments, working closely with cross-functional teams to deliver
        high-quality software solutions.
      </p>
      <p>
        My problem-solving skills and attention to detail enable me to tackle complex challenges and contribute to the success of projects. Passionate about continuous learning, I stay updated with the latest industry trends and
        technologies to enhance my skills and drive innovation.
      </p>
    </section>
  );
}

export default About;

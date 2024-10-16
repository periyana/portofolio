import React from "react";
import "../styles/Education.css"; // Updated CSS file path
import ccna from "../asset/CCNA.jpg";
import programmer from "../asset/Sertifikasi Programmer-images-0.jpg";
import itsupport from "../asset/Sertifikasi IT Support.jpg";
import bootcamp from "../asset/Sertifikasi Bootcamp Java.jpg";

function Certifications() {
  const certificationList = [
    {
      title: "CCNA Certification",
      issuer: "Cisco",
      year: "2017",
      image: ccna,
    },
    {
      title: "Programming Certification",
      issuer: "Institute of Programming",
      year: "2021",
      image: programmer,
    },
    {
      title: "IT Support Certification",
      issuer: "Tech Academy",
      year: "2022",
      image: itsupport,
    },
    {
      title: "Bootcamp Java Certification",
      issuer: "Java Bootcamp",
      year: "2023",
      image: bootcamp,
    },
  ];

  return (
    <section className="certifications-section" id="certifications">
      <h2 className="section-title">Certifications</h2>
      <div className="certification-grid">
        {certificationList.map((cert, index) => (
          <div key={index} className="certification-card">
            <img src={cert.image} className="certification-image" alt={`${cert.title} logo`} />
            <div className="card-content">
              <h5 className="card-title">{cert.title}</h5>
              <p className="card-text">
                <strong>{cert.issuer}</strong> | {cert.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;

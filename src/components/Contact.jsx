import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <ul className="contact-info">
        <li>
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          Email: <span className="contact-detail">periyana1746@gmail.com</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faWhatsapp} className="contact-icon" />
          WhatsApp: <span className="contact-detail">085694719227</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/periyana1746" target="_blank" rel="noopener noreferrer" className="contact-link">
            Periyana
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon={faGithub} className="contact-icon" />
          GitHub:{" "}
          <a href="https://github.com/periyana" target="_blank" rel="noopener noreferrer" className="contact-link">
            Periyana
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;

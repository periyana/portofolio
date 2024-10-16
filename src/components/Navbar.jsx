import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Pastikan path sudah benar

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Tutup menu saat link diklik
  };

  return (
    <>
      <nav className="navbar">
        <div className="wrapper">
          <div className="logo">
            <Link to="/">PY</Link>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <div className={`line ${isOpen ? "active" : ""}`}></div>
            <div className={`line ${isOpen ? "active" : ""}`}></div>
            <div className={`line ${isOpen ? "active" : ""}`}></div>
          </div>
        </div>
      </nav>
      <div className={`offcanvas-menu ${isOpen ? "active" : ""}`}>
        <ul className="menu-list">
          <li className="menu-item" onClick={handleLinkClick}>
            <Link to="/about">About Me</Link>
          </li>
          <li className="menu-item" onClick={handleLinkClick}>
            <Link to="/skills">Skills</Link>
          </li>
          <li className="menu-item" onClick={handleLinkClick}>
            <Link to="/project">Project</Link>
          </li>
          <li className="menu-item" onClick={handleLinkClick}>
            <Link to="/experience">Experience</Link>
          </li>
          <li className="menu-item" onClick={handleLinkClick}>
            <Link to="/education">Certification</Link>
          </li>
          <li className="menu-item" onClick={handleLinkClick}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;

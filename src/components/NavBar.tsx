

import { useState } from 'react';
import { FaDownload, FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ResumeA from "../assets/Anisha_Birla_Resume1.pdf";
import '../App.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="navbar-container"
    >
      <div className="navbar-inner">
        <h2 className="navbar-logo">Anisha Birla</h2>

        <div className="mobile-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="nav-link"
              >
                {item.label}
                <span className="underline" />
              </button>
            </li>
          ))}
        </ul>

        <a href={ResumeA} download className="resume-btn">
          <FaDownload /> Resume
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;







import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__pill">
        <NavLink
          to="/"
          className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
        >
          Projects
        </NavLink>
        <a
          href="https://github.com/Samhith-m5"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__link navbar__link--external"
        >
          GitHub
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7"/>
            <path d="M7 7h10v10"/>
          </svg>
        </a>
      </nav>
    </header>
  );
}

export default Navbar;

import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const updateIndicator = () => {
    if (navRef.current) {
      const activeEl = navRef.current.querySelector('.navbar__link--active');
      if (activeEl) {
        setIndicatorStyle({
          left: activeEl.offsetLeft,
          width: activeEl.offsetWidth,
          opacity: 1,
        });
      }
    }
  };

  useEffect(() => {
    // Wait a brief moment for the DOM to render the active class
    setTimeout(updateIndicator, 50);
  }, [location.pathname]);

  useEffect(() => {
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__pill" ref={navRef}>
        <div className="navbar__indicator" style={indicatorStyle} />
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

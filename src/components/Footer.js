import React from 'react';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__name">Samhith Reddy</span>
            <span className="footer__tagline">Designer and Developer</span>
          </div>
          <div className="footer__links">
            <a href="mailto:samhith@example.com" className="footer__link">Email</a>
            <span className="footer__dot" aria-hidden="true"></span>
            <a href="https://github.com/Samhith-m5" target="_blank" rel="noopener noreferrer" className="footer__link">GitHub</a>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__copy">
            {year} Samhith Reddy. Built with React.
          </p>
          <p className="footer__note">
            Designed and developed as part of Web Technologies coursework at Mahindra Ecole Centrale.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

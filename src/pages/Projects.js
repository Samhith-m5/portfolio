import React, { useEffect, useRef } from 'react';
import './Projects.css';

function useAniScroll() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    const els = ref.current?.querySelectorAll('.ani-scroll');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

const projects = [
  {
    id: 1,
    title: 'GenZ to Standard English Translation',
    period: 'Oct 2025 — Nov 2025',
    org: 'Mahindra Ecole Centrale, Hyderabad',
    description:
      'Developed an AI-based text translation tool that converts GenZ slang into standard English using Python. Built with NLP techniques and a custom slang dictionary for accurate context-aware translations.',
    tags: ['Python', 'NLP', 'AI', 'Text Processing'],
    link: 'https://github.com/Samhith-m5',
    linkText: 'View on GitHub',
  },
  {
    id: 2,
    title: 'Vave Salon Website',
    period: 'Jun 2025 — Aug 2025',
    org: 'Client Project, Hyderabad',
    description:
      'Designed and built a responsive business website for a salon brand, focusing on modern UI/UX principles, mobile-first design, and a seamless user experience across all devices.',
    tags: ['Web Design', 'UI/UX', 'Responsive', 'Client Work'],
    link: 'https://www.vavesalon.com',
    linkText: 'Visit Website',
  },
  {
    id: 3,
    title: 'Mayaans Chocotech Website',
    period: 'Recent',
    org: 'Client Project',
    description:
      'Developed a professional, high-performance website for Mayaans Chocotech. Focused on premium design aesthetics, clear product presentation, and smooth user interactions.',
    tags: ['Web Design', 'Frontend', 'UI/UX', 'Client Work'],
    link: 'https://www.mayaans.com',
    linkText: 'Visit Website',
  },
  {
    id: 4,
    title: 'Zepto Scraper (Quick Bot)',
    period: 'Personal Project',
    org: 'Open Source',
    description:
      'Engineered an automated bot to scrape product details from Zepto. Handles dynamic content loading and extracts structured data efficiently for analysis and tracking.',
    tags: ['Python', 'Web Scraping', 'Automation', 'Bot'],
    link: 'https://github.com/Samhith-m5',
    linkText: 'View on GitHub',
  },
  {
    id: 5,
    title: 'AnTeRa IVR System',
    period: 'Dec 2025 — Jan 2026',
    org: 'Client Project, Hyderabad',
    description:
      'Created an automated IVR workflow for menu navigation and customer interaction using structured voice response logic. Streamlined customer support operations.',
    tags: ['IVR', 'Automation', 'Voice Systems', 'Client Work'],
    link: null,
  },
];

function Projects() {
  const pageRef = useAniScroll();

  return (
    <div className="page-wrapper" ref={pageRef}>
      {/* Hero */}
      <section className="projects-hero">
        <div className="container">
          <span className="section-label ani-scroll">Portfolio</span>
          <h1 className="projects-hero__title ani-scroll ani-delay-1">
            Selected Projects
          </h1>
          <p className="projects-hero__subtitle ani-scroll ani-delay-2">
            A collection of projects I have built — from AI-powered tools
            to client websites. Each project reflects my passion for
            clean design and functional code.
          </p>
        </div>
      </section>

      {/* Project Cards */}
      <section className="projects-list section">
        <div className="container">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`project-card glass-panel ani-scroll ani-delay-${index + 1}`}
            >
              <div className="project-card__index">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="project-card__content">
                <div className="project-card__top">
                  <h2 className="project-card__title">{project.title}</h2>
                  <span className="project-card__period">{project.period}</span>
                </div>
                <p className="project-card__org">{project.org}</p>
                <p className="project-card__desc">{project.description}</p>

                <div className="project-card__bottom">
                  <div className="project-card__tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__btn"
                    >
                      <span>{project.linkText}</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta section">
        <div className="container">
          <div className="cta-card glass-panel ani-scroll">
            <h2 className="cta-card__title ani-scroll">
              Want to collaborate?
            </h2>
            <p className="cta-card__desc ani-scroll ani-delay-1">
              I am always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>
            <div className="cta-card__actions ani-scroll ani-delay-2">
              <a href="mailto:samhith@example.com" className="btn btn--primary">
                Get in Touch
              </a>
              <a
                href="https://github.com/Samhith-m5"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--glass"
              >
                <span>All Repositories</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;

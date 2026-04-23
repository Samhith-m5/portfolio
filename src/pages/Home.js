import React, { useEffect, useRef } from 'react';
import './Home.css';

// Ani-Scroll Hook: elements scale up from the "tunnel depth" as you scroll to them
function useAniScroll() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            // Optional: Re-hide when out of view for continuous repeat animations
            // entry.target.classList.remove('visible'); 
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const elements = ref.current?.querySelectorAll('.ani-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}

function Home() {
  const pageRef = useAniScroll();

  return (
    <div className="page-wrapper" ref={pageRef}>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero__content container">
          <p className="hero__eyebrow ani-scroll">Portfolio</p>
          <h1 className="hero__title ani-scroll ani-delay-1">
            Samhith Reddy
          </h1>
          <p className="hero__subtitle ani-scroll ani-delay-2">
            B.Tech CSE · UI/UX Designer · Developer
          </p>
          <p className="hero__description ani-scroll ani-delay-3">
            Crafting intuitive digital experiences at the intersection
            of design and technology.
          </p>
          <div className="hero__actions ani-scroll ani-delay-4">
            <a href="#about" className="btn btn--primary">
              Learn More
            </a>
            <a href="https://github.com/Samhith-m5" target="_blank" rel="noopener noreferrer" className="btn btn--secondary">
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="about section" id="about">
        <div className="container">
          <div className="about__content">
            <span className="section-label ani-scroll">About</span>
            <h2 className="section-title ani-scroll ani-delay-1">
              Designing the future,<br />one pixel at a time.
            </h2>
            <div className="about__body ani-scroll ani-delay-2">
              <p>
                I'm a Computer Science student at <strong>Mahindra Ecole Centrale</strong>, Hyderabad,
                with a keen eye for design and a love for building meaningful digital products.
                My journey spans UI/UX design, software development, and AI-driven applications.
              </p>
              <p>
                With hands-on experience in tools like <strong>Figma</strong> and <strong>Framer</strong>,
                alongside programming skills in <strong>Python</strong>, <strong>C</strong>, and <strong>SwiftUI</strong>,
                I bridge the gap between aesthetics and functionality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="stats section">
        <div className="container">
          <span className="section-label ani-scroll">Metrics</span>
          <h2 className="section-title ani-scroll ani-delay-1">Academics & Milestones</h2>
          <div className="stats__grid">
            <div className="stat-card glass-panel ani-scroll ani-delay-1">
              <span className="stat-card__number">6.39</span>
              <span className="stat-card__label">CGPA (5th Sem)</span>
            </div>
            <div className="stat-card glass-panel ani-scroll ani-delay-1">
              <span className="stat-card__number">94%</span>
              <span className="stat-card__label">Intermediate</span>
            </div>
            <div className="stat-card glass-panel ani-scroll ani-delay-2">
              <span className="stat-card__number">90%</span>
              <span className="stat-card__label">10th Grade ICSE</span>
            </div>
            <div className="stat-card glass-panel ani-scroll ani-delay-3">
              <span className="stat-card__number">3+</span>
              <span className="stat-card__label">Projects Delivered</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PERSONAL DETAILS ===== */}
      <section className="details section" id="details">
        <div className="container">
          <span className="section-label ani-scroll">Details</span>
          <h2 className="section-title ani-scroll ani-delay-1">Personal Information</h2>
          <div className="details__grid">
            <div className="detail-card glass-panel ani-scroll ani-delay-1">
              <span className="detail-card__label">Name</span>
              <span className="detail-card__value">Samhith Reddy</span>
            </div>
            <div className="detail-card glass-panel ani-scroll ani-delay-2">
              <span className="detail-card__label">Phone</span>
              <span className="detail-card__value">+91 73969 61881</span>
            </div>
            <div className="detail-card glass-panel ani-scroll ani-delay-3">
              <span className="detail-card__label">Personal Email</span>
              <span className="detail-card__value">muthyalasamhith@gmail.com</span>
            </div>
            <div className="detail-card glass-panel ani-scroll ani-delay-4">
              <span className="detail-card__label">College Email</span>
              <span className="detail-card__value">se23umcs034@mahindrauniversity.edu.in</span>
            </div>
            <div className="detail-card glass-panel ani-scroll ani-delay-5">
              <span className="detail-card__label">Education</span>
              <span className="detail-card__value">B.Tech (Intd. CSE) — Mahindra École Centrale</span>
            </div>
            <div className="detail-card glass-panel ani-scroll ani-delay-6">
              <span className="detail-card__label">Location</span>
              <span className="detail-card__value">Hyderabad, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section className="skills section" id="skills">
        <div className="container">
          <span className="section-label ani-scroll">Skills</span>
          <h2 className="section-title ani-scroll ani-delay-1">Expertise</h2>
          <div className="skills__grid">
            <div className="skill-category glass-panel ani-scroll ani-delay-1">
              <h3 className="skill-category__title">Programming</h3>
              <div className="skill-category__tags">
                <span className="skill-tag">C</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">SwiftUI</span>
              </div>
            </div>
            <div className="skill-category glass-panel ani-scroll ani-delay-2">
              <h3 className="skill-category__title">Design and Dev Tools</h3>
              <div className="skill-category__tags">
                <span className="skill-tag">Figma</span>
                <span className="skill-tag">Framer</span>
                <span className="skill-tag">Xcode</span>
              </div>
            </div>
            <div className="skill-category glass-panel ani-scroll ani-delay-3">
              <h3 className="skill-category__title">Design Skills</h3>
              <div className="skill-category__tags">
                <span className="skill-tag">UI/UX Design</span>
                <span className="skill-tag">Wireframing</span>
                <span className="skill-tag">Prototyping</span>
                <span className="skill-tag">App Interface Design</span>
                <span className="skill-tag">Web Interface Design</span>
              </div>
            </div>
            <div className="skill-category glass-panel ani-scroll ani-delay-4">
              <h3 className="skill-category__title">AI and Productivity</h3>
              <div className="skill-category__tags">
                <span className="skill-tag">Moltbot</span>
                <span className="skill-tag">Antigravity</span>
                <span className="skill-tag">Generative AI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== RESEARCH INTERESTS ===== */}
      <section className="research section" id="research">
        <div className="container">
          <span className="section-label ani-scroll">Interests</span>
          <h2 className="section-title ani-scroll ani-delay-1">Research Areas</h2>
          <div className="research__grid">
            <div className="research-card glass-panel ani-scroll ani-delay-1">
              <h3 className="research-card__title">Aviation Technology</h3>
              <p className="research-card__desc">
                Exploring the intersection of software engineering and aviation systems,
                from flight tracking algorithms to cockpit UI design.
              </p>
            </div>
            <div className="research-card glass-panel ani-scroll ani-delay-2">
              <h3 className="research-card__title">Emerging Technologies</h3>
              <p className="research-card__desc">
                Investigating how AI, AR/VR, and IoT are reshaping industries
                and creating new paradigms for human-computer interaction.
              </p>
            </div>
            <div className="research-card glass-panel ani-scroll ani-delay-3">
              <h3 className="research-card__title">Entrepreneurship and Product</h3>
              <p className="research-card__desc">
                Studying startup methodologies, product-market fit strategies, and the
                design thinking approach to building impactful ventures.
              </p>
            </div>
            <div className="research-card glass-panel ani-scroll ani-delay-4">
              <h3 className="research-card__title">F1 Engineering and Data</h3>
              <p className="research-card__desc">
                Fascinated by the data science, aerodynamics, and real-time telemetry
                systems that drive Formula 1 performance engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section className="experience section" id="experience">
        <div className="container">
          <span className="section-label ani-scroll">Experience</span>
          <h2 className="section-title ani-scroll ani-delay-1">Background</h2>
          <div className="experience__list">
            <div className="exp-card glass-panel ani-scroll ani-delay-1">
              <div className="exp-card__meta">
                <span className="exp-card__date">Sep 2025 — Oct 2025</span>
              </div>
              <div className="exp-card__body">
                <h3 className="exp-card__title">UI/UX Design Intern</h3>
                <p className="exp-card__org">StayBind Internship Program, Hyderabad</p>
                <p className="exp-card__desc">
                  Worked on UI/UX design principles, wireframing, prototyping, and user
                  interface design using Figma. Contributed to building user-centered design solutions.
                </p>
              </div>
            </div>
            <div className="exp-card glass-panel ani-scroll ani-delay-2">
              <div className="exp-card__meta">
                <span className="exp-card__date">Aug 2023 — Present</span>
              </div>
              <div className="exp-card__body">
                <h3 className="exp-card__title">B.Tech (Intd. CSE)</h3>
                <p className="exp-card__org">Mahindra Ecole Centrale, Hyderabad</p>
                <p className="exp-card__desc">
                  Coursework includes Entrepreneurship Practice, Data Science, Software Engineering,
                  and more. CGPA: 6.39/10 (till 5th semester).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

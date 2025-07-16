import React, { useState, useEffect } from 'react';
import './App.css';

// === COMPONENT: Navbar ===
// PUBLIC_INTERFACE
function Navbar() {
  /** Responsive navigation bar for consulting homepage. */
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleNavToggle = () => setMobileNavOpen((open) => !open);

  useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileNavOpen]);

  return (
    <nav className="navbar">
      <div className="navbar__logo">ElegantConsult</div>
      <div className={`navbar__links${mobileNavOpen ? ' open' : ''}`}>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
      <button
        className="navbar__toggle"
        aria-label="Open navigation"
        aria-expanded={mobileNavOpen}
        onClick={handleNavToggle}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}

// === COMPONENT: HeroSection ===
// PUBLIC_INTERFACE
function HeroSection() {
  /** Centered homepage hero section with headline and summary. */
  return (
    <section className="hero">
      <h1>
        <span className="highlight">Elevate</span> Your Business<br />
        With Strategic Consulting
      </h1>
      <p>
        We help modern organizations unlock growth and thrive in a fast-changing world. Experience the <span className="accent">elegance</span> of effective strategy.
      </p>
      <a href="#contact" className="btn btn-accent btn-large">
        Book a Consultation
      </a>
    </section>
  );
}

// === COMPONENT: AboutSection ===
// PUBLIC_INTERFACE
function AboutSection() {
  /** About us summary section. */
  return (
    <section className="about" id="about">
      <div className="about__content">
        <h2>About Us</h2>
        <p>
          ElegantConsult is a boutique consulting firm with deep expertise in business strategy, digital transformation, and leadership development. Our advisors bring decades of real-world experience, helping clients large and small to innovate, streamline, and succeed.
        </p>
      </div>
    </section>
  );
}

// === COMPONENT: ServicesSection ===
// PUBLIC_INTERFACE
function ServicesSection() {
  /** Consulting services highlight section. */
  const services = [
    {
      title: "Strategy & Growth",
      desc: "Design robust strategies tailored to your goals and market realities.",
      emoji: "📈",
    },
    {
      title: "Digital Transformation",
      desc: "Modernize your organization with technology and agile processes.",
      emoji: "💡",
    },
    {
      title: "Leadership Coaching",
      desc: "Empower executives and teams with professional guidance.",
      emoji: "🧑‍💼",
    }
  ];

  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="services__list">
        {services.map((svc, idx) => (
          <div className="service-card" key={idx}>
            <div className="service-card__icon">{svc.emoji}</div>
            <h3>{svc.title}</h3>
            <p>{svc.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// === COMPONENT: ContactCTA ===
// PUBLIC_INTERFACE
function ContactCTA() {
  /** Contact/CTA call-to-action encouraging user engagement. */
  return (
    <section className="contact-cta" id="contact">
      <h2>Ready to Transform?</h2>
      <p>
        Let's talk about your goals. Get a free consultation with our experts and start your journey toward success.
      </p>
      <a href="mailto:contact@elegantconsult.com" className="btn btn-primary">Contact Us</a>
    </section>
  );
}

// === COMPONENT: Footer ===
// PUBLIC_INTERFACE
function Footer() {
  /** Page footer with copyright and social links. */
  return (
    <footer className="footer">
      <div className="footer__brand">© {new Date().getFullYear()} ElegantConsult</div>
      <div className="footer__social">
        <a
          href="https://twitter.com/"
          aria-label="Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg height="20" width="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.56c-.88.39-1.82.65-2.8.78a4.93 4.93 0 0..."/>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg height="20" width="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.8..."/>
          </svg>
        </a>
        <a
          href="mailto:contact@elegantconsult.com"
          aria-label="Email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg height="20" width="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M1.5 4h21c.8..."/>
          </svg>
        </a>
      </div>
    </footer>
  );
}

// === MAIN APP ===
// PUBLIC_INTERFACE
function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;

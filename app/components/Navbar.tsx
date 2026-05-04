
'use client';

import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", dropdown: true },
    { label: "What We Do", dropdown: true },
    { label: "Jobs", dropdown: true },
    { label: "Projects", dropdown: false },
    { label: "TG Academy", dropdown: false },
    { label: "Strategic Partnership", dropdown: false },
    { label: "Pricing", dropdown: false },
    { label: "Book a Consultation", dropdown: false },
  ];

  return (
    <header className="navbar-root">
      {/* Top bar */}
      <div className="navbar-inner">
        {/* Logo */}
        <div className="navbar-brand">
          {/* SVG Logo mark */}
          <svg className="navbar-logo-icon" viewBox="0 0 42 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="14" r="8" fill="#C0003C" />
            <circle cx="22" cy="8" r="6" fill="#8B1A6B" />
            <circle cx="22" cy="20" r="6" fill="#8B1A6B" />
            <circle cx="34" cy="14" r="5" fill="#4A0035" />
          </svg>
          <div className="navbar-logo-text">
            <div className="navbar-logo-title">TOBAMS</div>
            <div className="navbar-logo-subtitle">GROUP</div>
          </div>
        </div>

        <div className="navbar-center">
          {!mobileMenuOpen && (
            <nav className="desktop-nav-wrapper">
              <div className="desktop-nav">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href="#"
                    className={link.label === 'What We Do' ? 'nav-link active' : 'nav-link'}
                  >
                    {link.label}
                    {link.dropdown && (
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
                    )}
                  </a>
                ))}
              </div>
            </nav>
          )}
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="hamburger-button"
          type="button"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="mobile-menu">
          <div className="mobile-menu-inner">
            {navLinks.map((link) => (
              <a key={link.label} href="#" className="mobile-nav-link">
                {link.label}
                {link.dropdown && (
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
                )}
              </a>
            ))}
            <button style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: "#F5E6F0",
              border: "none",
              borderRadius: 20,
              padding: "8px 16px",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              color: "#4A0055",
              fontFamily: "Plus Jakarta Sans, sans-serif",
              marginTop: 8,
              width: "100%",
              justifyContent: "center",
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
              Account
            </button>
            <a href="#" className="btn-primary" style={{
              borderRadius: 6,
              fontSize: 13,
              marginTop: 8,
              textAlign: "center",
              display: "block",
              width: "100%",
            }}>Take Assessment</a>
          </div>
        </nav>
      )}
    </header>
  );
}

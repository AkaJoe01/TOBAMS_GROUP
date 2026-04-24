
export default function Navbar() {
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
    <header style={{ background: "#fff", borderBottom: "1px solid #EEE", position: "sticky", top: 0, zIndex: 100 }}>
      {/* Top bar */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "14px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {/* SVG Logo mark */}
          <svg width="42" height="28" viewBox="0 0 42 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="14" r="8" fill="#C0003C" />
            <circle cx="22" cy="8" r="6" fill="#8B1A6B" />
            <circle cx="22" cy="20" r="6" fill="#8B1A6B" />
            <circle cx="34" cy="14" r="5" fill="#4A0035" />
          </svg>
          <div>
            <div style={{ fontFamily: "Fraunces, serif", fontWeight: 700, fontSize: 15, lineHeight: 1, color: "#1A1A1A", letterSpacing: 1 }}>TOBAMS</div>
            <div style={{ fontFamily: "Fraunces, serif", fontWeight: 400, fontSize: 12, color: "#8B1A6B", letterSpacing: 2 }}>GROUP</div>
          </div>
        </div>

        {/* Right actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button style={{ display: "flex", alignItems: "center", gap: 6, background: "#F5E6F0", border: "none", borderRadius: 20, padding: "8px 16px", fontSize: 13, fontWeight: 600, cursor: "pointer", color: "#4A0035", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
            Account
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
          </button>
          <a href="#" className="btn-primary" style={{ borderRadius: 6, fontSize: 13 }}>Take Assessment</a>
        </div>
      </div>

      {/* Nav links */}
      <nav style={{ borderTop: "1px solid #EEE", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", gap: 0 }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              style={{
                display: "flex", alignItems: "center", gap: 4,
                padding: "12px 14px",
                fontSize: 13,
                fontWeight: 500,
                color: link.label === "What We Do" ? "#4A0035" : "#444",
                textDecoration: "none",
                borderBottom: link.label === "What We Do" ? "2px solid #4A0035" : "2px solid transparent",
                fontFamily: "Plus Jakarta Sans, sans-serif",
                whiteSpace: "nowrap",
                transition: "color 0.15s",
              }}
            >
              {link.label}
              {link.dropdown && (
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
              )}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}


export default function Footer() {
  const whatWeDo = [
    "Sustainability Services", "Strategy Planning and Implementation",
    "Tech Talent Solutions", "Training and Development",
    "IT Consulting Services", "Social Impact", "Talent Recruitment",
  ];
  const company = [
    "About", "Jobs", "Projects", "Our Founder", "Business Model",
    "The Team", "Contact Us", "Blog", "FAQs", "Testimonials",
  ];
  const solutions = [
    "Tobams Group Academy", "Help a Tech Talent",
    "Campus Ambassadors Program", "Join Our Platform",
    "Pricing", "Book a Consultation", "Join Our Slack Community",
  ];

  return (
    <footer>
      {/* CTA Strip */}
      <div style={{ background: "#F5EEF5", padding: "36px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #E0D0DC" }}>
        <div>
          <p style={{ fontSize: 13.5, color: "#555", marginBottom: 6, fontWeight: 400 }}>Ready to be a part of something extraordinary?</p>
          <h3 style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", fontWeight: 700, color: "#1A1A1A" }}>
            Let&rsquo;s work together to create a difference
          </h3>
        </div>
        <a href="#" className="btn-primary" style={{ whiteSpace: "nowrap", flexShrink: 0 }}>Get In Touch</a>
      </div>

      {/* Main footer */}
      <div style={{ background: "#1C0014", padding: "60px 40px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1.6fr 1.4fr 1fr 1fr", gap: 48 }}>
          
          {/* Brand col */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
              <svg width="42" height="28" viewBox="0 0 42 28" fill="none">
                <circle cx="8" cy="14" r="8" fill="#C0003C" />
                <circle cx="22" cy="8" r="6" fill="#8B1A6B" />
                <circle cx="22" cy="20" r="6" fill="#8B1A6B" />
                <circle cx="34" cy="14" r="5" fill="#fff" fillOpacity="0.7" />
              </svg>
              <div>
                <div style={{ fontFamily: "Fraunces, serif", fontWeight: 700, fontSize: 14, color: "#fff", letterSpacing: 1 }}>TOBAMS</div>
                <div style={{ fontFamily: "Fraunces, serif", fontWeight: 400, fontSize: 11, color: "#E8A0C8", letterSpacing: 2 }}>GROUP</div>
              </div>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.75, fontWeight: 300, maxWidth: 240, marginBottom: 20 }}>
              Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa,
              specializing in talent acquisition, internships, and skill development with a global perspective.
            </p>
            {/* Social icons */}
            <div style={{ display: "flex", gap: 10 }}>
              {[
                { icon: "in", label: "LinkedIn" },
                { icon: "ig", label: "Instagram" },
                { icon: "x", label: "X (Twitter)" },
              ].map((s) => (
                <a key={s.icon} href="#" aria-label={s.label} style={{
                  width: 34, height: 34, background: "rgba(255,255,255,0.1)",
                  borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                  textDecoration: "none", color: "#fff", fontSize: 11, fontWeight: 700,
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* What We Do */}
          <div>
            <h4 style={{ fontSize: 13.5, fontWeight: 700, color: "#fff", marginBottom: 18, fontFamily: "Plus Jakarta Sans, sans-serif" }}>What We Do</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {whatWeDo.map((item) => (
                <li key={item}><a href="#" style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none", fontWeight: 400, transition: "color 0.15s" }}>{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontSize: 13.5, fontWeight: 700, color: "#fff", marginBottom: 18, fontFamily: "Plus Jakarta Sans, sans-serif" }}>Company</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {company.map((item) => (
                <li key={item}><a href="#" style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none", fontWeight: 400 }}>{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div>
            <h4 style={{ fontSize: 13.5, fontWeight: 700, color: "#fff", marginBottom: 18, fontFamily: "Plus Jakarta Sans, sans-serif" }}>Solution</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {solutions.map((item) => (
                <li key={item}><a href="#" style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none", fontWeight: 400 }}>{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Registered Offices */}
        <div style={{
          maxWidth: 1100, margin: "48px auto 0",
          background: "rgba(255,255,255,0.06)", borderRadius: 10, padding: "28px 32px",
          display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 40,
          border: "1px solid rgba(255,255,255,0.08)"
        }}>
          <div>
            <h5 style={{ fontSize: 13.5, fontWeight: 700, color: "#fff", marginBottom: 14, fontFamily: "Plus Jakarta Sans, sans-serif" }}>Registered Offices</h5>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#E87AC0", marginBottom: 4 }}>United Kingdom</div>
              <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, fontWeight: 300 }}>
                07451196 (Registered by Company House)<br />
                Vine Cottages, 215 North Street, Romford, Essex, United Kingdom, RM1 4QA
              </p>
            </div>
          </div>
          <div style={{ paddingTop: 30 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#E87AC0", marginBottom: 4 }}>Nigeria</div>
            <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, fontWeight: 300 }}>
              RC 1048722 (Registered by the Corporate Affairs Commission)<br />
              4, Muaz Close, Angwar-Rimi
            </p>
          </div>
          <div>
            <h5 style={{ fontSize: 13.5, fontWeight: 700, color: "#fff", marginBottom: 14, fontFamily: "Plus Jakarta Sans, sans-serif" }}>Contact Information</h5>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a href="mailto:theteam@tobamsgroup.com" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
                theteam@tobamsgroup.com
              </a>
              <a href="tel:+447886600748" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.94 6.94l1.51-1.51a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                +447886600748
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          maxWidth: 1100, margin: "32px auto 0", paddingTop: 24,
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.35)", fontWeight: 400 }}>
            Copyright © Tobams Group, {new Date().getFullYear()}. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {["Terms and Conditions", "Privacy Policy", "Cookies Policy"].map((l) => (
              <a key={l} href="#" style={{ fontSize: 12.5, color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

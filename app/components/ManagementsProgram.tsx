// Server Component
const pillars = [
  "Enhanced Leadership Skills",
  "Improved Employee Engagement",
  "Stronger Organisational Culture",
  "Sustainable Growth",
];

export default function ManagementProgram() {
  return (
    <section style={{ padding: "80px 24px", background: "#FAFAFA" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{
          background: "linear-gradient(135deg, #3D0030 0%, #5C0045 100%)",
          borderRadius: 16, overflow: "hidden",
          display: "grid", gridTemplateColumns: "1fr 1.2fr",
          minHeight: 420,
          boxShadow: "0 20px 60px rgba(74,0,53,0.25)",
        }}>
          {/* Left image */}
          <div style={{ position: "relative", minHeight: 300 }}>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80"
              alt="Management Development"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>

          {/* Right content */}
          <div style={{ padding: "44px 40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", fontWeight: 700, color: "#fff", marginBottom: 18, lineHeight: 1.2 }}>
              Management Development Program
            </h2>
            <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.72)", lineHeight: 1.8, marginBottom: 10, fontWeight: 300 }}>
              Tobams Group offers a comprehensive Management Development Program designed to equip corporate
              organisations with the high-performing leaders they need to thrive.
            </p>
            <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.65)", lineHeight: 1.8, marginBottom: 24, fontWeight: 300 }}>
              Our program includes workshops, seminars, coaching sessions, online courses, and experiential
              learning opportunities designed to improve leadership, strategic thinking, communication, and
              other essential managerial competencies for corporate organisations.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {pillars.map((p) => (
                <div key={p} style={{
                  display: "flex", alignItems: "center", gap: 12,
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: 8, padding: "10px 16px",
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                  <span style={{ fontSize: 13.5, color: "#fff", fontWeight: 500 }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

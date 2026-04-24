
const testimonials = [
  {
    name: "Aisha Yusuf",
    role: "Founder, CraftHub NG",
    text: "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
  },
  {
    name: "John Davies",
    role: "Marketing Manager, E-Commerce Emporium",
    text: "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
  },
  {
    name: "Chinonso Nwankwo",
    role: "HR Director, FutureTech Solutions",
    text: "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
  },
  {
    name: "Taiwo Adebisi",
    role: "CEO, GreenPath Ventures",
    text: "The strategic planning sessions with Tobams Group transformed how we approach growth. Their expertise is unmatched in the African tech ecosystem.",
  },
];

function Avatar({ name }: { name: string }) {
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2);
  const colors = ["#4A0035", "#8B1A6B", "#C0003C", "#6B0050"];
  const color = colors[name.length % colors.length];
  return (
    <div style={{
      width: 42, height: 42, borderRadius: "50%", background: color,
      display: "flex", alignItems: "center", justifyContent: "center",
      color: "#fff", fontWeight: 700, fontSize: 14, flexShrink: 0,
      fontFamily: "Plus Jakarta Sans, sans-serif",
    }}>
      {initials}
    </div>
  );
}

export default function CtaAndTestimonials() {
  return (
    <>
      {/* CTA Banner */}
      <section style={{ padding: "60px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{
            background: "linear-gradient(135deg, #3D0030 0%, #5C0048 100%)",
            borderRadius: 14, padding: "48px 40px", textAlign: "center",
          }}>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.8)", marginBottom: 8, fontWeight: 400 }}>
              Want to accelerate professional growth and development at your organisation?
            </p>
            <p style={{ fontSize: 17, color: "#fff", fontWeight: 600, marginBottom: 28 }}>
              See how we can help.
            </p>
            <a href="#" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "transparent", color: "#fff",
              border: "1.5px solid rgba(255,255,255,0.6)",
              padding: "12px 28px", borderRadius: 8,
              fontSize: 14, fontWeight: 600,
              fontFamily: "Plus Jakarta Sans, sans-serif",
              textDecoration: "none",
              transition: "all 0.2s",
            }}>
              Book a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, textAlign: "center", color: "#1A1A1A", marginBottom: 48 }}>
            Testimonials
          </h2>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 20,
          }}>
            {testimonials.map((t) => (
              <div key={t.name} style={{
                background: "#FDF5FB",
                border: "1px solid #EBDAE5",
                borderRadius: 12, padding: "24px",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <Avatar name={t.name} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "#1A1A1A" }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>{t.role}</div>
                  </div>
                </div>
                <p style={{ fontSize: 13.5, color: "#555", lineHeight: 1.75, fontWeight: 400 }}>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

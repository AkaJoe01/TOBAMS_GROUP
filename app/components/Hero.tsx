
export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: 380,
        background: "linear-gradient(rgba(20,5,15,0.72), rgba(40,0,30,0.78))",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* BG image overlay (tech/code themed) */}
      <div
        style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
          filter: "brightness(0.35) saturate(0.6)",
        }}
      />

      <div style={{ textAlign: "center", padding: "80px 24px", maxWidth: 760 }}>
        <div className="section-label fade-up" style={{ color: "#E8B0D8", marginBottom: 16 }}>
          WHAT WE DO
        </div>
        <h1
          className="fade-up delay-1"
          style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#fff", marginBottom: 18, lineHeight: 1.15 }}
        >
          Training and Development
        </h1>
        <p
          className="fade-up delay-2"
          style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, lineHeight: 1.7, marginBottom: 32, fontWeight: 300, maxWidth: 620, margin: "0 auto 32px" }}
        >
          Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge,
          and propel careers forward in today&rsquo;s ever-evolving landscape.
        </p>
        <div className="fade-up delay-3">
          <a href="#" className="btn-primary" style={{ fontSize: 14 }}>Book a Consultation</a>
        </div>
      </div>
    </section>
  );
}

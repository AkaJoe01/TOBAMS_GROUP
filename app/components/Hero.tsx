
export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="section-label">WHAT WE DO</div>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#fff", marginBottom: 18, lineHeight: 1.15 }}>
          Training and Development
        </h1>
        <p>
          Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge,
          and propel careers forward in today&rsquo;s ever-evolving landscape.
        </p>
        <div>
          <a href="#" className="btn-primary" style={{ fontSize: 14 }}>Book a Consultation</a>
        </div>
      </div>
    </section>
  );
}

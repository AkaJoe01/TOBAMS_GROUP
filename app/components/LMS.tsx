import Image from 'next/image';

const courses = ["Business Analysis", "Design Thinking", "Effective Communication", "Entrepreneurship", "Career Development", "Business Model"];

export default function LMS() {
  return (
    <section className="section-inner" style={{ background: "#F5EEF5" }}>
      <div className="container grid-2">
        <div className="centered-block">
          <div style={{
            width: 340, height: 340, borderRadius: "50%", overflow: "hidden",
            border: "6px solid #fff",
            boxShadow: "0 20px 60px rgba(74,0,53,0.15)",
            flexShrink: 0,
          }}>
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80"
              alt="Learning Management"
              width={340}
              height={340}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        <div style={{ width: "100%", maxWidth: 600 }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#4A0035", marginBottom: 20, lineHeight: 1.2 }}>
            Learning Management System
          </h2>
          <div style={{
            background: "#F0E0ED", borderRadius: 10, padding: "20px 22px", marginBottom: 22,
            borderLeft: "3px solid #8B1A6B"
          }}>
            <p style={{ fontSize: 13.5, lineHeight: 1.75, color: "#444", fontWeight: 400 }}>
              TG Academy is a hub of knowledge and skill-building resources designed to empower tech talents on their learning journey.
              From technical courses covering the latest programming languages and development frameworks to soft skills training in leadership,
              effective communication and project management, TG Academy offers a wide range of courses to cater to diverse learning needs.
            </p>
            <p style={{ fontSize: 13.5, marginTop: 14, color: "#444" }}>
              <strong style={{ color: "#4A0035" }}>Some of our courses include:</strong>
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
              {courses.map((c) => (
                <span key={c} style={{
                  fontSize: 12.5, background: "rgba(74,0,53,0.1)", color: "#4A0035",
                  padding: "4px 10px", borderRadius: 4, fontWeight: 500
                }}>
                  • {c}
                </span>
              ))}
            </div>
          </div>
          <a href="#" className="btn-primary">
            Learn More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

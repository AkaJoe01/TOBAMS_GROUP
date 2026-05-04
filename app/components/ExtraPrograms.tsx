
'use client';

import Image from 'next/image';

const hubSkills = [
  { label: "Strategic Career Guidance" },
  { label: "Leadership Development" },
  { label: "CV Development" },
  { label: "Sustainability Leadership" },
  { label: "Communication Skills" },
  { label: "Business Model" },
];

const consultantBenefits = [
  { title: "Expert-Led Learning", desc: "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis." },
  { title: "Interactive Workshops", desc: "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights." },
  { title: "Comprehensive Curriculum", desc: "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding." },
  { title: "Global Recognition", desc: "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition." },
];

export default function ExtraPrograms() {
  return (
    <>
      {/* Transformation Hub */}
      <section className="section-inner" style={{ background: "#FDF0F8" }}>
        <div className="container">
          <div className="card card-soft" style={{ padding: "44px 48px", boxShadow: "0 4px 24px rgba(74,0,53,0.07)" }}>
            <div className="section-label" style={{ marginBottom: 8 }}>Learning With Our CEO:</div>
            <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.85rem)", fontStyle: "italic", fontWeight: 600, color: "#2E001F", marginBottom: 16 }}>
              Transformation Hub With Jite Newton
            </h2>
            <p style={{ fontSize: 13.5, color: "#555", lineHeight: 1.8, maxWidth: 760, marginBottom: 36, fontWeight: 400 }}>
              Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr. Jite Newton.
              Designed to elevate career trajectories and leadership capabilities, this exclusive event offers invaluable
              insights and strategies for personal and professional growth. Whether you&rsquo;re seeking to advance your career
              or enhance your leadership skills, the Transformation Hub provides a transformative learning experience.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 36, alignItems: "stretch" }}>
              <div className="card card-glow">
                <Image
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=700&q=80"
                  alt="Transformation Hub"
                  width={500}
                  height={280}
                  style={{ width: "100%", height: "auto", objectFit: "cover", display: "block" }}
                />
              </div>

              <div>
                <div className="pill-grid" style={{ marginBottom: 24 }}>
                  {hubSkills.map((s) => (
                    <div key={s.label} style={{
                      display: "flex", alignItems: "center", gap: 8,
                      background: "#fff", border: "1px solid #E8D0E0",
                      borderRadius: 8, padding: "10px 14px",
                      fontSize: "clamp(12px, 2vw, 13px)", color: "#333", fontWeight: 500,
                    }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="#4A0035"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                      {s.label}
                    </div>
                  ))}
                </div>
                <a href="#" className="btn-primary">
                  Learn More
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training The Consultant */}
      <section className="section-inner" style={{ background: "#F5F5F5" }}>
        <div className="container">
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#1A1A1A", marginBottom: 6 }}>
            Training The Consultant
          </h2>
          <div className="section-label" style={{ marginBottom: 16, color: "#555", letterSpacing: 0, textTransform: "none", fontSize: 13.5, fontWeight: 400 }}>
            Maximise Your Potential as a Certified Trainer:
          </div>
          <p style={{ fontSize: 14, color: "#555", lineHeight: 1.8, maxWidth: 820, marginBottom: 36, fontWeight: 400 }}>
            With the help of our Training Consultants program, take a revolutionary step toward becoming a distinguished certified training consultant.
            Learn from professionals in the field, immerse yourself in a thorough curriculum, and hone your training methods through interactive workshops.
            Participating in our program will enable you to gain expertise in diverse courses while also developing the abilities to mentor and encourage
            others in their career advancement.
          </p>

          <div className="card card-dark" style={{ padding: "36px 40px", marginBottom: 32, display: "flex", flexDirection: "column", gap: 32 }}>
            {consultantBenefits.map((b) => (
              <div key={b.title}>
                <h4 style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 8, fontFamily: "Plus Jakarta Sans, sans-serif" }}>{b.title}</h4>
                <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, fontWeight: 300 }}>{b.desc}</p>
              </div>
            ))}
          </div>

          <a href="#" className="btn-outline">
            Learn More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg>
          </a>
        </div>
      </section>
    </>
  );
}

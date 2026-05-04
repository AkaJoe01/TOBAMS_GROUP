// Server Component
import Image from 'next/image';

const corporateFeatures = [
  "Leadership Training",
  "Strategic Planning and Implementation",
  "Project Management",
  "Sustainability Training",
  "Customised Training",
];

const individualFeatures = [
  "Leadership Development",
  "Soft Skills Development",
  "Industry Specific Knowledge",
  "Technical Skills Enhancement",
  "Time Management and Productivity",
  "Career Development",
];

const capacityFeatures = [
  "Tailored Training Programs",
  "Expert-Led Workshops",
  "Personalized Mentorship",
  "Technical Skills Enhancement",
  "Collaborative Learning Environment",
  "Ongoing Support and Resources",
];

function BoltIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--maroon)" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#4A0035" />
    </svg>
  );
}

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="feature-list">
      {items.map((item) => (
        <li key={item}>
          <BoltIcon />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function TrainingPrograms() {
  return (
    <>
      {/* Corporate Trainings */}
      <section className="section-inner" style={{ background: "#fff" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: 60 }}>
          <div>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#1A1A1A", marginBottom: 12 }}>
              Corporate Trainings
            </h2>
            <p style={{ fontSize: 14, color: "#555", lineHeight: 1.75, maxWidth: 420, fontWeight: 400 }}>
              Empower your team with our customised Corporate Training programs designed to address the unique needs
              and objectives of your organisation. Our expert facilitators work closely with your team to deliver
              tailored learning experiences that align with your company&rsquo;s goals and values.
            </p>
            <FeatureList items={corporateFeatures} />
          </div>
          <div className="card card-glow">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=80"
              alt="Corporate Training"
              width={500}
              height={320}
              style={{ width: "100%", height: "auto", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* Personalised Individual Training */}
      <section className="section-inner" style={{ background: "#FAFAFA" }}>
        <div className="container grid-2-reverse">
          <div>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#1A1A1A", marginBottom: 12 }}>
              Personalised Individual Training
            </h2>
            <p style={{ fontSize: 14, color: "#555", lineHeight: 1.75, fontWeight: 400 }}>
              Begin a journey of lifelong learning and professional development with Tobams Group&rsquo;s diverse range
              of training programs for individuals. From technical skills mastery to soft skills enhancement,
              our courses cover a wide spectrum of topics to meet the evolving needs of today&rsquo;s professionals.
            </p>
            <FeatureList items={individualFeatures} />
          </div>
          <div className="card card-glow">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=80"
              alt="Individual Training"
              width={500}
              height={340}
              style={{ width: "100%", height: "auto", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* Capacity Development */}
      <section className="section-inner" style={{ background: "#fff" }}>
        <div className="container grid-2">
          <div>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#1A1A1A", marginBottom: 12 }}>
              Capacity Development
            </h2>
            <p style={{ fontSize: 14, color: "#555", lineHeight: 1.75, maxWidth: 420, fontWeight: 400 }}>
              At Tobams Group, we empower individuals and organizations through tailored training programs,
              expert-led workshops, and personalized mentorship. We are committed to your success and growth.
              We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:
            </p>
            <FeatureList items={capacityFeatures} />
          </div>
          <div className="card card-glow">
            <Image
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=700&q=80"
              alt="Capacity Development"
              width={500}
              height={340}
              style={{ width: "100%", height: "auto", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}

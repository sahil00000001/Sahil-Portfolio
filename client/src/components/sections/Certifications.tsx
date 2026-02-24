import { FadeIn } from "../animations/FadeIn";

export function Certifications() {
  const certs = [
    { title: "Camunda Knowledge Badge (BPMN & DMN)", issuer: "Camunda Credly", year: "2025" },
    { title: "Tata GenAI-Powered Data Analytics Simulation", issuer: "Forage", year: "2025" },
    { title: "AWS Cloud Practitioner Essentials", issuer: "AWS Training & Certification", year: "2025" },
    { title: "Practical First Steps with CockroachDB", issuer: "CockroachDB", year: "2024" },
    { title: "Data Processing Specialist", issuer: "Professional Certification", year: "2024" },
    { title: "Software Engineer — IT Services", issuer: "Professional Certification", year: "2024" },
    { title: "Software Development Trainee", issuer: "Professional Certification", year: "2024" },
    { title: "Certificate of Participation — Namma Yatri Open Mobility Challenge", issuer: "Namma Yatri", year: "2024" },
  ];

  return (
    <section id="certifications" className="py-12 relative">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-2">Certifications</h2>
          <p className="text-muted-foreground">Continuous learning and professional credentials.</p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certs.map((c, i) => (
            <div key={i} className="glass p-4 rounded-xl border border-white/[0.05]">
              <div className="text-sm text-primary font-medium">{c.issuer} • {c.year}</div>
              <div className="font-semibold mt-1">{c.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

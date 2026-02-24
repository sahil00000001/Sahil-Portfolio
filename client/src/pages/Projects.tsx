import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, Users, Zap } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "WLS Enterprise Integration",
    subtitle: "Westminster Legalisation Services — PodTech",
    description: "Led a team of 5 developers to architect and deliver the full Westminster Legalisation Services integration at PodTech. Deployed 10+ RESTful APIs using ASP.NET Core 8 and ASP.NET MVC, implementing efficient CRUD operations and optimizing data flow across enterprise systems. Built a scalable React + TypeScript frontend with Redux for API-driven data visualization in responsive tables.",
    highlights: [
      "10+ RESTful APIs deployed with ASP.NET Core 8",
      "Managed a team of 5 developers end-to-end",
      "100% on-time delivery within strict deadlines",
      "35% reduction in processing time via .NET optimization",
    ],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    technologies: ["ASP.NET Core 8", "ASP.NET MVC", "React", "TypeScript", "Redux", "SQL Server", ".NET"],
    liveUrl: null,
    githubUrl: null,
    featured: true,
  },
  {
    id: 2,
    title: "Real-Time News Platform",
    subtitle: "Universal Justice Times — Full Stack",
    description: "Developed the company's full website leveraging HTML, CSS, JavaScript, TypeScript, MySQL, and Node.js. Implemented a real-time news feature using the News API with a custom API to seamlessly transfer and store data in a private database. This system automates nightly updates, ensuring zero operational expenses for real-time news sourcing — reducing costs significantly.",
    highlights: [
      "Real-time news fetching via News API integration",
      "Custom API for private DB transfer and storage",
      "Automated nightly updates — zero operational cost",
      "Full-stack: Node.js backend + MySQL + TypeScript",
    ],
    imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
    technologies: ["HTML", "CSS", "JavaScript", "TypeScript", "Node.js", "MySQL", "News API"],
    liveUrl: null,
    githubUrl: "https://github.com/sahil00000001",
    featured: true,
  },
  {
    id: 3,
    title: "Interactive Education Platform",
    subtitle: "Pepcoding Pvt Ltd. — Software Engineer Intern",
    description: "Led a passporting internship project building an interactive video module for seamless student-teacher interaction using Next.js, JavaScript, HTML, CSS, MySQL, Bootstrap, and TailwindCSS. Integrated timestamps to enhance video engagement, added a tagging system to resolve TA confusion, and created a smooth doubt-posting platform for students.",
    highlights: [
      "25% increase in video engagement via timestamps",
      "40% spike in student enthusiasm",
      "50% surge in product sales",
      "Tagging system resolved TA confusion entirely",
    ],
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    technologies: ["Next.js", "JavaScript", "HTML", "CSS", "MySQL", "Bootstrap", "TailwindCSS", "GitHub"],
    liveUrl: null,
    githubUrl: "https://github.com/sahil00000001",
    featured: true,
  },
  {
    id: 4,
    title: "Atlas Sports Labs",
    subtitle: "Founder — Sports Ground Booking Platform",
    description: "Founded and built Atlas Sports Labs — a one-stop destination for renting sports grounds and equipment with a focus on affordability, authenticity, and accountability. Features transparent access to top-notch facilities with local connectivity insights, food options, parking details, and special discounts for schools and students.",
    highlights: [
      "Founded and led product development end-to-end",
      "Transparent sports facility booking platform",
      "Special discounts for schools and students",
      "Local connectivity insights and amenity info",
    ],
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    technologies: ["React", "Node.js", "MySQL", "JavaScript"],
    liveUrl: null,
    githubUrl: "https://github.com/sahil00000001",
    featured: false,
  },
  {
    id: 5,
    title: "Production-Ready RESTful API Suite",
    subtitle: "PodTech & LTIMindtree — Backend Engineering",
    description: "Architected and deployed 35+ production-ready RESTful APIs across ASP.NET Core and Spring Boot platforms serving thousands of daily requests. Implemented code refactoring strategies that reduced API response time by 20% and designed scalable database schemas increasing data processing efficiency by 30%.",
    highlights: [
      "35+ production APIs across ASP.NET Core & Spring Boot",
      "20% reduction in API response time",
      "30% improvement in data processing efficiency",
      "Thousands of daily requests served",
    ],
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    technologies: ["Spring Boot", "Java", "ASP.NET Core", "SQL Server", "PostgreSQL", "MySQL", "REST API"],
    liveUrl: null,
    githubUrl: "https://github.com/sahil00000001",
    featured: true,
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24">

        {/* Page Hero */}
        <section className="py-20 relative overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.25, 0.1] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-20%] left-[-10%] w-[40vw] h-[40vw] bg-secondary rounded-full blur-[120px] pointer-events-none"
          />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-primary/30 mb-6">
                <Code2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary-foreground/80">5 Projects · 35+ APIs · Enterprise & Startup</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
                Featured <span className="text-gradient">Work</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                A curated selection of complex engineering challenges I've solved — spanning enterprise integrations, education platforms, startup ventures, and high-performance API systems.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-6 mt-10">
              {[
                { icon: <Zap className="w-5 h-5 text-primary" />, value: "35+", label: "APIs Deployed" },
                { icon: <Users className="w-5 h-5 text-secondary" />, value: "5", label: "Team Members Led" },
                { icon: <Code2 className="w-5 h-5 text-primary" />, value: "100%", label: "On-time Delivery" },
              ].map((s, i) => (
                <div key={i} className="glass px-6 py-4 rounded-2xl border border-white/[0.05] flex items-center gap-3">
                  {s.icon}
                  <div>
                    <div className="text-xl font-bold text-white">{s.value}</div>
                    <div className="text-xs text-muted-foreground">{s.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="space-y-12">
              {projects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="glass rounded-3xl overflow-hidden border border-white/[0.05] hover:border-primary/30 transition-all duration-500 group"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${idx % 2 === 0 ? "" : "lg:flex-row-reverse"}`}>
                    {/* Image */}
                    <div className={`relative h-64 lg:h-auto overflow-hidden ${idx % 2 !== 0 ? "lg:order-2" : ""}`}>
                      <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 min-h-[260px]"
                      />
                      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20">
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:scale-110 transition-transform shadow-[0_0_20px_rgba(138,43,226,0.5)]">
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:scale-110 hover:border-white transition-all">
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`p-8 lg:p-12 flex flex-col justify-center ${idx % 2 !== 0 ? "lg:order-1" : ""}`}>
                      {project.featured && (
                        <span className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Featured Project</span>
                      )}
                      <p className="text-muted-foreground text-sm mb-2">{project.subtitle}</p>
                      <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{project.title}</h2>
                      <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

                      {/* Highlights */}
                      <ul className="space-y-2 mb-6">
                        {project.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground/90">
                            <span className="text-primary mt-0.5">▸</span> {h}
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map(tech => (
                          <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/80">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

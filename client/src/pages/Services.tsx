import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Layout, Terminal, Cloud, Share2, Database, Users } from "lucide-react";

const services = [
  {
    id: 1,
    icon: <Layout className="w-8 h-8" />,
    title: "Full Stack Development",
    tagline: "End-to-end web application engineering",
    description: "I build complete web applications from the ground up — clean, responsive frontends with React and TypeScript, paired with high-performance backends in ASP.NET Core or Spring Boot. Every layer is designed for scalability, maintainability, and speed.",
    what: [
      "React + TypeScript + Redux frontend development",
      "ASP.NET Core 8 / Spring Boot backend APIs",
      "Reusable component libraries and design systems",
      "MVC architecture with clean separation of concerns",
      "API-driven data visualization and dynamic UIs",
    ],
    stack: ["React", "TypeScript", "Redux", "ASP.NET Core", "Spring Boot", "Next.js", "HTML5", "CSS3"],
  },
  {
    id: 2,
    icon: <Terminal className="w-8 h-8" />,
    title: "RESTful API Development",
    tagline: "Secure, high-performance API engineering",
    description: "I've architected and deployed 35+ production-ready RESTful APIs across ASP.NET Core and Spring Boot platforms, serving thousands of daily requests. I design APIs with a focus on security, efficiency, and long-term maintainability.",
    what: [
      "RESTful API design and implementation",
      "CRUD operations with optimized data flow",
      "API integration with third-party services",
      "Code refactoring for up to 20% faster response times",
      "API documentation and testing (Postman, REST Assured)",
    ],
    stack: ["ASP.NET Core 8", "Spring Boot", "Java", "C#", "Postman", "REST Assured", "Swagger"],
  },
  {
    id: 3,
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud-Native Applications",
    tagline: "AWS & Azure infrastructure design and deployment",
    description: "I design and deploy scalable, reliable cloud solutions on AWS and Microsoft Azure. From EC2 instances to serverless functions, I ensure your application is secure, cost-efficient, and built for production-grade reliability.",
    what: [
      "AWS: EC2, RDS, S3, IAM configuration and deployment",
      "Microsoft Azure: Functions and infrastructure design",
      "Cloud-native application architecture",
      "CI/CD pipeline setup and automation",
      "High-availability and fault-tolerant system design",
    ],
    stack: ["AWS EC2", "AWS RDS", "AWS S3", "AWS IAM", "Microsoft Azure", "CI/CD Pipelines", "Git"],
  },
  {
    id: 4,
    icon: <Share2 className="w-8 h-8" />,
    title: "Microservices Architecture",
    tagline: "Distributed systems designed for scale",
    description: "I design and implement microservices architectures that allow independent scaling, deployment, and maintenance of each service. Ideal for enterprise applications that need high availability and modular growth.",
    what: [
      "Microservices design with clear service boundaries",
      "Inter-service communication via REST and messaging",
      "Service discovery and load balancing",
      "Independent deployment pipelines per service",
      "Fault tolerance and resilience patterns",
    ],
    stack: ["Spring Boot", "ASP.NET Core", "Docker", "REST APIs", "Microservices Patterns", "Java"],
  },
  {
    id: 5,
    icon: <Database className="w-8 h-8" />,
    title: "Database Design & Optimization",
    tagline: "Scalable schemas and blazing-fast queries",
    description: "I design scalable, normalized database schemas and implement query optimization strategies that have improved data processing efficiency by up to 30% in production systems. I work fluently with both SQL and NoSQL databases.",
    what: [
      "Database schema design (SQL & NoSQL)",
      "Complex query optimization and indexing",
      "Data consistency and integrity enforcement",
      "MySQL, PostgreSQL, MongoDB, SQL Server",
      "Database migration and refactoring strategies",
    ],
    stack: ["MySQL", "PostgreSQL", "MongoDB", "SQL Server", "Drizzle ORM", "Database Design"],
  },
  {
    id: 6,
    icon: <Users className="w-8 h-8" />,
    title: "Tech Leadership & Mentoring",
    tagline: "Engineering teams led with clarity and delivery",
    description: "I've led development teams, conducted code reviews, and mentored junior engineers on best practices in enterprise software development. I bring both technical depth and people skills to any engineering organization.",
    what: [
      "Engineering team leadership (managed 5-person teams)",
      "Code reviews and architectural guidance",
      "Mentoring junior developers on ASP.NET Core, React, Java",
      "Agile/Scrum sprint planning and delivery",
      "DSA and OOP instruction (taught at byteXL)",
    ],
    stack: ["Agile", "Scrum", "Code Review", "Team Management", "Mentoring", "Technical Leadership"],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24">

        {/* Page Hero */}
        <section className="py-20 relative overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-secondary rounded-full blur-[120px] pointer-events-none"
          />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-primary/30 mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-primary-foreground/80">Available for new opportunities</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
                Value I <span className="text-gradient">Deliver</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                Comprehensive, enterprise-grade engineering solutions — from full stack development and API design to cloud infrastructure and technical leadership.
              </p>
              <div className="mt-8">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-primary to-secondary text-white shadow-[0_0_30px_rgba(138,43,226,0.4)] hover:shadow-[0_0_40px_rgba(138,43,226,0.6)] transition-all hover:scale-105 active:scale-95">
                  Work With Me <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, idx) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.07 }}
                  className="glass p-8 rounded-3xl border border-white/[0.05] hover:border-primary/30 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-primary/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_0_20px_rgba(138,43,226,0.3)]">
                    {service.icon}
                  </div>

                  <p className="text-xs text-primary font-semibold uppercase tracking-widest mb-2">{service.tagline}</p>
                  <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>

                  {/* What I do */}
                  <ul className="space-y-2 mb-6">
                    {service.what.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground/90">
                        <span className="text-primary mt-0.5 shrink-0">▸</span> {item}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {service.stack.map(tech => (
                      <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/70">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
                Ready to <span className="text-gradient">Build Together?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Whether you need a full-stack app, scalable APIs, cloud infrastructure, or an experienced tech lead — let's make it happen.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-primary to-secondary text-white shadow-[0_0_30px_rgba(138,43,226,0.4)] hover:shadow-[0_0_40px_rgba(138,43,226,0.6)] transition-all hover:scale-105 active:scale-95">
                Get In Touch <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

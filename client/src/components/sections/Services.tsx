import { motion } from "framer-motion";
import { FadeIn } from "../animations/FadeIn";
import { DynamicIcon } from "../ui/dynamic-icon";

const services = [
  {
    id: 1,
    title: "Full Stack Development",
    description: "End-to-end web application development using React, TypeScript, and Redux on the frontend with ASP.NET Core or Spring Boot on the backend — clean architecture, MVC patterns, and reusable component libraries.",
    icon: "Layout",
  },
  {
    id: 2,
    title: "RESTful API Development",
    description: "Designing and building secure, high-performance RESTful APIs using ASP.NET Core 8 and Spring Boot. Delivered 35+ production-ready APIs serving thousands of daily requests with optimized CRUD operations.",
    icon: "Terminal",
  },
  {
    id: 3,
    title: "Cloud-Native Applications",
    description: "Deploying scalable, reliable cloud solutions on AWS (EC2, RDS, S3, IAM) and Microsoft Azure (Functions, Infrastructure). Ensuring high availability, security, and cost-efficient architecture.",
    icon: "Cloud",
  },
  {
    id: 4,
    title: "Microservices Architecture",
    description: "Designing distributed systems with microservices patterns for high availability and independent scalability. Enabling seamless service communication with robust API integration and fault tolerance.",
    icon: "Share2",
  },
  {
    id: 5,
    title: "Database Design & Optimization",
    description: "Designing scalable schemas and query optimization strategies for MySQL, PostgreSQL, MongoDB, and SQL Server — ensuring data consistency, security, and up to 30% improvement in processing efficiency.",
    icon: "Database",
  },
  {
    id: 6,
    title: "Tech Leadership & Mentoring",
    description: "Leading engineering teams, conducting code reviews, and mentoring junior developers on best practices. Experienced in Agile/Scrum methodology delivering complex enterprise projects 100% on-time.",
    icon: "Users",
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Value I <span className="text-gradient">Deliver</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions tailored for modern digital needs.
          </p>
        </FadeIn>

        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } } }}
              whileHover={{ y: -8 }}
              className="glass h-full p-8 rounded-3xl border border-white/[0.05] hover:border-primary/40 transition-colors duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-primary group-hover:shadow-[0_0_20px_rgba(138,43,226,0.4)] transition-shadow duration-300"
              >
                <DynamicIcon name={service.icon} className="w-7 h-7" />
              </motion.div>

              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

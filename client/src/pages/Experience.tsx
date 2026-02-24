import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Users, Zap } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Software Developer",
    company: "PODTECH",
    period: "May 2025 – Present",
    location: "Bengaluru, India",
    type: "Full-time",
    color: "from-primary to-secondary",
    description: "Building enterprise-grade software at PODTECH — a company with 16+ years of success delivering AI, cloud, IoT, and custom software solutions to clients worldwide.",
    bullets: [
      "Architected and deployed 10+ RESTful APIs using ASP.NET Core 8 and ASP.NET MVC, implementing efficient CRUD operations and optimizing data flow across enterprise applications.",
      "Led end-to-end development of the WLS project (Westminster Legalisation Services), managing a team of 5 developers and delivering the complete solution 100% on-time within strict deadlines.",
      "Designed and implemented scalable frontend solutions using React with TypeScript and Redux, creating reusable component libraries and integrating dynamic API-driven data visualization.",
      "Engineered complex file handling mechanisms and command processors in .NET, streamlining data operations and reducing processing time by 35%.",
      "Demonstrated strong understanding of MVC architecture patterns, implementing separation of concerns and maintaining clean, maintainable codebases across multiple enterprise projects.",
      "Collaborated in an Agile environment, conducting code reviews and mentoring junior developers on best practices in ASP.NET Core and React development.",
    ],
    technologies: ["ASP.NET Core 8", "ASP.NET MVC", "React", "TypeScript", "Redux", "SQL Server", ".NET", "Agile"],
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "LTIMindtree",
    period: "Nov 2024 – Jan 2025",
    location: "Noida, Uttar Pradesh, India",
    type: "Full-time",
    color: "from-blue-500 to-cyan-400",
    description: "Worked at LTIMindtree — a global technology consulting and digital solutions company, contributing to backend API development and database optimization.",
    bullets: [
      "Developed and deployed 5+ RESTful APIs using Spring Boot and Java, enabling seamless communication across microservices.",
      "Optimized backend systems by refactoring legacy code, reducing API response time by 20%.",
      "Designed scalable database schemas and wrote complex MySQL queries, ensuring data consistency and security.",
      "Increased data processing efficiency by 30% for high-traffic applications through targeted query optimization.",
      "Worked in an Agile environment to deliver feature updates in sprints, collaborating with cross-functional teams.",
    ],
    technologies: ["Spring Boot", "Java", "MySQL", "Microservices", "REST API", "Agile"],
  },
  {
    id: 3,
    title: "DSA and OOPs Instructor",
    company: "byteXL",
    period: "Aug 2024 – Nov 2024",
    location: "Remote",
    type: "Contract",
    color: "from-purple-500 to-pink-500",
    description: "Taught core computer science subjects to undergraduate students, combining industry experience with structured pedagogy to build strong engineering foundations.",
    bullets: [
      "Taught Data Structures & Algorithms (DSA) and Object-Oriented Programming (OOP) using Java to undergraduate students.",
      "Utilized industry experience to simplify complex concepts, fostering strong problem-solving and coding skills.",
      "Focused on practical application of algorithms and object-oriented principles through interactive examples and hands-on coding exercises.",
      "Mentored students on best coding practices and guided them in building a solid foundation for their technical careers.",
    ],
    technologies: ["Java", "DSA", "OOP", "Algorithms", "Data Structures"],
  },
  {
    id: 4,
    title: "Data Analyst",
    company: "Department of Telecommunications (DOT)",
    period: "Jul 2024 – Aug 2024",
    location: "New Delhi, India",
    type: "Government",
    color: "from-orange-500 to-amber-400",
    description: "Contributed as a Data Analyst at the Government of India's Department of Telecommunications, applying data processing and analysis techniques for telecom insights.",
    bullets: [
      "Applied data analysis and processing techniques to support telecommunications insights and reporting.",
      "Worked with government-level datasets to extract meaningful patterns and summaries.",
    ],
    technologies: ["Data Analysis", "Python", "SQL"],
  },
  {
    id: 5,
    title: "Founder",
    company: "Atlas Sports Labs",
    period: "Dec 2023 – Aug 2024",
    location: "New Delhi, India",
    type: "Entrepreneurship",
    color: "from-green-500 to-emerald-400",
    description: "Founded Atlas Sports Labs — a one-stop destination for renting sports grounds and equipment, built around affordability, authenticity, and accountability.",
    bullets: [
      "Founded and led end-to-end product development of a sports ground rental platform.",
      "Provided transparent access to top-notch facilities with local connectivity insights, food options, and parking facilities.",
      "Designed and built the web platform offering special discounts for schools and students.",
      "Managed the full business cycle — product, tech, operations, and user growth.",
    ],
    technologies: ["React", "Node.js", "MySQL", "JavaScript", "Product Management"],
  },
  {
    id: 6,
    title: "Full-Stack Developer",
    company: "Universal Justice Times",
    period: "Jul 2023 – Nov 2023",
    location: "New Delhi, India",
    type: "Full-time",
    color: "from-indigo-500 to-violet-500",
    description: "Developed the company's complete website with real-time news integration, creating an automated system that eliminated news sourcing costs entirely.",
    bullets: [
      "Successfully completed the development of the full website using HTML, CSS, JavaScript, TypeScript, MySQL, and Node.js.",
      "Implemented a real-time news feature using the News API, creating a custom API to seamlessly transfer and store data in a private database.",
      "Built an automated system for nightly updates ensuring zero operational expenses for real-time news sourcing.",
      "Reduced ongoing content management costs significantly through intelligent API automation.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "TypeScript", "Node.js", "MySQL", "News API"],
  },
  {
    id: 7,
    title: "Software Engineer Intern",
    company: "Pepcoding Pvt Ltd.",
    period: "Feb 2022 – Aug 2022",
    location: "Delhi, India",
    type: "Internship",
    color: "from-pink-500 to-rose-400",
    description: "Led a passporting internship project, building an interactive education platform that revolutionized student-teacher interaction and boosted product sales by 50%.",
    bullets: [
      "Led a passporting internship project with Next.js, JavaScript, HTML, CSS, GitHub, MySQL, Bootstrap, and TailwindCSS.",
      "Crafted an interactive video module for seamless student-teacher interaction.",
      "Integrating timestamps increased video excitement by 25%, spiking student enthusiasm by 40%.",
      "The innovation triggered a 50% surge in product sales.",
      "Built a smooth platform where students effortlessly posted doubts and TAs provided swift solutions.",
      "Addressed TA confusion through a tagging system, creating a harmonious learning environment.",
    ],
    technologies: ["Next.js", "JavaScript", "HTML", "CSS", "MySQL", "Bootstrap", "TailwindCSS", "GitHub"],
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24">

        {/* Page Hero */}
        <section className="py-20 relative overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.25, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] right-[-10%] w-[35vw] h-[35vw] bg-primary rounded-full blur-[120px] pointer-events-none"
          />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-primary/30 mb-6">
                <Briefcase className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary-foreground/80">7 Roles · Enterprise · Startup · Government</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
                My <span className="text-gradient">Journey</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                From internships to founding a startup, from government analytics to enterprise engineering — a full timeline of my professional growth and impact.
              </p>
            </motion.div>

            {/* Career Stats */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-6 mt-10">
              {[
                { icon: <Briefcase className="w-5 h-5 text-primary" />, value: "7+", label: "Roles & Ventures" },
                { icon: <TrendingUp className="w-5 h-5 text-secondary" />, value: "35+", label: "APIs Deployed" },
                { icon: <Users className="w-5 h-5 text-primary" />, value: "5", label: "Team Members Led" },
                { icon: <Zap className="w-5 h-5 text-secondary" />, value: "3+", label: "Years of Experience" },
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

        {/* Timeline */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/60 via-secondary/40 to-transparent hidden sm:block" />

              <div className="space-y-10">
                {experiences.map((exp, idx) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.07 }}
                    className="relative sm:pl-20"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-[14px] top-8 w-5 h-5 rounded-full bg-background border-4 border-primary shadow-[0_0_15px_rgba(138,43,226,0.6)] z-10 hidden sm:block" />

                    <div className="glass p-8 rounded-3xl border border-white/[0.05] hover:border-primary/30 transition-all duration-300 group relative overflow-hidden">
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.color} opacity-60`} />

                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/20">{exp.type}</span>
                            <span className="text-xs text-muted-foreground">{exp.location}</span>
                          </div>
                          <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                          <h4 className="text-primary font-semibold">{exp.company}</h4>
                        </div>
                        <div className="shrink-0">
                          <span className="font-mono text-sm text-muted-foreground bg-white/5 px-3 py-1 rounded-full">{exp.period}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground/80 text-sm leading-relaxed mb-5">{exp.description}</p>

                      <ul className="space-y-2 mb-6">
                        {exp.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground/90">
                            <span className="text-primary mt-0.5 shrink-0">▸</span> {b}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map(tech => (
                          <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/70">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Github, Linkedin, Globe, GraduationCap, Award, Star } from "lucide-react";

const skillGroups = [
  {
    category: "Programming Languages",
    skills: ["Java", "JavaScript", "TypeScript", "Python", "C++"],
  },
  {
    category: "Backend Technologies",
    skills: ["ASP.NET Core 8", "ASP.NET MVC", "Spring Boot", "Spring MVC", "Microservices Architecture", "Node.js"],
  },
  {
    category: "Frontend Technologies",
    skills: ["ReactJS", "Redux", "Next.js", "HTML5", "CSS3", "TailwindCSS", "Bootstrap"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "SQL Server"],
  },
  {
    category: "Cloud Platforms",
    skills: ["AWS (EC2, RDS, S3, IAM)", "Microsoft Azure (Functions, Infrastructure Design)"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Git", "CI/CD Pipelines", "Postman", "Visual Studio", "IntelliJ IDEA"],
  },
  {
    category: "Testing & Debugging",
    skills: ["Selenium", "REST Assured", "Postman", "Unit Testing"],
  },
  {
    category: "Core Competencies",
    skills: ["Full Stack Development", "MVC Architecture", "Microservices Design", "REST API Development", "Cloud-Native Applications", "Agile/Scrum", "Database Design", "Responsive UI Development"],
  },
  {
    category: "Soft Skills",
    skills: ["Technical Leadership", "Team Management", "Cross-functional Collaboration", "Problem-Solving", "Agile Teamwork", "Code Review & Mentoring"],
  },
];

const achievements = [
  {
    icon: "🏆",
    title: "WLS Enterprise Integration",
    description: "Led and delivered the Westminster Legalisation Services project at PodTech, managing a team of 5 developers and completing 100% on-time within strict deadlines.",
  },
  {
    icon: "🚀",
    title: "35+ Production-Ready APIs",
    description: "Architected and deployed 35+ production-ready RESTful APIs across ASP.NET Core and Spring Boot platforms, serving thousands of daily requests.",
  },
  {
    icon: "⚡",
    title: "35% Processing Time Reduction",
    description: "Engineered complex file handling mechanisms and command processors in .NET, reducing processing time by 35%.",
  },
  {
    icon: "📈",
    title: "50% Sales Surge",
    description: "Led interactive video module development at Pepcoding, triggering a 50% surge in product sales through improved UX and engagement features.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24">

        {/* Page Hero */}
        <section className="py-20 relative overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-20%] right-[-10%] w-[40vw] h-[40vw] bg-primary rounded-full blur-[120px] pointer-events-none"
          />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-primary/30 mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-primary-foreground/80">Software Developer @ PODTECH</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
                About <span className="text-gradient">Me</span>
              </h1>
              <div className="flex flex-wrap gap-4 text-muted-foreground text-sm">
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> New Delhi, India</span>
                <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> vashishtsahil99@gmail.com</span>
                <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> 9625107920</span>
              </div>
              <div className="flex flex-wrap gap-4 mt-4">
                <a href="https://github.com/sahil00000001" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 hover:border-primary/50 text-sm transition-all">
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/sahilvashisht00/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 hover:border-primary/50 text-sm transition-all">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
                <a href="https://g.dev/SahilVashisht" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 hover:border-primary/50 text-sm transition-all">
                  <Globe className="w-4 h-4" /> Google Dev Profile
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bio */}
        <section className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-bold font-display mb-8">Who I <span className="text-gradient">Am</span></h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
                <div className="lg:col-span-2 space-y-5 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Hi, I'm <span className="text-white font-semibold">Sahil Vashisht</span> — a passionate Full Stack Developer and Software Engineer with expertise in Java, Spring Boot, ASP.NET Core, and React. I'm currently building enterprise-grade solutions at <span className="text-primary font-medium">PODTECH, Bengaluru</span>.
                  </p>
                  <p>
                    I specialize in crafting RESTful APIs, scalable microservices architectures, and cloud-native applications on AWS and Azure. Whether it's engineering complex backend systems or building clean, responsive frontends — I thrive on solving challenging problems and delivering impactful results, 100% on time.
                  </p>
                  <p>
                    Beyond engineering, I'm passionate about <span className="text-white font-medium">tech education</span>. I've taught DSA and OOP using Java to undergraduate students at byteXL, and I founded <span className="text-white font-medium">Atlas Sports Labs</span> — a sports ground rental platform connecting communities to affordable sporting experiences.
                  </p>
                  <p>
                    I believe in writing clean, maintainable code that's as elegant as the interfaces it powers — and in leading teams with empathy, clarity, and a bias for delivery.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "3+", label: "Years Experience" },
                    { value: "35+", label: "APIs Deployed" },
                    { value: "100%", label: "On-time Delivery" },
                    { value: "7+", label: "Roles & Ventures" },
                  ].map((stat, i) => (
                    <div key={i} className="glass p-5 rounded-xl border border-white/5 hover:border-primary/30 transition-colors text-center">
                      <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-xs text-primary font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-bold font-display mb-10">Technical <span className="text-gradient">Skills</span></h2>
              <div className="space-y-8">
                {skillGroups.map((group, idx) => (
                  <motion.div key={group.category} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}>
                    <h3 className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">{group.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span key={skill} className="px-4 py-2 rounded-full glass border border-white/10 text-sm text-white/80 hover:border-primary/40 hover:text-white transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education */}
        <section className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-bold font-display mb-10 flex items-center gap-3">
                <GraduationCap className="text-primary w-8 h-8" />
                Education
              </h2>
              <div className="space-y-6">
                <div className="glass p-8 rounded-2xl border border-white/[0.05] hover:border-primary/30 transition-colors">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-white">Guru Tegh Bahadur Institute Of Technology</h3>
                      <p className="text-primary font-medium mt-1">BTech — Information Technology</p>
                      <p className="text-muted-foreground text-sm mt-1">Affiliated to Guru Gobind Singh Indraprastha University</p>
                    </div>
                    <div className="sm:text-right shrink-0">
                      <div className="font-mono text-sm text-primary">Sep 2020 – Mar 2024</div>
                      <div className="text-muted-foreground text-sm mt-1">CGPA: <span className="text-white font-semibold">8.47</span></div>
                    </div>
                  </div>
                </div>

                <div className="glass p-8 rounded-2xl border border-white/[0.05] hover:border-primary/30 transition-colors">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-white">School Of Excellence Sec 22 Dwarka</h3>
                      <p className="text-primary font-medium mt-1">Class 12th — CBSE</p>
                    </div>
                    <div className="sm:text-right shrink-0">
                      <div className="font-mono text-sm text-primary">2020</div>
                      <div className="text-muted-foreground text-sm mt-1">CGPA: <span className="text-white font-semibold">8.4</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-bold font-display mb-10 flex items-center gap-3">
                <Award className="text-primary w-8 h-8" />
                Certifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: "Camunda Knowledge Badge (BPMN & DMN)", issuer: "Camunda Credly", year: "2025" },
                  { title: "Tata GenAI-Powered Data Analytics Simulation", issuer: "Forage", year: "2025" },
                  { title: "AWS Cloud Practitioner Essentials", issuer: "AWS Training & Certification", year: "2025" },
                  { title: "Practical First Steps with CockroachDB", issuer: "CockroachDB", year: "2024" },
                  { title: "Data Processing Specialist", issuer: "Professional Certification", year: "2024" },
                  { title: "Software Engineer — IT Services", issuer: "Professional Certification", year: "2024" },
                  { title: "Software Development Trainee", issuer: "Professional Certification", year: "2024" },
                  { title: "Namma Yatri Open Mobility Challenge", issuer: "Certificate of Participation", year: "2024" },
                ].map((c, i) => (
                  <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                    className="glass p-5 rounded-xl border border-white/[0.05] hover:border-primary/30 transition-colors group">
                    <div className="text-xs text-primary font-semibold uppercase tracking-wider">{c.issuer}</div>
                    <div className="font-semibold text-white mt-2 leading-snug">{c.title}</div>
                    <div className="text-xs text-muted-foreground mt-2">{c.year}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Achievements */}
        <section className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-bold font-display mb-10 flex items-center gap-3">
                <Star className="text-primary w-8 h-8" />
                Key <span className="text-gradient ml-2">Achievements</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((a, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="glass p-6 rounded-2xl border border-white/[0.05] hover:border-primary/30 transition-colors flex gap-4">
                    <div className="text-3xl shrink-0">{a.icon}</div>
                    <div>
                      <h3 className="font-bold text-white mb-2">{a.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{a.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

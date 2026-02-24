import { motion } from "framer-motion";
import { FadeIn } from "../animations/FadeIn";

const experiences = [
  {
    id: 1,
    title: "Software Developer",
    company: "PODTECH",
    period: "May 2025 – Present",
    description: "Architected and deployed 10+ RESTful APIs using ASP.NET Core 8 and ASP.NET MVC. Led end-to-end development of the WLS project (Westminster Legalisation Services), managing a team of 5 developers with 100% on-time delivery. Designed scalable React + TypeScript + Redux frontend. Engineered file handling mechanisms in .NET, reducing processing time by 35%. Conducted code reviews and mentored junior developers in an Agile environment.",
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "LTIMindtree",
    period: "Nov 2024 – Jan 2025",
    description: "Developed and deployed 5+ RESTful APIs using Spring Boot and Java. Reduced API response time by 20% through code refactoring. Designed scalable database schemas and wrote complex MySQL queries ensuring data consistency and security. Increased data processing efficiency by 30% for high-traffic applications. Worked in Agile sprints collaborating with cross-functional teams.",
  },
  {
    id: 3,
    title: "DSA and OOPs Instructor",
    company: "byteXL",
    period: "Aug 2024 – Nov 2024",
    description: "Taught Data Structures & Algorithms (DSA) and Object-Oriented Programming (OOP) using Java to undergraduate students. Simplified complex concepts fostering strong problem-solving skills. Focused on practical application of algorithms through interactive examples and hands-on coding exercises. Mentored students on best coding practices.",
  },
  {
    id: 4,
    title: "Data Analyst",
    company: "Department of Telecommunications (DOT)",
    period: "Jul 2024 – Aug 2024",
    description: "Applied data analysis and processing techniques at the Government of India's Department of Telecommunications to support telecommunications insights and reporting.",
  },
  {
    id: 5,
    title: "Founder",
    company: "Atlas Sports Labs",
    period: "Dec 2023 – Aug 2024",
    description: "Founded Atlas Sports Labs — a one-stop destination for renting sports grounds and equipment. Built the platform focused on affordability, authenticity, and accountability, providing transparent access to top-notch facilities with local connectivity insights, food options, parking facilities, and special discounts for schools and students.",
  },
  {
    id: 6,
    title: "Full-Stack Developer",
    company: "Universal Justice Times",
    period: "Jul 2023 – Nov 2023",
    description: "Developed the company's full website using HTML, CSS, JavaScript, TypeScript, MySQL, and Node.js. Implemented a real-time news feature using the News API with a custom API to store data in a private database. The system automates nightly updates ensuring zero operational expenses for real-time news sourcing.",
  },
  {
    id: 7,
    title: "Software Engineer Intern",
    company: "Pepcoding Pvt Ltd.",
    period: "Feb 2022 – Aug 2022",
    description: "Led a passporting internship project using Next.js, JavaScript, HTML, CSS, MySQL, Bootstrap, and TailwindCSS. Crafted an interactive video module for student-teacher interaction. Integrating timestamps increased video engagement by 25% and student enthusiasm by 40%, triggering a 50% surge in product sales. Addressed TA confusion through a tagging system, transforming the learning experience.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-black/20">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground">
            A timeline of my professional growth and impact.
          </p>
        </FadeIn>

        <div className="relative border-l border-white/10 md:border-l-0 md:before:absolute md:before:inset-y-0 md:before:left-1/2 md:before:-ml-[1px] md:before:w-[2px] md:before:bg-gradient-to-b md:before:from-primary/50 md:before:via-secondary/50 md:before:to-transparent">
          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, idx) => (
              <FadeIn
                key={exp.id}
                direction={idx % 2 === 0 ? "right" : "left"}
                className={`relative flex flex-col md:flex-row justify-between items-center w-full ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                  className="absolute left-[-5px] md:left-1/2 md:-ml-[10px] w-5 h-5 rounded-full bg-background border-4 border-primary shadow-[0_0_15px_rgba(138,43,226,0.6)] z-10"
                />

                <div className="w-full md:w-[45%] pl-8 md:pl-0">
                  <div className="glass p-8 rounded-3xl border border-white/[0.05] hover:border-primary/30 transition-colors relative group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative z-10">
                      <span className="text-primary font-mono text-sm font-semibold tracking-wider block mb-2">{exp.period}</span>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <h4 className="text-muted-foreground font-medium mb-4">{exp.company}</h4>
                      <p className="text-muted-foreground/80 leading-relaxed text-sm">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

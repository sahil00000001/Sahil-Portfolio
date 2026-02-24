import { FadeIn } from "../animations/FadeIn";
import { DynamicIcon } from "../ui/dynamic-icon";

const skillGroups = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Java", icon: "Code2", proficiency: 95 },
      { name: "JavaScript", icon: "Code2", proficiency: 92 },
      { name: "TypeScript", icon: "Code2", proficiency: 90 },
      { name: "Python", icon: "Code2", proficiency: 82 },
      { name: "C++", icon: "Code2", proficiency: 78 },
    ],
  },
  {
    category: "Backend Technologies",
    skills: [
      { name: "ASP.NET Core", icon: "Server", proficiency: 94 },
      { name: "ASP.NET MVC", icon: "Server", proficiency: 90 },
      { name: "Spring Boot", icon: "Server", proficiency: 88 },
      { name: "Spring MVC", icon: "Server", proficiency: 84 },
      { name: "Microservices", icon: "Share2", proficiency: 86 },
      { name: "Node.js", icon: "Server", proficiency: 80 },
    ],
  },
  {
    category: "Frontend Technologies",
    skills: [
      { name: "ReactJS", icon: "Monitor", proficiency: 92 },
      { name: "Redux", icon: "Monitor", proficiency: 88 },
      { name: "Next.js", icon: "Monitor", proficiency: 80 },
      { name: "HTML5", icon: "Monitor", proficiency: 95 },
      { name: "CSS3", icon: "Monitor", proficiency: 90 },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", icon: "Database", proficiency: 88 },
      { name: "PostgreSQL", icon: "Database", proficiency: 85 },
      { name: "MongoDB", icon: "Database", proficiency: 80 },
      { name: "SQL Server", icon: "Database", proficiency: 82 },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: "Cloud", proficiency: 85 },
      { name: "Microsoft Azure", icon: "Cloud", proficiency: 78 },
      { name: "Git", icon: "GitBranch", proficiency: 95 },
      { name: "CI/CD Pipelines", icon: "Workflow", proficiency: 82 },
      { name: "Postman", icon: "Terminal", proficiency: 92 },
    ],
  },
  {
    category: "Testing & Tools",
    skills: [
      { name: "Selenium", icon: "TestTube2", proficiency: 78 },
      { name: "REST Assured", icon: "Terminal", proficiency: 80 },
      { name: "Unit Testing", icon: "CheckSquare", proficiency: 82 },
      { name: "IntelliJ IDEA", icon: "Code2", proficiency: 90 },
      { name: "Visual Studio", icon: "Code2", proficiency: 88 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tools, languages, and frameworks I use to bring ideas to life.
          </p>
        </FadeIn>

        <div className="space-y-16">
          {skillGroups.map((group, idx) => (
            <FadeIn key={group.category} delay={idx * 0.1}>
              <h3 className="text-xl font-semibold mb-8 text-white/80">{group.category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group glass p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:-translate-y-2 hover:bg-white/[0.04] transition-all duration-300 border border-white/[0.05] hover:border-primary/40 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <DynamicIcon
                      name={skill.icon}
                      className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors duration-300 relative z-10"
                    />
                    <span className="font-medium text-sm text-center relative z-10">{skill.name}</span>
                    <div
                      className="absolute bottom-0 left-0 h-1 bg-primary/50 transition-all duration-500 opacity-0 group-hover:opacity-100"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

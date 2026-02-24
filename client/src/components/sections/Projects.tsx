import { FadeIn } from "../animations/FadeIn";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "WLS Enterprise Integration",
    description: "Led a team of 5 developers to architect and deliver the Westminster Legalisation Services integration at PodTech. Deployed 10+ RESTful APIs using ASP.NET Core 8 and ASP.NET MVC, ensuring 100% on-time delivery. Built a scalable React + TypeScript + Redux frontend with API-driven data visualization.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    technologies: ["ASP.NET Core 8", "ASP.NET MVC", "React", "TypeScript", "Redux", "SQL Server"],
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: 2,
    title: "Real-Time News Platform",
    description: "Full-stack news website for Universal Justice Times with real-time news fetching via the News API. Built a custom API to transfer and store data in a private database, automating nightly updates and eliminating real-time news sourcing costs entirely.",
    imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
    technologies: ["HTML", "CSS", "JavaScript", "TypeScript", "Node.js", "MySQL", "News API"],
    liveUrl: null,
    githubUrl: "https://github.com/sahil00000001",
  },
  {
    id: 3,
    title: "Interactive Education Platform",
    description: "Led development of an interactive video module at Pepcoding for seamless student-teacher interaction. Integrated timestamps increasing video engagement by 25%, spiked student enthusiasm by 40%, and triggered a 50% surge in product sales. Added a tagging system to streamline TA doubt resolution.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    technologies: ["Next.js", "JavaScript", "HTML", "CSS", "MySQL", "Bootstrap", "TailwindCSS"],
    liveUrl: null,
    githubUrl: "https://github.com/sahil00000001",
  },
  {
    id: 4,
    title: "Atlas Sports Labs — Booking Platform",
    description: "Founded and built a sports ground and equipment rental platform focused on affordability, authenticity, and accountability. Features transparent facility access with local connectivity insights, food options, parking info, and special discounts for schools and students.",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    technologies: ["React", "Node.js", "MySQL", "JavaScript"],
    liveUrl: null,
    githubUrl: "https://github.com/sahil00000001",
  },
  {
    id: 5,
    title: "Production-Ready RESTful API Suite",
    description: "Architected and deployed 35+ production-ready RESTful APIs across ASP.NET Core and Spring Boot platforms serving thousands of daily requests. Optimized response times by 20% and improved data processing efficiency by 30% through code refactoring and schema optimization.",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    technologies: ["Spring Boot", "Java", "ASP.NET Core", "SQL Server", "PostgreSQL", "MySQL"],
    liveUrl: null,
    githubUrl: "https://github.com/sahil00000001",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            A selection of complex challenges I've solved through elegant code and architecture.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <FadeIn key={project.id} delay={idx * 0.1} className="group">
              <div className="glass rounded-3xl overflow-hidden border border-white/[0.05] hover:border-primary/30 transition-all duration-500 h-full flex flex-col">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Hover Overlay with links */}
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
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-1 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/80">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

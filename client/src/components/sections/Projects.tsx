import { useProjects } from "@/hooks/use-portfolio";
import { FadeIn } from "../animations/FadeIn";
import { Github, ExternalLink } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export function Projects() {
  const { data: projects, isLoading } = useProjects();

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

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-96 bg-white/5 rounded-3xl" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects?.map((project, idx) => (
              <FadeIn key={project.id} delay={idx * 0.1} className="group">
                <div className="glass rounded-3xl overflow-hidden border border-white/[0.05] hover:border-primary/30 transition-all duration-500 h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
                    <img 
                      src={project.imageUrl || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"} 
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
        )}
      </div>
    </section>
  );
}

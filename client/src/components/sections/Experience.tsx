import { useExperiences } from "@/hooks/use-portfolio";
import { FadeIn } from "../animations/FadeIn";
import { Skeleton } from "@/components/ui/skeleton";

export function Experience() {
  const { data: experiences, isLoading } = useExperiences();

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
          {isLoading ? (
            <div className="space-y-8">
               {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-40 w-full md:w-[45%] bg-white/5 rounded-2xl" />
              ))}
            </div>
          ) : (
            <div className="space-y-12 md:space-y-24">
              {experiences?.map((exp, idx) => (
                <FadeIn 
                  key={exp.id} 
                  direction={idx % 2 === 0 ? "right" : "left"}
                  className={`relative flex flex-col md:flex-row justify-between items-center w-full ${
                    idx % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[-5px] md:left-1/2 md:-ml-[10px] w-5 h-5 rounded-full bg-background border-4 border-primary shadow-[0_0_15px_rgba(138,43,226,0.6)] z-10" />
                  
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
          )}
        </div>
      </div>
    </section>
  );
}

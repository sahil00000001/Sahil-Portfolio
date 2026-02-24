import { useSkills } from "@/hooks/use-portfolio";
import { FadeIn } from "../animations/FadeIn";
import { DynamicIcon } from "../ui/dynamic-icon";
import { Skeleton } from "@/components/ui/skeleton";

export function Skills() {
  const { data: skills, isLoading } = useSkills();

  // Group skills by category if available
  const groupedSkills = skills?.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

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

        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <Skeleton key={i} className="h-24 bg-white/5 rounded-2xl" />
            ))}
          </div>
        ) : (
          <div className="space-y-16">
            {groupedSkills && Object.entries(groupedSkills).map(([category, items], idx) => (
              <FadeIn key={category} delay={idx * 0.1}>
                <h3 className="text-xl font-semibold mb-8 text-white/80">{category}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {items.map((skill) => (
                    <div 
                      key={skill.id}
                      className="group glass p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:-translate-y-2 hover:bg-white/[0.04] transition-all duration-300 border border-white/[0.05] hover:border-primary/40 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <DynamicIcon 
                        name={skill.icon} 
                        className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors duration-300 relative z-10" 
                      />
                      <span className="font-medium text-sm text-center relative z-10">{skill.name}</span>
                      
                      {/* Subtly show proficiency on hover */}
                      <div className="absolute bottom-0 left-0 h-1 bg-primary/50 transition-all duration-500 w-0 group-hover:w-full opacity-0 group-hover:opacity-100" style={{ width: `${skill.proficiency}%` }} />
                    </div>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

import { useServices } from "@/hooks/use-portfolio";
import { FadeIn } from "../animations/FadeIn";
import { DynamicIcon } from "../ui/dynamic-icon";
import { Skeleton } from "@/components/ui/skeleton";

export function Services() {
  const { data: services, isLoading } = useServices();

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

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-64 bg-white/5 rounded-3xl" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services?.map((service, idx) => (
              <FadeIn key={service.id} delay={idx * 0.1}>
                <div className="glass h-full p-8 rounded-3xl border border-white/[0.05] hover:-translate-y-2 hover:border-primary/40 transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_transparent] group-hover:shadow-[0_0_15px_rgba(138,43,226,0.3)]">
                    <DynamicIcon name={service.icon} className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

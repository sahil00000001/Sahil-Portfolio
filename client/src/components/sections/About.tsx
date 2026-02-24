import { FadeIn } from "../animations/FadeIn";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl transform rotate-2 group-hover:rotate-3 transition-transform duration-500 opacity-50 blur-lg" />
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80" 
                alt="Workspace" 
                className="relative rounded-2xl border border-white/10 shadow-2xl transform transition-transform duration-500 group-hover:-translate-y-2 grayscale-[20%] group-hover:grayscale-0"
              />
            </div>
            
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold font-display">
                Engineering the <span className="text-gradient">Future</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a full-stack developer with a passion for building robust, scalable applications that live at the intersection of brilliant design and complex engineering. 
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With expertise in modern web technologies, cloud infrastructure, and AI integrations, I help businesses transform visionary concepts into production-ready software. I believe in writing code that is as clean as the interfaces it powers.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                {[
                  { value: "5+", label: "Years Experience" },
                  { value: "50+", label: "Projects Delivered" },
                  { value: "100%", label: "Client Satisfaction" },
                  { value: "24/7", label: "Passion for Tech" },
                ].map((stat, i) => (
                  <div key={i} className="glass p-4 rounded-xl border border-white/5 hover:border-primary/30 transition-colors">
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-primary font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

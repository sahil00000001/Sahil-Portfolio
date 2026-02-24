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
                Hi, I'm Sahil Vashisht — a passionate Full Stack Developer and Software Engineer with expertise in Java, Spring Boot, ASP.NET Core, and React. Currently building enterprise-grade solutions at PODTECH, Bengaluru.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I specialize in crafting RESTful APIs, scalable microservices architectures, and cloud-native applications on AWS and Azure. With experience spanning enterprise companies, startups, and founding my own venture, I thrive on solving complex engineering challenges and delivering impactful results — 100% on time.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                Beyond code, I'm passionate about tech education — having taught DSA and OOP to undergraduate students at byteXL, mentoring the next generation of engineers.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                {[
                  { value: "3+", label: "Years Experience" },
                  { value: "35+", label: "APIs Deployed" },
                  { value: "100%", label: "On-time Delivery" },
                  { value: "7+", label: "Roles & Ventures" },
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

import { useRef, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";
import { FadeIn } from "../animations/FadeIn";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView || !ref.current) return;
    const ctrl = animate(0, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => { if (ref.current) ref.current.textContent = Math.floor(v) + suffix; },
    });
    return () => ctrl.stop();
  }, [inView, to, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { to: 3,   suffix: "+", label: "Years Experience" },
  { to: 35,  suffix: "+", label: "APIs Deployed" },
  { to: 100, suffix: "%", label: "On-time Delivery" },
  { to: 7,   suffix: "+", label: "Roles & Ventures" },
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">

          {/* Image col */}
          <FadeIn direction="right" className="w-full md:w-1/2">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-40 blur-xl rotate-2" />
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
                alt="Workspace"
                className="relative rounded-2xl border border-white/10 shadow-2xl transform transition-transform duration-500 group-hover:-translate-y-2 grayscale-[20%] group-hover:grayscale-0"
              />
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-5 -right-5 glass px-4 py-3 rounded-2xl border border-primary/30 shadow-xl"
              >
                <div className="text-2xl font-bold text-white">35<span className="text-primary">+</span></div>
                <div className="text-xs text-muted-foreground">APIs in Production</div>
              </motion.div>
            </div>
          </FadeIn>

          {/* Text col */}
          <FadeIn direction="left" className="w-full md:w-1/2">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold font-display">
                Engineering the <span className="text-gradient">Future</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Hi, I'm Sahil Vashisht — a passionate Full Stack Developer with expertise in Java, Spring Boot, ASP.NET Core, and React. Currently building enterprise-grade solutions at <span className="text-white font-medium">PODTECH, Bengaluru</span>.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I specialize in crafting RESTful APIs, scalable microservices, and cloud-native apps on AWS and Azure — delivering impactful results <span className="text-white font-medium">100% on time</span>.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                Beyond code, I teach DSA and OOP to undergrad students and founded my own startup. I believe great software is as clean as it is powerful.
              </p>

              {/* Animated stat cards */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {stats.map((s, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.2 }}
                    className="glass p-4 rounded-xl border border-white/5 hover:border-primary/30 transition-colors cursor-default"
                  >
                    <div className="text-3xl font-bold text-white mb-1">
                      <Counter to={s.to} suffix={s.suffix} />
                    </div>
                    <div className="text-sm text-primary font-medium">{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

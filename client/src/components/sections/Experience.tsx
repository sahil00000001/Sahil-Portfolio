import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences } from "@/data/portfolio";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden bg-black/20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-center">
          <SectionHeading
            kicker="Career"
            title="My"
            accent="Journey"
            subtitle="From early CRM work to enterprise products and AI automation."
          />
        </div>

        {/* Timeline: center line on md+, left line on mobile */}
        <div className="relative mt-4 border-l border-white/10 md:border-l-0 md:before:absolute md:before:inset-y-0 md:before:left-1/2 md:before:-ml-[1px] md:before:w-[2px] md:before:bg-gradient-to-b md:before:from-primary/50 md:before:via-secondary/50 md:before:to-transparent">
          <div className="space-y-12 md:space-y-20">
            {experiences.map((exp, idx) => {
              const flip = idx % 2 === 0;
              const highlight = exp.upcoming || exp.current;
              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: flip ? 24 : -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: EASE }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center w-full ${
                    flip ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Animated dot */}
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.4, ease: EASE, delay: 0.15 }}
                    className={`absolute left-[-6px] top-2 md:top-auto md:left-1/2 md:-ml-[9px] w-[18px] h-[18px] rounded-full bg-background border-4 z-10 ${
                      highlight
                        ? "border-primary shadow-[0_0_18px_rgba(168,85,247,0.7)] animate-soft-pulse"
                        : "border-primary/80 shadow-[0_0_15px_rgba(138,43,226,0.55)]"
                    }`}
                  />

                  {/* Card */}
                  <div className="w-full md:w-[46%] pl-8 md:pl-0">
                    <div
                      className={`glass rounded-3xl border overflow-hidden relative group transition-all duration-300 hover:-translate-y-1.5 ${
                        highlight
                          ? "border-primary/40 hover:border-primary/60 hover:shadow-[0_0_40px_-8px_rgba(168,85,247,0.45)]"
                          : "border-white/[0.06] hover:border-primary/40 hover:shadow-[0_0_40px_-8px_rgba(168,85,247,0.3)]"
                      }`}
                    >
                      {/* Accent top border */}
                      <div className={`h-[3px] w-full bg-gradient-to-r ${exp.accent}`} />

                      <div className="p-7 md:p-8">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                        <div className="relative z-10">
                          {/* Type chip */}
                          {exp.upcoming ? (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 border border-primary/40 text-xs font-mono font-semibold text-primary mb-3 animate-soft-pulse shadow-[0_0_20px_-4px_rgba(168,85,247,0.6)]">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                              {exp.type}
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-medium text-white/70 mb-3">
                              {exp.type}
                            </span>
                          )}

                          <span className="block text-primary font-mono text-sm font-semibold tracking-wider mb-2">
                            {exp.period}
                          </span>
                          <h3 className="text-lg md:text-xl font-bold text-white mb-1">{exp.role}</h3>
                          <h4 className="text-primary font-semibold mb-3">{exp.company}</h4>
                          <p className="text-muted-foreground/85 leading-relaxed text-sm">
                            {exp.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

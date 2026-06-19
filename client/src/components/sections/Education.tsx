import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";

export function Education() {
  return (
    <section id="education" className="py-24 md:py-32 relative overflow-hidden bg-black/10">
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 glow-orb orb-pulse opacity-30" />

      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading kicker="Education" title="Academic" accent="Background" />

        <div className="space-y-5">
          {education.map((item, i) => (
            <FadeIn key={item.institute} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 26 }}
                className="glass gradient-border shine rounded-2xl p-6 md:p-7 border border-white/[0.06] transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_40px_-8px_rgba(168,85,247,0.35)]"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">
                  {/* left: icon + details */}
                  <div className="flex items-start gap-4 min-w-0">
                    <span className="mt-0.5 shrink-0 grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-display font-bold text-lg md:text-xl text-white leading-snug">
                        {item.institute}
                      </h3>
                      <div className="text-primary font-medium mt-1">{item.qualification}</div>
                      {item.detail && (
                        <div className="text-sm text-muted-foreground/80 mt-1.5 leading-relaxed">
                          {item.detail}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* right: period + score */}
                  <div className="text-left sm:text-right shrink-0 sm:pl-4">
                    <div className="font-mono text-sm text-secondary whitespace-nowrap">
                      {item.period}
                    </div>
                    {item.score && (
                      <div className="text-sm text-muted-foreground mt-1.5">{item.score}</div>
                    )}
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

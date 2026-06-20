import { motion } from "framer-motion";
import { impactMetrics } from "@/data/portfolio";
import { Counter } from "@/components/ui/Counter";
import { DynamicIcon } from "@/components/ui/dynamic-icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

const EASE = [0.22, 1, 0.36, 1] as const;

const parent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const child = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: EASE } },
};

export function Metrics() {
  return (
    <section id="metrics" className="py-24 md:py-32 relative overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-line-grid opacity-[0.5] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,#000_30%,transparent_75%)]" />
      <div className="glow-orb orb-pulse w-[35vw] h-[35vw] bg-primary top-[-10%] left-[10%]" />
      <div className="glow-orb orb-pulse-slow w-[30vw] h-[30vw] bg-secondary bottom-[-10%] right-[10%]" style={{ animationDelay: "3s" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          kicker="By the numbers"
          title="Impact, In"
          accent="Numbers"
          subtitle="Receipts over adjectives — the measurable results behind the work."
        />

        <motion.div
          variants={parent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {impactMetrics.map((m) => (
            <motion.div
              key={m.label}
              variants={child}
              whileHover={{ y: -6 }}
              className="glass gradient-border shine group relative overflow-hidden rounded-3xl border border-white/[0.06] p-6 md:p-7 text-center transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_40px_-8px_rgba(168,85,247,0.35)]"
            >
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/15 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center gap-3">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 text-secondary group-hover:scale-110 transition-transform duration-300">
                  <DynamicIcon name={m.icon} className="w-5 h-5" />
                </span>

                <div className="text-4xl md:text-5xl font-bold font-display text-gradient leading-none">
                  <Counter to={m.value} prefix={m.prefix ?? ""} suffix={m.suffix} />
                </div>

                <div className="text-xs md:text-sm text-muted-foreground leading-snug">
                  {m.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

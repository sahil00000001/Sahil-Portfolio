import { motion } from "framer-motion";
import { BadgeCheck, GraduationCap } from "lucide-react";
import { aiVerified, aiKnowledge, aiKnowledgeNote } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DynamicIcon } from "@/components/ui/dynamic-icon";
import { FadeIn } from "@/components/animations/FadeIn";
import { TiltCard } from "@/components/effects/TiltCard";

const EASE = [0.22, 1, 0.36, 1] as const;

// Parent / child variants for staggered grid reveals.
const gridParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};
const gridChild = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

// Tasteful AI pipeline mini-diagram — the real outreach engine, end to end.
const PIPELINE = ["Scrape", "n8n", "LLM", "Personalize", "Send"] as const;

function PipelineStrip() {
  return (
    <FadeIn className="mb-16">
      <div className="glass rounded-3xl border border-white/[0.06] px-5 py-6 md:px-8 md:py-7 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-[0.18] pointer-events-none" />
        <div className="flex items-center gap-2 mb-5 relative z-10">
          <span className="w-2 h-2 rounded-full bg-secondary animate-soft-pulse" />
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
            Live pipeline
          </span>
        </div>

        {/* Horizontal scroll on small screens, masked edges */}
        <div className="overflow-x-auto mask-fade-x relative z-10 pb-1">
          <div className="flex items-center gap-3 md:gap-4 min-w-max">
            {PIPELINE.map((step, i) => (
              <div key={step} className="flex items-center gap-3 md:gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.1, ease: EASE }}
                  className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 font-mono text-xs md:text-sm font-medium text-white/85 whitespace-nowrap hover:border-primary/40 transition-colors duration-300"
                >
                  {step}
                </motion.div>

                {/* Animated dashed connector between nodes */}
                {i < PIPELINE.length - 1 && (
                  <svg
                    width="44"
                    height="10"
                    viewBox="0 0 44 10"
                    className="shrink-0"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient id={`pipe-${i}`} x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="hsl(280 100% 60%)" />
                        <stop offset="100%" stopColor="hsl(190 100% 50%)" />
                      </linearGradient>
                    </defs>
                    <line
                      x1="0"
                      y1="5"
                      x2="44"
                      y2="5"
                      stroke={`url(#pipe-${i})`}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray="6 6"
                      className="animate-dash-flow"
                      style={{ willChange: "stroke-dashoffset" }}
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export function AiAutomation() {
  return (
    <section id="ai" className="py-24 md:py-32 relative overflow-hidden bg-black/20">
      {/* Ambient glow orbs */}
      <div className="absolute -top-20 left-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          kicker="AI & Automation"
          title="Building with"
          accent="AI"
          subtitle="Real shipped automation — plus the architectures I've studied deeply."
        />

        <PipelineStrip />

        {/* ── Block A: Shipped & Verified ─────────────────────────────── */}
        <div className="mb-20">
          <FadeIn>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-[0_0_24px_-6px_rgba(168,85,247,0.6)]">
                <BadgeCheck className="w-5 h-5" />
              </span>
              <h3 className="text-2xl md:text-3xl font-bold font-display text-white">
                Shipped &amp; Verified
              </h3>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-mono font-semibold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-soft-pulse" />
                Verified
              </span>
            </div>
          </FadeIn>

          <motion.div
            variants={gridParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {aiVerified.map((item) => (
              <motion.div key={item.title} variants={gridChild} className="h-full">
                <TiltCard
                  intensity={6}
                  className="glass-strong h-full p-7 rounded-3xl border border-white/[0.06] gradient-border shine group relative overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_40px_-8px_rgba(168,85,247,0.35)]"
                >
                  <div className="absolute top-0 right-0 -mr-10 -mt-10 w-32 h-32 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <motion.div
                    whileHover={{ scale: 1.12, rotate: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 flex items-center justify-center mb-5 text-secondary group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-shadow duration-300 relative z-10"
                  >
                    <DynamicIcon name={item.icon} className="w-7 h-7" />
                  </motion.div>

                  <h4 className="text-lg font-bold mb-3 text-white relative z-10">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
                    {item.description}
                  </p>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Block B: Skills & Learning (visually lighter) ───────────── */}
        <div>
          <FadeIn>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-white/5 border border-white/10 text-muted-foreground">
                <GraduationCap className="w-5 h-5" />
              </span>
              <h3 className="text-2xl md:text-3xl font-bold font-display text-white/90">
                Skills &amp; Learning
              </h3>
            </div>
            <p className="inline-flex items-start gap-2 px-3.5 py-2 rounded-full bg-white/[0.03] border border-white/10 text-xs md:text-sm font-mono text-muted-foreground mb-8 max-w-2xl">
              <span className="text-secondary/80 mt-px">//</span>
              {aiKnowledgeNote}
            </p>
          </FadeIn>

          <motion.div
            variants={gridParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {aiKnowledge.map((item) => (
              <motion.div
                key={item.area}
                variants={gridChild}
                whileHover={{ y: -4 }}
                className="glass h-full p-5 rounded-2xl border border-white/[0.05] hover:border-secondary/30 transition-colors duration-300 group"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-secondary/80 group-hover:text-secondary transition-colors duration-300 shrink-0">
                    <DynamicIcon name={item.icon} className="w-4 h-4" />
                  </span>
                  <h4 className="text-sm font-semibold text-white/90 leading-tight">
                    {item.area}
                  </h4>
                </div>
                <p className="text-xs text-muted-foreground/80 leading-relaxed">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

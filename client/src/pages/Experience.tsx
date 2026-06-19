import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DynamicIcon } from "@/components/ui/dynamic-icon";
import { experiences, collaboration, profile } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const heroStats = [
  { value: "5", label: "roles & ventures" },
  { value: "~2 yrs", label: "professional experience" },
  { value: "UK ↔ Bangalore", label: "cross-timezone work" },
];

const gridParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};
const gridChild = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24">
        {/* ── Page Hero ───────────────────────────────────────────── */}
        <section className="py-20 relative overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.22, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] right-[-10%] w-[35vw] h-[35vw] bg-primary rounded-full blur-[120px] pointer-events-none"
          />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-6">
                <Briefcase className="w-4 h-4 text-primary" />
                <span className="text-sm font-mono font-medium text-white/80">Career timeline</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-[1.05]">
                My <span className="text-gradient">Journey</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                From early React/Redux CRM work to enterprise products and AI automation — an honest
                timeline of what I've shipped and where I'm headed next, built daily across the
                {" "}{profile.location.split(",")[0]} ↔ UK timezone gap.
              </p>
            </motion.div>

            {/* Honest stat row */}
            <motion.div
              variants={gridParent}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-4 mt-10"
            >
              {heroStats.map((s) => (
                <motion.div
                  key={s.label}
                  variants={gridChild}
                  className="glass px-6 py-4 rounded-2xl border border-white/[0.06]"
                >
                  <div className="text-xl font-bold text-white font-display">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Full Timeline ───────────────────────────────────────── */}
        <section className="py-16 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[22px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/60 via-secondary/40 to-transparent sm:left-6" />

              <div className="space-y-10">
                {experiences.map((exp, idx) => (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: EASE, delay: idx * 0.06 }}
                    className="relative pl-16 sm:pl-20"
                  >
                    {/* Timeline dot */}
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.4, ease: EASE, delay: idx * 0.06 + 0.15 }}
                      className={`absolute left-[14px] sm:left-[15px] top-9 w-[18px] h-[18px] rounded-full bg-background border-4 z-10 ${
                        exp.upcoming
                          ? "border-primary shadow-[0_0_18px_rgba(168,85,247,0.7)] animate-soft-pulse"
                          : "border-primary/80 shadow-[0_0_15px_rgba(138,43,226,0.55)]"
                      }`}
                    />

                    <div
                      className={`glass rounded-3xl border overflow-hidden relative group transition-all duration-300 hover:-translate-y-1.5 ${
                        exp.upcoming
                          ? "border-primary/40 hover:border-primary/60 hover:shadow-[0_0_44px_-8px_rgba(168,85,247,0.5)]"
                          : "border-white/[0.06] hover:border-primary/40 hover:shadow-[0_0_44px_-8px_rgba(168,85,247,0.3)]"
                      }`}
                    >
                      {/* "Next" ribbon for the upcoming role */}
                      {exp.upcoming && (
                        <div className="absolute top-4 right-[-34px] rotate-45 bg-gradient-to-r from-primary to-secondary text-[11px] font-mono font-bold text-white px-10 py-1 shadow-lg z-20">
                          NEXT
                        </div>
                      )}

                      {/* Accent top border */}
                      <div className={`h-[3px] w-full bg-gradient-to-r ${exp.accent}`} />

                      <div className="p-7 md:p-8">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                        <div className="relative z-10">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                            <div>
                              <div className="flex flex-wrap items-center gap-2 mb-2">
                                {exp.upcoming ? (
                                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 border border-primary/40 text-xs font-mono font-semibold text-primary animate-soft-pulse shadow-[0_0_20px_-4px_rgba(168,85,247,0.6)]">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                                    {exp.type}
                                  </span>
                                ) : (
                                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-medium text-white/70">
                                    {exp.type}
                                  </span>
                                )}
                                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                                  <MapPin className="w-3 h-3" />
                                  {exp.location}
                                </span>
                              </div>
                              <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                              <h4 className="text-primary font-semibold">{exp.company}</h4>
                            </div>
                            <div className="shrink-0">
                              <span className="font-mono text-sm text-muted-foreground bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                                {exp.period}
                              </span>
                            </div>
                          </div>

                          <p className="text-muted-foreground/85 text-sm leading-relaxed mb-5">
                            {exp.description}
                          </p>

                          <ul className="space-y-2 mb-6">
                            {exp.bullets.map((b, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-sm text-muted-foreground/90 leading-relaxed"
                              >
                                <span className="text-primary mt-0.5 shrink-0">▸</span>
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="flex flex-wrap gap-2">
                            {exp.tech.map((t) => (
                              <span
                                key={t}
                                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/80"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Collaboration & Leadership ──────────────────────────── */}
        <section className="py-20 relative overflow-hidden bg-black/20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14"
            >
              <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-primary mb-4">
                <span className="w-6 h-[2px] bg-gradient-to-r from-primary to-secondary inline-block" />
                Beyond the code
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-display leading-[1.1]">
                Collaboration &amp; <span className="text-gradient">Leadership</span>
              </h2>
              <p className="text-muted-foreground mt-4 leading-relaxed md:text-lg">
                How I work with people — across timezones, in documentation, and by lifting up the
                team around me.
              </p>
            </motion.div>

            <motion.div
              variants={gridParent}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {collaboration.map((item) => (
                <motion.div
                  key={item.title}
                  variants={gridChild}
                  whileHover={{ y: -6 }}
                  className="glass rounded-3xl border border-white/[0.06] p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_40px_-8px_rgba(168,85,247,0.3)] group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <DynamicIcon name={item.icon} className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground/85 leading-relaxed">{item.detail}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

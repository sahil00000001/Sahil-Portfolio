import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { projects, projectMetrics } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Counter } from "@/components/ui/Counter";
import { DynamicIcon } from "@/components/ui/dynamic-icon";

const EASE = [0.22, 1, 0.36, 1] as const;

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden bg-black/20">
      {/* ambient orbs */}
      <div className="absolute top-1/4 -left-32 w-[32rem] h-[32rem] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-32 w-[32rem] h-[32rem] rounded-full bg-secondary/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          kicker="Selected work"
          title="Featured"
          accent="Projects"
          subtitle="Enterprise platforms, automation pipelines, and a measurable AI win."
        />

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-7"
        >
          {featured.map((project) => {
            const metrics = projectMetrics[project.slug];

            return (
              <motion.article
                key={project.slug}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="group relative glass gradient-border shine rounded-3xl overflow-hidden border border-white/[0.06] transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_40px_-8px_rgba(168,85,247,0.35)] h-full flex flex-col"
              >
                {/* Gradient / icon cover */}
                <div className="relative h-44 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-90`} />
                  <div className="absolute inset-0 dot-grid opacity-[0.18] mix-blend-overlay" />
                  {/* glow icon */}
                  <motion.div
                    aria-hidden
                    className="absolute -bottom-6 -right-4 text-white/15"
                    initial={{ rotate: -8 }}
                    whileHover={{ rotate: 0, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 260, damping: 26 }}
                  >
                    <DynamicIcon name={project.icon} className="w-40 h-40" />
                  </motion.div>
                  {/* foreground icon + category */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div className="w-12 h-12 rounded-2xl glass-strong border border-white/20 flex items-center justify-center text-white shadow-lg">
                      <DynamicIcon name={project.icon} className="w-6 h-6" />
                    </div>
                    <span className="self-start px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 text-[11px] font-mono font-semibold uppercase tracking-[0.15em] text-white">
                      {project.category}
                    </span>
                  </div>
                  {/* fade into card body */}
                  <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-7 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-2 text-xs font-mono text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {project.org}
                  </div>
                  <h3 className="text-xl font-bold font-display text-white mb-1 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-primary/90 mb-3">{project.tagline}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Metric strip — numbers build trust */}
                  {metrics && metrics.length > 0 && (
                    <div className="flex items-stretch rounded-2xl glass-strong border border-white/10 divide-x divide-white/10 mb-5 overflow-hidden">
                      {metrics.map((m, i) => (
                        <div
                          key={i}
                          className="flex-1 px-3 py-3 text-center flex flex-col items-center justify-center"
                        >
                          <span className="text-xl md:text-2xl font-bold font-display text-gradient leading-none">
                            <Counter to={m.value} suffix={m.suffix ?? ""} />
                          </span>
                          <span className="mt-1.5 text-[10px] font-mono uppercase tracking-[0.08em] text-muted-foreground leading-tight">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Top 3 highlights */}
                  <ul className="space-y-2 mb-6">
                    {project.highlights.slice(0, 3).map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground/90">
                        <span className="text-primary mt-0.5 select-none">▸</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex justify-center mt-14"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 text-white transition-all duration-300 hover:scale-[1.04] active:scale-95 hover:shadow-[0_0_24px_rgba(138,43,226,0.3)]"
          >
            View all projects
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

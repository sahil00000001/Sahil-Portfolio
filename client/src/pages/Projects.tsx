import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { FolderGit2, Star } from "lucide-react";
import { projects, profile, projectMetrics } from "@/data/portfolio";
import { FadeIn } from "@/components/animations/FadeIn";
import { Counter } from "@/components/ui/Counter";
import { DynamicIcon } from "@/components/ui/dynamic-icon";
import type { Project, SubProject } from "@/data/portfolio";

const EASE = [0.22, 1, 0.36, 1] as const;

// ── Honest stats derived from the data ──────────────────────────────────────
const enterpriseCount = projects.filter((p) => p.category === "Enterprise").length;
const heroStats = [
  { value: projects.length, suffix: "", label: "Projects shipped" },
  { value: enterpriseCount, suffix: "", label: "Enterprise products" },
  { value: 4500, suffix: "+", label: "Contacts automated" },
] as const;

// ── Gradient / icon cover panel ──────────────────────────────────────────────
function ProjectCover({ project }: { project: Project }) {
  return (
    <div className="relative h-64 lg:h-full min-h-[20rem] overflow-hidden rounded-3xl">
      <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-90`} />
      <div className="absolute inset-0 dot-grid opacity-[0.18] mix-blend-overlay" />
      {/* large ghost icon */}
      <motion.div
        aria-hidden
        className="absolute -bottom-8 -right-6 text-white/15"
        whileHover={{ scale: 1.05, rotate: 0 }}
        initial={{ rotate: -6 }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
      >
        <DynamicIcon name={project.icon} className="w-56 h-56" />
      </motion.div>
      {/* foreground */}
      <div className="absolute inset-0 p-8 flex flex-col justify-between">
        <div className="w-14 h-14 rounded-2xl glass-strong border border-white/20 flex items-center justify-center text-white shadow-lg">
          <DynamicIcon name={project.icon} className="w-7 h-7" />
        </div>
        <div className="flex flex-col gap-3">
          <span className="self-start px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 text-[11px] font-mono font-semibold uppercase tracking-[0.15em] text-white">
            {project.category}
          </span>
          <span className="text-3xl font-bold font-display text-white drop-shadow-md">
            {project.name}
          </span>
        </div>
      </div>
    </div>
  );
}

// ── Per-project metric strip (numbers build trust) ───────────────────────────
function ProjectMetricStrip({ slug }: { slug: string }) {
  const metrics = projectMetrics[slug];
  if (!metrics || metrics.length === 0) return null;

  return (
    <div className="grid grid-flow-col auto-cols-fr rounded-2xl glass-strong border border-white/10 divide-x divide-white/10 mb-6 overflow-hidden">
      {metrics.map((m, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.05 + i * 0.08, ease: EASE }}
          className="px-4 py-4 text-center flex flex-col items-center justify-center"
        >
          <span className="text-2xl md:text-3xl font-bold font-display text-gradient leading-none">
            <Counter to={m.value} suffix={m.suffix ?? ""} />
          </span>
          <span className="mt-2 text-[11px] font-mono uppercase tracking-[0.1em] text-muted-foreground leading-tight">
            {m.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

// ── Nested sub-project block (the deep detail) ───────────────────────────────
function SubProjects({ subProjects }: { subProjects: SubProject[] }) {
  return (
    <div className="mt-8 pt-8 border-t border-white/10">
      <h4 className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-secondary mb-6">
        What I built
      </h4>
      {/* vertical connector line */}
      <div className="relative pl-8">
        <span className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-white/10 to-secondary/60" />
        <div className="space-y-4">
          {subProjects.map((sub, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
              className="relative"
            >
              {/* node dot */}
              <span
                className={`absolute -left-8 top-[0.55rem] w-[15px] h-[15px] rounded-full border-2 ${
                  sub.star
                    ? "bg-primary border-primary shadow-[0_0_12px_rgba(168,85,247,0.7)]"
                    : "bg-background border-white/30"
                }`}
              />
              <div className="glass rounded-2xl border border-white/[0.06] p-5 transition-colors duration-300 hover:border-primary/30">
                <div className="flex items-start gap-2 mb-3">
                  {sub.star && (
                    <Star className="w-4 h-4 text-primary fill-primary shrink-0 mt-0.5" />
                  )}
                  <h5 className="text-base font-semibold text-white leading-snug">
                    {sub.title}
                  </h5>
                </div>
                <ul className="space-y-2">
                  {sub.points.map((point, p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2 text-sm text-muted-foreground/90 leading-relaxed"
                    >
                      <span className="text-secondary mt-1 select-none text-[10px]">●</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── A single large alternating project row ───────────────────────────────────
function ProjectRow({ project, index }: { project: Project; index: number }) {
  const reversed = index % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: EASE }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch"
    >
      {/* Cover */}
      <div className={reversed ? "lg:order-2" : ""}>
        <ProjectCover project={project} />
      </div>

      {/* Content */}
      <div className={`flex flex-col justify-center ${reversed ? "lg:order-1" : ""}`}>
        <div className="flex items-center gap-3 mb-3 text-xs font-mono">
          <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 uppercase tracking-[0.15em] text-primary">
            {project.category}
          </span>
          <span className="text-muted-foreground">
            {project.org} · {project.role}
          </span>
        </div>

        <h2 className="text-3xl lg:text-4xl font-bold font-display text-white mb-2">
          {project.name}
        </h2>
        <p className="text-primary/90 text-lg mb-4">{project.tagline}</p>
        <p className="text-muted-foreground leading-relaxed mb-6">{project.summary}</p>

        {/* Metric strip — prominent stat cells near the top of the row */}
        <ProjectMetricStrip slug={project.slug} />

        {/* All highlights */}
        <ul className="space-y-2.5 mb-6">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground/90">
              <span className="text-primary mt-0.5 select-none">▸</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/80"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Sub-projects (deep detail) */}
        {project.subProjects && project.subProjects.length > 0 && (
          <SubProjects subProjects={project.subProjects} />
        )}
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24">
        {/* Page hero */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.25, 1], opacity: [0.1, 0.22, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            style={{ willChange: "transform, opacity" }}
            className="absolute bottom-[-20%] left-[-10%] w-[40vw] h-[40vw] bg-secondary rounded-full blur-[130px] pointer-events-none"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.2, 0.08] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            style={{ willChange: "transform, opacity" }}
            className="absolute top-[-15%] right-[-8%] w-[34vw] h-[34vw] bg-primary rounded-full blur-[130px] pointer-events-none"
          />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-6">
                <FolderGit2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-mono font-medium text-white/80">
                  {profile.experience} · {profile.location}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-[1.05]">
                All <span className="text-gradient">Projects</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                Production features on two enterprise products, end-to-end automation
                pipelines, a measurable AI-efficiency win, and a furniture e-commerce
                venture — the full picture, not just the highlights.
              </p>
            </FadeIn>

            {/* Honest stat row — animated counters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
              className="flex flex-wrap gap-4 mt-10"
            >
              {heroStats.map((s) => (
                <div
                  key={s.label}
                  className="glass px-6 py-4 rounded-2xl border border-white/[0.06] min-w-[9rem] transition-colors duration-300 hover:border-primary/30"
                >
                  <div className="text-3xl font-bold font-display text-gradient leading-none">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-xs text-muted-foreground mt-2 font-mono uppercase tracking-[0.1em]">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* All projects — large alternating rows */}
        <section className="py-12 md:py-20 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="space-y-20 md:space-y-28">
              {projects.map((project, idx) => (
                <ProjectRow key={project.slug} project={project} index={idx} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

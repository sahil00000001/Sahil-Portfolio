import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Counter } from "@/components/ui/Counter";
import { DynamicIcon } from "@/components/ui/dynamic-icon";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  Globe,
  GraduationCap,
  Award,
  BadgeCheck,
  Sparkles,
  BookOpen,
  type LucideIcon,
} from "lucide-react";
import {
  profile,
  stats,
  skillGroups,
  education,
  certifications,
  collaboration,
  aiVerified,
  aiKnowledge,
  aiKnowledgeNote,
  socials,
} from "@/data/portfolio";

const EASE = [0.22, 1, 0.36, 1] as const;

// Stagger container + item variants reused across grids.
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

// Map social icon names from the data module to lucide components.
const SOCIAL_ICONS: Record<string, LucideIcon> = {
  Github,
  Linkedin,
  Globe,
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24">
        {/* ───────────────────────── 1. Page Hero ───────────────────────── */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          {/* Animated glow orbs */}
          <motion.div
            aria-hidden
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.32, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{ willChange: "transform, opacity" }}
            className="absolute top-[-25%] right-[-10%] w-[42vw] h-[42vw] bg-primary rounded-full blur-[130px] pointer-events-none"
          />
          <motion.div
            aria-hidden
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.22, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            style={{ willChange: "transform, opacity" }}
            className="absolute bottom-[-30%] left-[-12%] w-[38vw] h-[38vw] bg-secondary rounded-full blur-[140px] pointer-events-none"
          />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              {/* Was → Now badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-7 max-w-full">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
                <span className="text-xs sm:text-sm font-mono text-white/80">
                  {profile.was}
                  <span className="text-primary mx-1.5">→</span>
                  {profile.now}
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-[1.05]">
                About <span className="text-gradient">Me</span>
              </h1>

              <p className="text-muted-foreground md:text-lg max-w-2xl mb-7 leading-relaxed">
                {profile.tagline}
              </p>

              {/* Contact line */}
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-muted-foreground text-sm">
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" /> {profile.location}
                </span>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary" /> {profile.email}
                </a>
                <a
                  href={`tel:${profile.phone}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary" /> {profile.phone}
                </a>
              </div>

              {/* Social pills */}
              <div className="flex flex-wrap gap-3 mt-6">
                {socials.map((s) => {
                  const Icon = SOCIAL_ICONS[s.icon] ?? Globe;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 hover:border-primary/50 text-sm transition-all duration-300 hover:scale-[1.04] active:scale-95"
                    >
                      <Icon className="w-4 h-4 text-primary" />
                      <span className="text-white/80 group-hover:text-white transition-colors">
                        {s.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ───────────────────────── 2. Who I Am ───────────────────────── */}
        <section className="py-20 md:py-24 bg-black/20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="text-3xl md:text-5xl font-bold font-display mb-12 leading-[1.1]"
            >
              Who I <span className="text-gradient">Am</span>
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-start">
              {/* Bio paragraphs */}
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="lg:col-span-3 space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed"
              >
                {profile.bioExtended.map((para, i) => (
                  <motion.p key={i} variants={item}>
                    {para}
                  </motion.p>
                ))}
              </motion.div>

              {/* 2x2 stat grid */}
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="lg:col-span-2 grid grid-cols-2 gap-4"
              >
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    variants={item}
                    whileHover={{ y: -6 }}
                    className="glass rounded-2xl border border-white/[0.06] p-6 text-center transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_40px_-8px_rgba(168,85,247,0.35)] gradient-border"
                  >
                    <div className="text-3xl md:text-4xl font-bold font-display text-white mb-2">
                      <Counter to={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs text-primary font-mono leading-snug">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ───────────────────────── 3. Career Snapshot ───────────────────────── */}
        <section className="py-20 md:py-24 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="text-3xl md:text-5xl font-bold font-display mb-12 leading-[1.1]"
            >
              Career <span className="text-gradient">Snapshot</span>
            </motion.h2>

            <motion.ol
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="relative border-l border-white/10 pl-8 space-y-8"
            >
              {[
                { dot: "bg-primary", label: "Now", text: profile.now },
                { dot: "bg-secondary", label: "Previously", text: profile.was },
                { dot: "bg-fuchsia-400", label: "Earlier", text: profile.earlier },
                { dot: "bg-amber-400", label: "Education", text: profile.education },
              ].map((row) => (
                <motion.li key={row.label} variants={item} className="relative">
                  <span
                    className={`absolute -left-[2.6rem] top-1 w-3.5 h-3.5 rounded-full ${row.dot} ring-4 ring-background`}
                  />
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-1">
                    {row.label}
                  </div>
                  <p className="text-white/90 leading-relaxed">{row.text}</p>
                </motion.li>
              ))}
            </motion.ol>
          </div>
        </section>

        {/* ───────────────────────── 4. Technical Skills ───────────────────────── */}
        <section className="py-20 md:py-24 bg-black/20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="text-3xl md:text-5xl font-bold font-display mb-12 leading-[1.1]"
            >
              Technical <span className="text-gradient">Skills</span>
            </motion.h2>

            <div className="space-y-10">
              {skillGroups.map((group, idx) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: idx * 0.05, ease: EASE }}
                >
                  <h3 className="flex items-center gap-2 text-sm font-mono font-semibold uppercase tracking-[0.2em] text-primary mb-4">
                    <DynamicIcon name={group.icon} className="w-4 h-4" />
                    {group.category}
                  </h3>
                  <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-40px" }}
                    className="flex flex-wrap gap-2.5"
                  >
                    {group.skills.map((skill) => (
                      <motion.span
                        key={skill.name}
                        variants={item}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/80 hover:border-primary/40 hover:text-white hover:bg-white/[0.08] transition-colors"
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────────────── 5. AI & Automation ───────────────────────── */}
        <section className="py-20 md:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="mb-12"
            >
              <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-primary mb-4">
                <span className="w-6 h-[2px] bg-gradient-to-r from-primary to-secondary inline-block" />
                AI / Automation
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-display leading-[1.1]">
                AI &amp; <span className="text-gradient">Automation</span>
              </h2>
            </motion.div>

            {/* Block A — Shipped & Verified */}
            <div className="mb-16">
              <div className="flex items-center gap-2 mb-6">
                <BadgeCheck className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-display font-semibold text-white">
                  Shipped &amp; Verified
                </h3>
                <span className="ml-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-300">
                  real work
                </span>
              </div>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {aiVerified.map((v) => (
                  <motion.div
                    key={v.title}
                    variants={item}
                    whileHover={{ y: -6 }}
                    className="group glass rounded-2xl border border-white/[0.06] p-6 transition-all duration-300 hover:border-emerald-400/40 hover:shadow-[0_0_40px_-8px_rgba(52,211,153,0.3)] gradient-border"
                  >
                    <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 text-emerald-300">
                      <DynamicIcon name={v.icon} className="w-5 h-5" />
                    </div>
                    <h4 className="font-semibold text-white mb-2 leading-snug">
                      {v.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {v.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Block B — Skills & Learning */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-5 h-5 text-secondary" />
                <h3 className="text-lg font-display font-semibold text-white">
                  Skills &amp; Learning
                </h3>
                <span className="ml-1 px-2.5 py-0.5 rounded-full bg-secondary/10 border border-secondary/30 text-[11px] font-mono text-secondary">
                  studied
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-6 max-w-2xl leading-relaxed">
                {aiKnowledgeNote}
              </p>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
              >
                {aiKnowledge.map((k) => (
                  <motion.div
                    key={k.area}
                    variants={item}
                    className="glass rounded-xl border border-white/[0.06] p-4 transition-colors duration-300 hover:border-secondary/40"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <DynamicIcon name={k.icon} className="w-4 h-4 text-secondary" />
                      <span className="text-sm font-medium text-white">{k.area}</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {k.detail}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ───────────────────────── 6. Education ───────────────────────── */}
        <section className="py-20 md:py-24 bg-black/20 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="text-3xl md:text-5xl font-bold font-display mb-12 flex items-center gap-3 leading-[1.1]"
            >
              <GraduationCap className="text-primary w-9 h-9 shrink-0" />
              Education
            </motion.h2>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="space-y-6"
            >
              {education.map((edu) => (
                <motion.div
                  key={edu.institute}
                  variants={item}
                  whileHover={{ y: -4 }}
                  className="glass rounded-2xl border border-white/[0.06] p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_40px_-8px_rgba(168,85,247,0.3)] gradient-border"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                    <div className="flex gap-4">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                          {edu.institute}
                        </h3>
                        <p className="text-primary font-medium mt-1">
                          {edu.qualification}
                        </p>
                        {edu.detail && (
                          <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                            {edu.detail}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="sm:text-right shrink-0 pl-15 sm:pl-0">
                      <div className="font-mono text-sm text-primary">{edu.period}</div>
                      {edu.score && (
                        <div className="text-muted-foreground text-sm mt-1">
                          <span className="text-white font-semibold">{edu.score}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ───────────────────────── 7. Certifications ───────────────────────── */}
        <section className="py-20 md:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="text-3xl md:text-5xl font-bold font-display mb-12 flex items-center gap-3 leading-[1.1]"
            >
              <Award className="text-primary w-9 h-9 shrink-0" />
              Certifications
            </motion.h2>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {certifications.map((cert) => (
                <motion.div
                  key={cert.title}
                  variants={item}
                  whileHover={{ y: -5 }}
                  className="group glass rounded-2xl border border-white/[0.06] p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_40px_-8px_rgba(168,85,247,0.3)] gradient-border flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
                    {cert.inProgress ? (
                      <Sparkles className="w-5 h-5" />
                    ) : (
                      <BadgeCheck className="w-5 h-5" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] text-primary font-mono uppercase tracking-wider">
                      {cert.issuer}
                    </div>
                    <div className="font-semibold text-white mt-1 leading-snug">
                      {cert.title}
                    </div>
                    {cert.inProgress && (
                      <span className="inline-flex items-center gap-1 mt-2 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[11px] font-mono text-amber-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                        In Progress
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ───────────────────────── 8. Collaboration & Leadership ───────────────────────── */}
        <section className="py-20 md:py-24 bg-black/20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="text-3xl md:text-5xl font-bold font-display mb-12 leading-[1.1]"
            >
              Collaboration &amp; <span className="text-gradient">Leadership</span>
            </motion.h2>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {collaboration.map((c) => (
                <motion.div
                  key={c.title}
                  variants={item}
                  whileHover={{ y: -6 }}
                  className="group glass rounded-2xl border border-white/[0.06] p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_40px_-8px_rgba(168,85,247,0.35)] gradient-border flex gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary group-hover:scale-110 transition-transform duration-300">
                    <DynamicIcon name={c.icon} className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1.5 leading-snug">
                      {c.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {c.detail}
                    </p>
                  </div>
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

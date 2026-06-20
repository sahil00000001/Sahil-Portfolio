import { motion } from "framer-motion";
import { MapPin, Sparkles } from "lucide-react";
import { profile, stats } from "@/data/portfolio";
import { Counter } from "@/components/ui/Counter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";

const EASE = [0.22, 1, 0.36, 1] as const;

const timeline = [
  { label: profile.now, dot: "bg-primary", ring: "ring-primary/40" },
  { label: profile.was, dot: "bg-secondary", ring: "ring-secondary/40" },
  { label: profile.earlier, dot: "bg-muted-foreground", ring: "ring-white/10" },
];

const gridParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};
const gridChild = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 glow-orb orb-pulse opacity-40" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ───────────── LEFT: profile card ───────────── */}
          <FadeIn direction="right" className="w-full">
            <div className="relative group">
              {/* gradient halo behind card */}
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/40 via-transparent to-secondary/40 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />

              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 26 }}
                className="relative glass-strong gradient-border rounded-[2rem] p-8 md:p-10 border border-white/10"
              >
                {/* monogram */}
                <div className="flex items-center gap-5">
                  <div className="relative shrink-0">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[0_0_40px_-8px_rgba(168,85,247,0.5)]">
                      <span className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
                        SV
                      </span>
                    </div>
                    <span className="absolute inset-0 rounded-full ring-1 ring-white/20" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display font-bold text-2xl md:text-3xl text-white leading-tight">
                      {profile.fullName}
                    </h3>
                    <p className="text-sm md:text-base text-secondary font-medium mt-1">
                      {profile.title}
                    </p>
                    <p className="flex items-center gap-1.5 text-sm text-muted-foreground mt-2">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      {profile.location}
                    </p>
                  </div>
                </div>

                {/* divider */}
                <div className="my-7 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                {/* mini-timeline */}
                <ul className="space-y-4">
                  {timeline.map((row, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: EASE }}
                      className="flex items-start gap-3"
                    >
                      <span className={`mt-1.5 w-2.5 h-2.5 shrink-0 rounded-full ${row.dot} ring-4 ${row.ring}`} />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {row.label}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ willChange: "transform" }}
                className="absolute -bottom-5 -right-3 md:-right-6 glass-strong px-4 py-3 rounded-2xl border border-primary/30 shadow-[0_0_40px_-8px_rgba(168,85,247,0.4)]"
              >
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm font-semibold text-white leading-tight">
                      Currently @ PodTech
                    </div>
                    <div className="text-xs font-mono text-muted-foreground">Bangalore · UK startup</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </FadeIn>

          {/* ───────────── RIGHT: heading + bio + stats ───────────── */}
          <div className="w-full">
            <SectionHeading
              align="left"
              kicker="About me"
              title="Full-stack, with an"
              accent="AI edge"
              className="mb-8"
            />

            <FadeIn direction="left" delay={0.1} className="space-y-5">
              {profile.bioExtended.map((para, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed md:text-lg">
                  {para}
                </p>
              ))}
            </FadeIn>

            {/* 2x2 stat grid */}
            <motion.div
              variants={gridParent}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-2 gap-4 pt-9"
            >
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  variants={gridChild}
                  whileHover={{ y: -6 }}
                  className="glass gradient-border rounded-2xl p-5 border border-white/[0.06] transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_40px_-8px_rgba(168,85,247,0.35)]"
                >
                  <div className="font-display text-3xl md:text-4xl font-bold text-gradient">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-sm text-muted-foreground mt-1.5 leading-snug">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

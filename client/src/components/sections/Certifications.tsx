import { motion } from "framer-motion";
import { BadgeCheck, Loader2 } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Counter } from "@/components/ui/Counter";
import { TiltCard } from "@/components/effects/TiltCard";

const EASE = [0.22, 1, 0.36, 1] as const;

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.94 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: EASE } },
};

/** Derive a compact 1–3 letter "seal" mark from an issuer name. */
function sealMark(issuer: string): string {
  const known: Record<string, string> = {
    IBM: "IBM",
    AWS: "AWS",
    Microsoft: "MS",
    Cisco: "CS",
    Camunda: "CA",
    Google: "G",
    NVIDIA: "NV",
    Professional: "6σ",
    "Tata / Forage": "TF",
  };
  if (known[issuer]) return known[issuer];
  // Fallback: initials from up to two words.
  const words = issuer.replace(/[^A-Za-z ]/g, "").trim().split(/\s+/);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

export function Certifications() {
  const total = certifications.length;
  const issuerCount = new Set(certifications.map((c) => c.issuer)).size;
  const inProgressCount = certifications.filter((c) => c.inProgress).length;

  const stats = [
    { to: 8, suffix: "+", label: "Certifications" },
    { to: issuerCount, suffix: "", label: "Issuing bodies" },
    { to: inProgressCount, suffix: " in", label: "Progress now" },
  ];

  return (
    <section
      id="certifications"
      className="py-24 md:py-32 relative overflow-hidden bg-black/20"
    >
      {/* Ambient grid + glow backdrop */}
      <div className="absolute inset-0 bg-line-grid opacity-40 pointer-events-none" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] glow-orb orb-pulse pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          kicker="Credentials"
          title="Certified &"
          accent="Always Learning"
          subtitle="Eight-plus credentials across GenAI, cloud, process automation, Linux and cybersecurity."
        />

        {/* ── Stat strip ─────────────────────────────────────────────── */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto mb-16"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={cardVariants}
              className="glass-strong gradient-border rounded-2xl px-3 py-5 sm:px-6 sm:py-6 text-center border border-white/[0.06] relative"
            >
              <div className="text-3xl sm:text-4xl font-bold font-display text-gradient leading-none">
                <Counter to={s.to} suffix={s.suffix} />
              </div>
              <div className="text-[0.65rem] sm:text-xs font-mono uppercase tracking-wider text-muted-foreground mt-2">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Wall of credential seals ───────────────────────────────── */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {certifications.map((cert) => {
            const mark = sealMark(cert.issuer);
            const inProgress = !!cert.inProgress;

            return (
              <motion.div key={`${cert.issuer}-${cert.title}`} variants={cardVariants}>
                <TiltCard intensity={6} className="h-full">
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 260, damping: 26 }}
                    className={`group relative h-full overflow-hidden rounded-3xl glass-strong shine gradient-border p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_0_44px_-8px_rgba(168,85,247,0.4)] ${
                      inProgress
                        ? "border border-dashed border-amber-400/30 hover:border-amber-400/60"
                        : "border border-white/[0.06] hover:border-primary/40"
                    }`}
                  >
                    {/* hover wash */}
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                        inProgress
                          ? "bg-gradient-to-br from-amber-400/10 to-transparent"
                          : "bg-gradient-to-br from-primary/10 to-transparent"
                      }`}
                    />

                    {/* ── Seal ─────────────────────────────────────────── */}
                    <div className="relative z-10 mb-5 grid place-items-center w-24 h-24">
                      {/* Rotating conic gradient ring */}
                      <div
                        className={`absolute inset-0 rounded-full animate-conic ${
                          inProgress
                            ? "[background:conic-gradient(from_0deg,theme(colors.amber.400),theme(colors.amber.400/0.1),theme(colors.amber.300),theme(colors.amber.400/0.1),theme(colors.amber.400))]"
                            : "[background:conic-gradient(from_0deg,hsl(var(--primary)),hsl(var(--secondary)/0.15),hsl(var(--secondary)),hsl(var(--primary)/0.15),hsl(var(--primary)))]"
                        }`}
                        style={{ willChange: "transform" }}
                      />
                      {/* Inner mask so only a ring shows */}
                      <div className="absolute inset-[3px] rounded-full bg-background/95" />
                      {/* Seal face */}
                      <div className="relative z-10 grid place-items-center w-[4.5rem] h-[4.5rem] rounded-full glass border border-white/10">
                        <span
                          className={`font-display font-bold tracking-tight ${
                            mark.length >= 3 ? "text-lg" : "text-2xl"
                          } ${inProgress ? "text-amber-300" : "text-gradient"}`}
                        >
                          {mark}
                        </span>
                      </div>
                      {/* Status pip on the seal */}
                      <span
                        className={`absolute -bottom-1 -right-1 z-20 grid place-items-center w-7 h-7 rounded-full border border-white/10 ${
                          inProgress ? "bg-amber-400/15" : "bg-secondary/15"
                        }`}
                      >
                        {inProgress ? (
                          <Loader2 className="w-4 h-4 text-amber-300 animate-spin" />
                        ) : (
                          <BadgeCheck className="w-4 h-4 text-secondary" />
                        )}
                      </span>
                    </div>

                    {/* ── Issuer + title ───────────────────────────────── */}
                    <div className="relative z-10 flex-1 flex flex-col items-center">
                      <div className="text-xs font-mono uppercase tracking-wider text-primary">
                        {cert.issuer}
                      </div>
                      <h3 className="font-semibold text-white/90 mt-1.5 leading-snug text-balance">
                        {cert.title}
                      </h3>
                    </div>

                    {/* ── Footer: verified / in-progress ───────────────── */}
                    <div className="relative z-10 mt-5">
                      {inProgress ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/40 text-amber-300 text-[0.7rem] font-mono font-medium animate-soft-pulse">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                          In Progress
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-[0.7rem] font-mono font-medium">
                          <BadgeCheck className="w-3.5 h-3.5" />
                          Verified
                        </span>
                      )}
                    </div>
                  </motion.div>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

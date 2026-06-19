import { motion } from "framer-motion";
import { Award, BadgeCheck } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";

const EASE = [0.22, 1, 0.36, 1] as const;

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: EASE } },
};

export function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          kicker="Credentials"
          title="Certifications"
          accent="(8+)"
          subtitle="Across GenAI, cloud, process automation, Linux and cybersecurity."
        />

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {certifications.map((cert) => {
            const AccentIcon = cert.inProgress ? BadgeCheck : Award;
            return (
              <motion.div
                key={`${cert.issuer}-${cert.title}`}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 26 }}
                className="group gradient-border glass rounded-2xl p-6 flex items-start gap-4 border border-white/[0.06] hover:border-primary/40 relative overflow-hidden transition-colors duration-300 hover:shadow-[0_0_40px_-8px_rgba(168,85,247,0.35)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <span className="flex items-center justify-center w-11 h-11 rounded-xl glass border border-white/10 shrink-0 relative z-10">
                  <AccentIcon className="w-5 h-5 text-primary group-hover:text-secondary transition-colors duration-300" />
                </span>

                <div className="relative z-10 min-w-0">
                  <div className="text-xs font-mono uppercase tracking-wider text-primary">
                    {cert.issuer}
                  </div>
                  <h3 className="font-semibold text-white/90 mt-1 leading-snug">
                    {cert.title}
                  </h3>
                  {cert.inProgress && (
                    <span className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono font-medium animate-soft-pulse">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      In Progress
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

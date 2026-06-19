import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { DynamicIcon } from "../ui/dynamic-icon";
import { TiltCard } from "../effects/TiltCard";
import { expertise } from "@/data/portfolio";

const EASE = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export function Services() {
  return (
    <section
      id="expertise"
      className="py-24 md:py-32 relative overflow-hidden bg-black/20"
    >
      {/* ambient glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[60vw] h-[40vw] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          kicker="What I do"
          title="Where I Add"
          accent="Value"
          subtitle="Honest, hands-on capabilities — each backed by shipped work."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {expertise.map((item) => (
            <motion.div key={item.title} variants={itemVariants} className="h-full">
              <TiltCard className="glass gradient-border shine group relative h-full overflow-hidden rounded-3xl border border-white/[0.06] p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_40px_-8px_rgba(168,85,247,0.35)]">
                {/* hover corner glow */}
                <div className="absolute top-0 right-0 -mr-10 -mt-10 h-32 w-32 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <motion.div
                  whileHover={{ scale: 1.12, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-primary transition-shadow duration-300 group-hover:shadow-[0_0_22px_rgba(168,85,247,0.4)]"
                >
                  <DynamicIcon name={item.icon} className="h-7 w-7" />
                </motion.div>

                <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">
                  {item.tagline}
                </p>
                <h3 className="mb-3 text-xl font-bold font-display text-white">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

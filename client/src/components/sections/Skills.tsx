import { motion } from "framer-motion";
import { skillGroups } from "@/data/portfolio";
import { DynamicIcon } from "@/components/ui/dynamic-icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";

const EASE = [0.22, 1, 0.36, 1] as const;

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
};

const tileVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          kicker="Skills"
          title="Technical"
          accent="Arsenal"
          subtitle="The full matrix — frontend, backend, AI/automation, data, and DevOps."
        />

        <div className="space-y-16">
          {skillGroups.map((group, idx) => (
            <FadeIn key={group.category} delay={idx * 0.04}>
              {/* Group header row */}
              <div className="flex items-center gap-4 mb-8">
                <span className="flex items-center justify-center w-11 h-11 rounded-xl glass border border-white/10 shrink-0">
                  <DynamicIcon name={group.icon} className="w-5 h-5 text-primary" />
                </span>
                <h3 className="text-lg md:text-xl font-semibold font-display text-white/90 whitespace-nowrap">
                  {group.category}
                </h3>
                <span className="h-px flex-1 bg-gradient-to-r from-primary/40 via-secondary/20 to-transparent" />
              </div>

              {/* Skill tiles */}
              <motion.div
                variants={gridVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
              >
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={tileVariants}
                    whileHover={{ y: -6, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 260, damping: 26 }}
                    className="group gradient-border glass rounded-2xl p-5 flex flex-col items-center justify-center text-center gap-3 border border-white/[0.06] hover:border-primary/40 relative overflow-hidden cursor-default transition-colors duration-300 hover:shadow-[0_0_40px_-8px_rgba(168,85,247,0.35)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <DynamicIcon
                      name={skill.icon}
                      className="w-9 h-9 text-muted-foreground group-hover:text-primary transition-colors duration-300 relative z-10"
                    />
                    <span className="text-sm font-medium text-white/85 leading-snug relative z-10">
                      {skill.name}
                    </span>

                    {/* Proficiency bar — animates in on hover */}
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/[0.04] z-10">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-secondary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

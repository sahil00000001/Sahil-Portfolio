import { motion } from "framer-motion";
import { stories } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DynamicIcon } from "@/components/ui/dynamic-icon";

const EASE = [0.22, 1, 0.36, 1] as const;

const gridParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const gridChild = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export function Stories() {
  return (
    <section id="stories" className="py-24 md:py-32 relative overflow-hidden">
      {/* Ambient backdrop */}
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-primary/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-secondary/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          kicker="Case studies"
          title="Problems I've"
          accent="Solved"
          subtitle="Six real debugging & engineering stories."
        />

        <motion.div
          variants={gridParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {stories.map((story) => (
            <motion.article
              key={story.title}
              variants={gridChild}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              className="glass-strong h-full p-7 rounded-3xl border border-white/[0.06] gradient-border shine group relative overflow-hidden flex flex-col transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_44px_-10px_rgba(168,85,247,0.4)]"
            >
              {/* Accent glow that warms on hover, tinted by the story's gradient */}
              <div
                className={`absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-br ${story.accent} pointer-events-none`}
              />

              {/* Gradient icon badge */}
              <motion.div
                whileHover={{ scale: 1.12, rotate: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${story.accent} flex items-center justify-center mb-5 text-white shadow-lg relative z-10`}
              >
                <DynamicIcon name={story.icon} className="w-7 h-7" />
              </motion.div>

              <h3 className="text-xl font-bold font-display mb-3 text-white relative z-10">
                {story.title}
              </h3>

              <p className="text-sm font-semibold text-white/90 mb-3 relative z-10 leading-snug">
                {story.problem}
              </p>

              <p className="text-sm text-muted-foreground leading-relaxed relative z-10 flex-grow">
                {story.body}
              </p>

              {story.lesson && (
                <div className="mt-6 pt-4 border-t border-white/10 relative z-10">
                  <p className="font-mono text-xs leading-relaxed">
                    <span className="text-secondary/80">// lesson: </span>
                    <span className="text-white/70">{story.lesson}</span>
                  </p>
                </div>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

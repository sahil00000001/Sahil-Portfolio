import { motion } from "framer-motion";

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  accent?: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

const EASE = [0.22, 1, 0.36, 1] as const;

/** Consistent section heading: optional kicker, title with a gradient accent word, subtitle. */
export function SectionHeading({
  kicker,
  title,
  accent,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClasses = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: EASE }}
      className={`flex flex-col ${alignClasses} max-w-2xl ${align === "center" ? "" : ""} mb-14 ${className}`}
    >
      {kicker && (
        <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-primary mb-4">
          <span className="w-6 h-[2px] bg-gradient-to-r from-primary to-secondary inline-block" />
          {kicker}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold font-display leading-[1.1]">
        {title} {accent && <span className="text-gradient">{accent}</span>}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground mt-4 leading-relaxed md:text-lg">{subtitle}</p>
      )}
    </motion.div>
  );
}

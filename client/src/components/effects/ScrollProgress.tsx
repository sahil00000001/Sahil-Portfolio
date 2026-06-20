import { motion, useScroll, useSpring } from "framer-motion";

/** Thin gradient progress bar pinned to the top, tracking page scroll. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-primary via-fuchsia-500 to-secondary shadow-[0_0_12px_rgba(168,85,247,0.6)]"
    />
  );
}

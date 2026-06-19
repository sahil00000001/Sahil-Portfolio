import { useRef, useEffect, useState } from "react";
import { useInView, animate } from "framer-motion";

interface CounterProps {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

/** Animated count-up that fires once when scrolled into view. */
export function Counter({ to, suffix = "", prefix = "", duration = 1.8, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!inView || !ref.current || done) return;
    const node = ref.current;
    const ctrl = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        node.textContent = `${prefix}${Math.round(v).toLocaleString()}${suffix}`;
      },
      onComplete: () => setDone(true),
    });
    return () => ctrl.stop();
  }, [inView, to, suffix, prefix, duration, done]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}

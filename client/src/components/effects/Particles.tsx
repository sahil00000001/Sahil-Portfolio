// Deterministic floating particle field — no Math.random (stable across renders)
const PARTICLES = Array.from({ length: 60 }, (_, i) => ({
  left: `${(i * 17 + 3) % 100}%`,
  top: `${(i * 13 + 7) % 100}%`,
  size: (i % 3) + 1,                            // 1, 2 or 3 px
  dur: `${5 + (i % 9)}s`,                        // 5–13 s
  delay: `-${((i * 13) % 70) / 10}s`,           // pre-started: 0 to -7 s
  opacity: 0.1 + (i % 5) * 0.06,               // 0.10 – 0.34
  color:
    i % 3 === 0
      ? "hsl(280 100% 60%)"   // primary purple
      : i % 3 === 1
      ? "hsl(190 100% 50%)"   // secondary cyan
      : "rgba(255,255,255,0.8)",
}));

export function Particles() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: p.color,
            opacity: p.opacity,
            animationName: "particle-drift",
            animationDuration: p.dur,
            animationDelay: p.delay,
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
}

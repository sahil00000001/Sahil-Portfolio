import { useEffect, useRef } from "react";

/**
 * A soft radial spotlight that eases toward the cursor — adds a modern,
 * "alive" feel site-wide. Only runs on fine pointers (mouse) and when
 * reduced-motion is not requested.
 */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    const el = ref.current;
    if (!el) return;

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const cur = { ...pos };
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      el.style.opacity = "1";
    };

    const loop = () => {
      cur.x += (pos.x - cur.x) * 0.15;
      cur.y += (pos.y - cur.y) * 0.15;
      el.style.transform = `translate3d(${cur.x}px, ${cur.y}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[40] opacity-0 transition-opacity duration-700 will-change-transform"
      style={{ marginLeft: -300, marginTop: -300 }}
    >
      <div
        className="w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(280 100% 60% / 0.10) 0%, hsl(190 100% 50% / 0.05) 35%, transparent 65%)",
        }}
      />
    </div>
  );
}

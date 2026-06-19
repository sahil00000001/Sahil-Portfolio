import { marqueeItems } from "@/data/portfolio";

// Doubled for seamless loop: translateX(-50%) moves exactly one full set width
const doubled = [...marqueeItems, ...marqueeItems];

export function Marquee() {
  return (
    <div className="py-5 relative overflow-hidden border-y border-white/[0.05] bg-background/40 backdrop-blur-sm">
      {/* Fade edges so items disappear cleanly */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee" style={{ width: "max-content", willChange: "transform" }}>
        {doubled.map((item, i) => (
          <div
            key={i}
            className="mx-3 px-4 py-2 flex items-center gap-2 glass rounded-full border border-white/[0.08] shrink-0 hover:border-primary/30 transition-colors duration-300 cursor-default"
          >
            <span className={`w-1.5 h-1.5 rounded-full ${item.dot} shrink-0`} />
            <span
              className={`text-sm font-semibold font-mono ${item.color} whitespace-nowrap select-none`}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

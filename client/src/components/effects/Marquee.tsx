const items = [
  { label: "React",           color: "text-cyan-400",   dot: "bg-cyan-400" },
  { label: "TypeScript",      color: "text-blue-400",   dot: "bg-blue-400" },
  { label: "Java",            color: "text-orange-400", dot: "bg-orange-400" },
  { label: "Spring Boot",     color: "text-green-400",  dot: "bg-green-400" },
  { label: "ASP.NET Core",    color: "text-purple-400", dot: "bg-purple-400" },
  { label: "AWS",             color: "text-yellow-400", dot: "bg-yellow-400" },
  { label: "Azure",           color: "text-sky-300",    dot: "bg-sky-300" },
  { label: "MySQL",           color: "text-cyan-300",   dot: "bg-cyan-300" },
  { label: "PostgreSQL",      color: "text-indigo-400", dot: "bg-indigo-400" },
  { label: "MongoDB",         color: "text-green-300",  dot: "bg-green-300" },
  { label: "Docker",          color: "text-sky-400",    dot: "bg-sky-400" },
  { label: "Redis",           color: "text-red-400",    dot: "bg-red-400" },
  { label: "Apache Kafka",    color: "text-white/70",   dot: "bg-white/40" },
  { label: "Node.js",         color: "text-green-500",  dot: "bg-green-500" },
  { label: "Redux",           color: "text-purple-300", dot: "bg-purple-300" },
  { label: "REST APIs",       color: "text-primary",    dot: "bg-primary" },
  { label: "Microservices",   color: "text-secondary",  dot: "bg-secondary" },
  { label: "Git",             color: "text-orange-300", dot: "bg-orange-300" },
  { label: "Spring Security", color: "text-green-200",  dot: "bg-green-200" },
  { label: "SQL Server",      color: "text-red-300",    dot: "bg-red-300" },
];

// Doubled for seamless loop: translateX(-50%) moves exactly one full set width
const doubled = [...items, ...items];

export function Marquee() {
  return (
    <div className="py-5 relative overflow-hidden border-y border-white/[0.05] bg-background/40 backdrop-blur-sm">
      {/* Fade edges so items disappear cleanly */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee" style={{ width: "max-content" }}>
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

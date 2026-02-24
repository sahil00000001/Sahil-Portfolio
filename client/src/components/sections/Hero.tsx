import { useState, useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import { Particles } from "../effects/Particles";

// ── Typewriter roles ──────────────────────────────────────────────
const roles = [
  "Full Stack Developer",
  "Cloud Engineer",
  "Backend Engineer",
  "Frontend Engineer",
];

// ── Floating tech badges ─────────────────────────────────────────
const floatingTags = [
  { label: "⚡ React",      delay: 0,   dur: 6,   right: "5%",  top: "20%" },
  { label: "☁ AWS",         delay: 1,   dur: 7,   right: "2%",  top: "38%" },
  { label: "🔷 .NET Core",  delay: 2,   dur: 5.5, right: "8%",  top: "56%" },
  { label: "🍃 Spring Boot",delay: 0.5, dur: 8,   right: "3%",  top: "72%" },
  { label: "🔶 Java",       delay: 1.5, dur: 6.5, right: "12%", top: "14%" },
  { label: "📘 TypeScript", delay: 2.5, dur: 7,   right: "10%", top: "46%" },
];

// ── Animated counter ──────────────────────────────────────────────
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView || !ref.current) return;
    const ctrl = animate(0, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => { if (ref.current) ref.current.textContent = Math.floor(v) + suffix; },
    });
    return () => ctrl.stop();
  }, [inView, to, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

// ── Code editor lines ─────────────────────────────────────────────
const codeLines: { indent: number; jsx: React.ReactNode }[] = [
  { indent: 0, jsx: <><span className="text-primary">import</span>{" { "}<span className="text-cyan-400">Sahil</span>{" } "}<span className="text-primary">from</span>{" "}<span className="text-green-400">"@podtech/engineer"</span>;</> },
  { indent: 0, jsx: null },
  { indent: 0, jsx: <><span className="text-primary">const</span>{" "}<span className="text-blue-400">dev</span>{" = {"}</> },
  { indent: 1, jsx: <>name: <span className="text-green-400">"Sahil Vashisht"</span>,</> },
  { indent: 1, jsx: <>role: <span className="text-green-400">"Full Stack Dev"</span>,</> },
  { indent: 1, jsx: <>apis: <span className="text-orange-400">35</span>, <span className="text-white/30">// in production</span></> },
  { indent: 1, jsx: <>onTime: <span className="text-orange-400">100</span>, <span className="text-white/30">// percent</span></> },
  { indent: 1, jsx: <>stack: <span className="text-cyan-400">["ASP.NET","Spring","React"]</span>,</> },
  { indent: 1, jsx: <>cloud: <span className="text-cyan-400">["AWS","Azure"]</span>,</> },
  { indent: 0, jsx: <>{"}"}</> },
  { indent: 0, jsx: null },
  { indent: 0, jsx: <><span className="text-primary">export default</span>{" "}<span className="text-blue-400">dev</span>;</> },
];

export function Hero() {
  // Typewriter state
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const delay = deleting ? 45 : displayed.length === current.length ? 1800 : 90;
    const t = setTimeout(() => {
      if (!deleting && displayed.length < current.length) {
        setDisplayed(current.slice(0, displayed.length + 1));
      } else if (!deleting && displayed.length === current.length) {
        setDeleting(true);
      } else if (deleting && displayed.length > 0) {
        setDisplayed(current.slice(0, displayed.length - 1));
      } else {
        setDeleting(false);
        setRoleIdx((p) => (p + 1) % roles.length);
      }
    }, delay);
    return () => clearTimeout(t);
  }, [displayed, deleting, roleIdx]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

      {/* Aurora gradient sweep — subtle colour-shifting bg */}
      <div className="absolute inset-0 animate-aurora pointer-events-none" />

      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />

      {/* Floating particle field */}
      <Particles />

      {/* Ambient glow orbs — pure CSS for GPU-smooth animation */}
      <div className="glow-orb orb-pulse w-[45vw] h-[45vw] bg-primary top-[-15%] right-[-15%]" />
      <div className="glow-orb orb-pulse-slow w-[35vw] h-[35vw] bg-secondary bottom-[5%] left-[-10%]" style={{ animationDelay: "2s" }} />
      <div className="glow-orb orb-pulse w-[22vw] h-[22vw] bg-primary top-[40%] left-[28%]" style={{ animationDelay: "4s" }} />

      {/* Floating tech badges (desktop only)
          Outer div  → CSS float animation (transform only, no framer conflict)
          Inner div  → framer-motion opacity fade-in (no transform)           */}
      <div className="absolute inset-0 pointer-events-none hidden xl:block">
        {floatingTags.map((tag, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              right: tag.right,
              top: tag.top,
              animationName: "float",
              animationDuration: `${tag.dur}s`,
              animationDelay: `${tag.delay}s`,
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
              willChange: "transform",
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: tag.delay + 1.0, duration: 0.6 }}
              className="glass px-3 py-1.5 rounded-full text-xs font-semibold text-white/60 border border-white/10 backdrop-blur-xl shadow-lg whitespace-nowrap"
            >
              {tag.label}
            </motion.div>
          </div>
        ))}
      </div>

      {/* ── Main grid ──────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT column */}
        <div className="flex flex-col items-start text-left space-y-7">

          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-primary/30"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-medium text-white/70">Open to opportunities · New Delhi, India</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold font-display leading-[1.05] tracking-tight"
          >
            SAHIL
            <br />
            <span className="text-gradient">VASHISHT</span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-white/80 min-h-[2rem]"
          >
            <span className="text-primary font-mono">{">"}</span>
            <span>{displayed}</span>
            <span className="w-[2px] h-6 bg-primary animate-blink" />
          </motion.div>

          {/* Catchy tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            I don't just write code —{" "}
            <span className="text-white font-semibold">I architect solutions that scale</span>.
            {" "}35+ production APIs. Zero missed deadlines. Enterprise-grade, always.
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="/projects"
              className="group px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-primary to-secondary text-white shadow-[0_0_30px_rgba(138,43,226,0.4)] hover:shadow-[0_0_55px_rgba(138,43,226,0.7)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="/contact"
              className="px-8 py-4 rounded-xl font-semibold glass border border-white/10 hover:border-primary/50 text-white hover:shadow-[0_0_25px_rgba(138,43,226,0.2)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Let's Talk
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex flex-wrap items-center gap-3"
          >
            {[
              { icon: <Github className="w-5 h-5" />,   href: "https://github.com/sahil00000001" },
              { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/sahilvashisht00/" },
              { icon: <Mail className="w-5 h-5" />,     href: "mailto:vashishtsahil99@gmail.com" },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noreferrer"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-white hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(138,43,226,0.3)] transition-all duration-300">
                {s.icon}
              </a>
            ))}
            <div className="pl-4 border-l border-white/10 text-sm text-muted-foreground flex items-center gap-3">
              <Phone className="w-4 h-4 text-primary" />
              <span>9625107920</span>
              <MapPin className="w-4 h-4 text-secondary ml-2" />
              <span>New Delhi</span>
            </div>
          </motion.div>

          {/* Animated stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="flex flex-wrap gap-8 pt-4 border-t border-white/5 w-full"
          >
            {[
              { label: "APIs Deployed",    to: 35,  suffix: "+" },
              { label: "On-time Delivery", to: 100, suffix: "%" },
              { label: "Yrs Experience",   to: 3,   suffix: "+" },
              { label: "Roles & Ventures", to: 7,   suffix: "+" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-2xl font-bold text-white">
                  <Counter to={s.to} suffix={s.suffix} />
                </span>
                <span className="text-xs text-muted-foreground mt-0.5">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT column: Animated code editor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="hidden lg:flex justify-center relative"
        >
          {/* Spinning dashed ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-12px] rounded-[2.5rem] border border-primary/20 border-dashed pointer-events-none"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-24px] rounded-[3rem] border border-secondary/10 border-dashed pointer-events-none"
          />

          <div className="relative w-full aspect-[4/3.6] max-w-lg">
            {/* Glow layer */}
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[2rem] blur-lg"
            />

            {/* Editor */}
            <div className="absolute inset-0 bg-[#0c0c14] rounded-[2rem] border border-white/10 shadow-2xl flex flex-col overflow-hidden">

              {/* Title bar */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06] bg-white/[0.025] shrink-0">
                <div className="flex space-x-2">
                  <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <span className="text-xs text-white/25 font-mono">developer.ts</span>
                <div className="w-16" />
              </div>

              {/* Code lines with stagger reveal */}
              <div className="flex-1 px-5 py-4 font-mono text-sm overflow-hidden">
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + i * 0.11, duration: 0.28 }}
                    className="flex items-start leading-[1.8]"
                  >
                    <span className="text-white/20 text-xs w-5 shrink-0 text-right mr-4 mt-[2px] select-none">{i + 1}</span>
                    <span style={{ paddingLeft: line.indent * 18 }} className="text-white/80">
                      {line.jsx ?? ""}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Status bar */}
              <div className="px-5 py-2 border-t border-white/[0.06] bg-primary/10 flex items-center justify-between shrink-0">
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-xs text-primary font-mono flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                  TypeScript · UTF-8
                </motion.span>
                <span className="text-xs text-white/25 font-mono">Ln 12, Col 1</span>
              </div>
            </div>

            {/* Corner glows */}
            <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-primary/30 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-secondary/20 blur-3xl rounded-full pointer-events-none" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground/50 pointer-events-none"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>

    </section>
  );
}

import { motion } from "framer-motion";
import { Link } from "wouter";
import { Github, Linkedin, Globe } from "lucide-react";
import { profile, socials } from "@/data/portfolio";

const socialIcons: Record<string, typeof Github> = {
  Github,
  Linkedin,
  Globe,
};

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background/50 backdrop-blur-lg py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand + tagline */}
        <div className="flex flex-col items-center md:items-start">
          <Link
            href="/"
            className="text-2xl font-bold font-display font-mono tracking-wider mb-2 group"
          >
            <span className="text-gradient">{"<"}</span>
            <span className="text-white group-hover:text-primary transition-colors">SV</span>
            <span className="text-gradient">{"/>"}</span>
          </Link>
          <p className="text-muted-foreground text-sm text-center md:text-left max-w-sm">
            {profile.tagline}
          </p>
        </div>

        {/* Socials + copyright */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex items-center gap-3">
            {socials.map((s) => {
              const Icon = socialIcons[s.icon] ?? Globe;
              return (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 260, damping: 26 }}
                  className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:border-primary/40 transition-colors duration-300"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              );
            })}
          </div>
          <p className="text-sm text-muted-foreground text-center md:text-right">
            © {new Date().getFullYear()} {profile.fullName}. All rights reserved.
          </p>
        </div>
      </div>

      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent blur-sm" />
    </footer>
  );
}

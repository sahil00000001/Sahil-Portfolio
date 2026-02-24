import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex items-center justify-between rounded-full px-6 py-3 transition-all duration-300 ${
          scrolled ? "glass-panel shadow-lg" : "bg-transparent"
        }`}>
          <a href="#" className="text-xl font-bold font-display tracking-wider group">
            <span className="text-gradient">{"<"}</span>
            <span className="text-white group-hover:text-primary transition-colors">DEV</span>
            <span className="text-gradient">{"/>"}</span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(138,43,226,0.3)]"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </motion.header>
  );
}

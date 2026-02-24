export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background/50 backdrop-blur-lg py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <a href="#" className="text-2xl font-bold font-display tracking-wider mb-2">
            <span className="text-gradient">{"<"}</span>
            <span className="text-white">DEV</span>
            <span className="text-gradient">{"/>"}</span>
          </a>
          <p className="text-muted-foreground text-sm text-center md:text-left max-w-sm">
            Building scalable, modern, and intelligent software solutions.
          </p>
        </div>
        
        <div className="flex items-center space-x-6 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
      
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent blur-sm" />
    </footer>
  );
}

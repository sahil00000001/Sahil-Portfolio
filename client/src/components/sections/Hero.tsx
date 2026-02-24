import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="glow-orb w-[40vw] h-[40vw] bg-primary top-[-10%] right-[-10%]"
      />
      <motion.div 
        animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="glow-orb w-[30vw] h-[30vw] bg-secondary bottom-[10%] left-[-10%]"
      />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="flex flex-col items-start text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border-primary/30"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground/80">Available for new opportunities</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1]"
          >
            SAHIL VASHISHT
            <div className="text-xl font-medium text-muted-foreground mt-3">
              Building <span className="text-gradient">Scalable</span>, Modern &amp; Intelligent Software.
            </div>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            I craft premium digital experiences and robust architectures. Bridging the gap between stunning design and flawless backend performance.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a 
              href="#projects"
              className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-primary to-secondary text-white shadow-[0_0_30px_rgba(138,43,226,0.4)] hover:shadow-[0_0_40px_rgba(138,43,226,0.6)] transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              View My Work
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <div className="flex items-center space-x-4 ml-4">
              <a href="https://github.com/sahil00000001" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/sahilvashisht00/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:vashishtsahil99@gmail.com" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all">
                <Mail className="w-5 h-5" />
              </a>
              <div className="pl-4 border-l border-white/5 text-sm text-muted-foreground flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>9625107920</span>
                <MapPin className="w-4 h-4 text-secondary ml-4" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Abstract visual on the right */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:flex justify-center relative"
        >
          <div className="relative w-full aspect-square max-w-lg">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[2rem] transform rotate-3 glass blur-[2px]" />
            <div className="absolute inset-0 bg-background/50 rounded-[2rem] transform -rotate-3 border border-white/10 backdrop-blur-xl flex flex-col p-6 shadow-2xl overflow-hidden">
              {/* Mock Code Interface */}
              <div className="flex space-x-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="font-mono text-sm space-y-3 opacity-80">
                <p><span className="text-primary">import</span> {"{ "}<span className="text-secondary">Future</span>{" }"} <span className="text-primary">from</span> <span className="text-green-400">"@vision/tech"</span>;</p>
                <p className="mt-4"><span className="text-primary">const</span> <span className="text-blue-400">developer</span> = {"{"}</p>
                <p className="pl-4">passion: <span className="text-green-400">"Limitless"</span>,</p>
                <p className="pl-4">code: <span className="text-green-400">"Clean"</span>,</p>
                <p className="pl-4">design: <span className="text-green-400">"Exceptional"</span>,</p>
                <p className="pl-4">impact: <span className="text-secondary">Infinity</span></p>
                <p>{"};"}</p>
                <br/>
                <p><span className="text-primary">export default</span> developer;</p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/30 blur-3xl rounded-full pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

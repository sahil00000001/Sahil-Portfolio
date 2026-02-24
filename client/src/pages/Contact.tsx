import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Contact as ContactSection } from "@/components/sections/Contact";
import { motion } from "framer-motion";
import { Github, Linkedin, Globe, Mail, Phone, MapPin, MessageSquare } from "lucide-react";

const socialLinks = [
  {
    icon: <Github className="w-5 h-5" />,
    label: "GitHub",
    handle: "sahil00000001",
    href: "https://github.com/sahil00000001",
    color: "hover:border-white/40",
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn",
    handle: "sahilvashisht00",
    href: "https://www.linkedin.com/in/sahilvashisht00/",
    color: "hover:border-blue-400/50",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    label: "Google Dev Profile",
    handle: "g.dev/SahilVashisht",
    href: "https://g.dev/SahilVashisht",
    color: "hover:border-green-400/50",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24">

        {/* Page Hero */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-primary/30 mb-6">
                <MessageSquare className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary-foreground/80">Open to opportunities &amp; collaborations</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
                Let's <span className="text-gradient">Connect</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                Whether you have a project in mind, a role to discuss, or just want to say hi — I'd love to hear from you. I'm currently open to new opportunities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Contact Cards */}
        <section className="pb-8">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
            >
              <a href="mailto:vashishtsahil99@gmail.com" className="glass p-5 rounded-2xl border border-white/[0.05] hover:border-primary/40 transition-all group flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Email</div>
                  <div className="font-medium text-white text-sm">vashishtsahil99@gmail.com</div>
                </div>
              </a>

              <a href="tel:9625107920" className="glass p-5 rounded-2xl border border-white/[0.05] hover:border-secondary/40 transition-all group flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Phone</div>
                  <div className="font-medium text-white text-sm">+91 9625107920</div>
                </div>
              </a>

              <div className="glass p-5 rounded-2xl border border-white/[0.05] flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Location</div>
                  <div className="font-medium text-white text-sm">New Delhi, India</div>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4"
            >
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`glass p-5 rounded-2xl border border-white/[0.05] ${s.color} transition-all group flex items-center gap-4`}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground group-hover:text-white shrink-0 group-hover:scale-110 transition-all">
                    {s.icon}
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">{s.label}</div>
                    <div className="font-medium text-white/80 group-hover:text-white text-sm transition-colors">{s.handle}</div>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <ContactSection />

      </main>
      <Footer />
    </div>
  );
}

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Contact as ContactSection } from "@/components/sections/Contact";
import { motion } from "framer-motion";
import { Github, Linkedin, Globe, Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { profile, socials } from "@/data/portfolio";

const EASE = [0.22, 1, 0.36, 1] as const;

const socialIcons: Record<string, typeof Github> = {
  Github,
  Linkedin,
  Globe,
};

const quickCards = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    tone: "text-primary",
    bg: "bg-primary/10 border-primary/20",
    border: "hover:border-primary/40",
  },
  {
    icon: Phone,
    label: "Phone",
    value: `+91 ${profile.phone}`,
    href: `tel:+91${profile.phone}`,
    tone: "text-secondary",
    bg: "bg-secondary/10 border-secondary/20",
    border: "hover:border-secondary/40",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangalore, India",
    href: null,
    tone: "text-primary",
    bg: "bg-primary/10 border-primary/20",
    border: "",
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
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-primary/30 mb-6">
                <MessageSquare className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary-foreground/80">
                  Open to opportunities &amp; collaborations
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-[1.05]">
                Let's <span className="text-gradient">Connect</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                Whether you have a project in mind, a role to discuss, or just want to say hi — I'd
                love to hear from you. I'm currently open to new opportunities.
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
              transition={{ delay: 0.2, duration: 0.6, ease: EASE }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
            >
              {quickCards.map((card) => {
                const Icon = card.icon;
                const inner = (
                  <>
                    <div
                      className={`w-12 h-12 rounded-xl ${card.bg} border flex items-center justify-center ${card.tone} shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-muted-foreground mb-1">{card.label}</div>
                      <div className="font-medium text-white text-sm truncate">{card.value}</div>
                    </div>
                  </>
                );

                return card.href ? (
                  <a
                    key={card.label}
                    href={card.href}
                    className={`glass p-5 rounded-2xl border border-white/[0.05] ${card.border} transition-all group flex items-center gap-4`}
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={card.label}
                    className="glass p-5 rounded-2xl border border-white/[0.05] group flex items-center gap-4"
                  >
                    {inner}
                  </div>
                );
              })}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: EASE }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4"
            >
              {socials.map((s) => {
                const Icon = socialIcons[s.icon] ?? Globe;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="glass p-5 rounded-2xl border border-white/[0.05] hover:border-primary/40 transition-all group flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground group-hover:text-white shrink-0 group-hover:scale-110 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-muted-foreground mb-1">{s.label}</div>
                      <div className="font-medium text-white/80 group-hover:text-white text-sm transition-colors truncate">
                        {s.handle}
                      </div>
                    </div>
                  </a>
                );
              })}
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

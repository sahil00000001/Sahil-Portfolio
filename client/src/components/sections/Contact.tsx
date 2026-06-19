import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Phone, Github, Linkedin, Globe } from "lucide-react";
import { FadeIn } from "../animations/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useToast } from "@/hooks/use-toast";
import { profile, socials } from "@/data/portfolio";

const EASE = [0.22, 1, 0.36, 1] as const;

const socialIcons: Record<string, typeof Github> = {
  Github,
  Linkedin,
  Globe,
};

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    tone: "text-primary",
  },
  {
    icon: Phone,
    label: "Phone",
    value: `+91 ${profile.phone}`,
    href: `tel:+91${profile.phone}`,
    tone: "text-secondary",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangalore, India",
    href: null,
    tone: "text-primary",
  },
];

export function Contact() {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const fieldClass =
    "w-full bg-black/40 border border-white/10 focus:ring-2 focus:ring-primary focus:border-primary text-white rounded-xl px-4 outline-none transition-all placeholder:text-muted-foreground/60";

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({
        title: "Please fill in every field",
        description: "Name, email and a short message are all required.",
        variant: "destructive",
      });
      return;
    }

    const subject = `Portfolio inquiry from ${name.trim()}`;
    const body = `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`;
    const mailtoLink = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    toast({
      title: "Opening your email client…",
      description: "Your message has been drafted — just hit send.",
    });

    window.location.href = mailtoLink;
  }

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden bg-black/20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          kicker="Get in touch"
          title="Let's"
          accent="Connect"
          subtitle="Ready to start your next project? Drop me a message and let's build something extraordinary together."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT — contact info + socials */}
          <FadeIn direction="right">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-display">Contact Information</h3>

              <div className="space-y-4">
                {contactCards.map((card) => {
                  const Icon = card.icon;
                  const inner = (
                    <div className="flex items-center gap-4 glass rounded-2xl border border-white/[0.06] p-4 transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-[0_0_40px_-8px_rgba(168,85,247,0.35)]">
                      <div
                        className={`w-12 h-12 rounded-xl glass flex flex-shrink-0 items-center justify-center ${card.tone} transition-transform duration-300 group-hover:scale-110`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-semibold text-white text-sm">{card.label}</h4>
                        <p className="text-muted-foreground text-sm mt-0.5 truncate group-hover:text-white/90 transition-colors">
                          {card.value}
                        </p>
                      </div>
                    </div>
                  );

                  return card.href ? (
                    <motion.a
                      key={card.label}
                      href={card.href}
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 260, damping: 26 }}
                      className="block group"
                    >
                      {inner}
                    </motion.a>
                  ) : (
                    <div key={card.label} className="group">
                      {inner}
                    </div>
                  );
                })}
              </div>

              {/* Socials */}
              <div className="pt-2">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  Find me online
                </p>
                <div className="flex flex-wrap gap-3">
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
                        className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:border-primary/40 transition-colors duration-300"
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <p className="text-sm text-muted-foreground/80 leading-relaxed italic">
                  "Good code is its own best documentation. As you're about to add a comment, ask
                  yourself, 'How can I improve the code so that this comment isn't needed?'"
                  <br />— Steve McConnell
                </p>
              </div>
            </div>
          </FadeIn>

          {/* RIGHT — glass contact form (no backend) */}
          <FadeIn direction="left">
            <div className="glass-strong p-8 rounded-3xl border border-white/[0.06]">
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-white/80 font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className={`${fieldClass} h-12`}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-white/80 font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className={`${fieldClass} h-12`}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-white/80 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project..."
                    className={`${fieldClass} min-h-[150px] py-3 resize-none`}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="w-full h-12 rounded-xl font-semibold bg-gradient-to-r from-primary to-secondary text-white shadow-[0_0_20px_rgba(138,43,226,0.25)] hover:shadow-[0_0_30px_rgba(138,43,226,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </motion.button>

                <p className="text-xs text-muted-foreground/70 text-center">
                  This opens your email client with the message pre-filled.
                </p>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

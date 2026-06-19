import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { DynamicIcon } from "@/components/ui/dynamic-icon";
import { expertise } from "@/data/portfolio";

const EASE = [0.22, 1, 0.36, 1] as const;

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24">
        {/* Page Hero */}
        <section className="relative overflow-hidden py-20 md:py-24">
          <motion.div
            animate={{ scale: [1, 1.25, 1], opacity: [0.12, 0.22, 0.12] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            style={{ willChange: "transform, opacity" }}
            className="pointer-events-none absolute top-[-12%] left-[-10%] h-[40vw] w-[40vw] rounded-full bg-secondary blur-[120px]"
          />
          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full glass border border-primary/30 px-4 py-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                <span className="font-mono text-xs uppercase tracking-widest text-primary">
                  Available for opportunities
                </span>
              </div>
              <h1 className="mb-6 text-5xl font-bold font-display leading-[1.05] md:text-7xl">
                Where I Add <span className="text-gradient">Value</span>
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                I build full-stack systems and automate the boring parts with AI —
                React/TypeScript front ends, Node/ASP.NET/Spring back ends, and n8n
                agentic workflows. Below are the honest, hands-on capabilities I bring,
                each backed by shipped work.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-8 py-4 font-semibold text-white shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-transform duration-300 hover:scale-[1.04] active:scale-95"
                >
                  Work With Me <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Expertise Grid */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              variants={gridVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 gap-6 lg:grid-cols-2"
            >
              {expertise.map((item) => (
                <motion.div
                  key={item.title}
                  variants={cardVariants}
                  whileHover={{ y: -6 }}
                  className="glass gradient-border shine group relative overflow-hidden rounded-3xl border border-white/[0.06] p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_40px_-8px_rgba(168,85,247,0.35)]"
                >
                  <div className="pointer-events-none absolute top-0 right-0 -mr-12 -mt-12 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <motion.div
                    whileHover={{ scale: 1.12, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-primary transition-shadow duration-300 group-hover:shadow-[0_0_22px_rgba(168,85,247,0.4)]"
                  >
                    <DynamicIcon name={item.icon} className="h-8 w-8" />
                  </motion.div>

                  <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">
                    {item.tagline}
                  </p>
                  <h2 className="mb-4 text-2xl font-bold font-display text-white">
                    {item.title}
                  </h2>
                  <p className="mb-6 leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>

                  {/* Capability points */}
                  <ul className="mb-6 space-y-2">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm text-muted-foreground/90"
                      >
                        <span className="mt-0.5 shrink-0 text-primary">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-2 border-t border-white/5 pt-5">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <h2 className="mb-6 text-3xl font-bold font-display md:text-5xl">
                Ready to <span className="text-gradient">build together?</span>
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                Whether it's a full-stack feature, an AI integration, or an automation
                pipeline that quietly does the boring work — let's make it happen.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-8 py-4 font-semibold text-white shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-transform duration-300 hover:scale-[1.04] active:scale-95"
              >
                Get In Touch <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

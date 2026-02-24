import { FadeIn } from "../animations/FadeIn";

export function Education() {
  return (
    <section id="education" className="py-24 relative bg-black/10">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Academic <span className="text-gradient">Background</span>
          </h2>
          <p className="text-muted-foreground">Formal education and formative learning milestones.</p>
        </FadeIn>

        <div className="space-y-6">
          <div className="glass p-6 rounded-2xl border border-white/[0.05]">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold">Guru Tegh Bahadur Institute Of Technology</h3>
                <div className="text-muted-foreground">BTech Information Technology</div>
              </div>
              <div className="text-right">
                <div className="font-mono text-sm text-primary">2024</div>
                <div className="text-muted-foreground text-sm">CGPA: 8.47</div>
              </div>
            </div>
          </div>

          <div className="glass p-6 rounded-2xl border border-white/[0.05]">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold">School Of Excellence sec 22 Dwarka (CBSE)</h3>
                <div className="text-muted-foreground">Class 12th</div>
              </div>
              <div className="text-right">
                <div className="font-mono text-sm text-primary">2020</div>
                <div className="text-muted-foreground text-sm">CGPA: 8.4</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

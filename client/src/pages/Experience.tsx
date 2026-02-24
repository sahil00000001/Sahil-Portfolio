import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Experience as ExperienceSection } from "@/components/sections/Experience";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <ExperienceSection />
      </main>
      <Footer />
    </div>
  );
}

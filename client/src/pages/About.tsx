import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { About as AboutSection } from "@/components/sections/About";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

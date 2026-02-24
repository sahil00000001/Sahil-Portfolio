import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Projects as ProjectsSection } from "@/components/sections/Projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}

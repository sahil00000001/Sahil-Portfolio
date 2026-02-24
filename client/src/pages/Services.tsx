import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Services as ServicesSection } from "@/components/sections/Services";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}

import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ResearchSection } from "@/components/ResearchSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { ExperienceAndRolesSection } from "@/components/ExperienceAndRolesSection";
import { EducationAndSkillsSection } from "@/components/EducationAndSkillsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-legal-950 text-slate-100 flex flex-col">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ResearchSection />
      <PublicationsSection />
      <ExperienceAndRolesSection />
      <EducationAndSkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

import navbarData from "@/data/navegation/home-navbar.json";
import { Navbar } from "@/components/Navbar";
import { StarBackground } from "@/components/background/StarBackground";
import { PresentationSection } from "@/components/home/PresentationSection";
import { AboutSection } from "@/components/home/about/AboutSection";
import { CurriculumSection } from "@/components/home/curriculum/CurriculumSection";
import { ProjectsSection } from "@/components/home/projects/ProjectsSection";
import { Footer } from "@/components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StarBackground />
      <Navbar items={navbarData} />
      {/* Main Content */}
      <main>
        <PresentationSection />
        <AboutSection />
        <CurriculumSection />
        <ProjectsSection />
      </main>

      <Footer />
    </div>
  );
};

import navbarData from "@/data/navegation/home-navbar.json";
import { Navbar } from "@/components/Navbar";
import { StarBackground } from "@/components/background/StarBackground";
import { PresentationSection } from "@/components/home/PresentationSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { ProjectsSection } from "@/components/home/projects/ProjectsSection";
import { CurriculumSection } from "@/components/home/curriculum/CurriculumSection";
import { Footer } from "@/components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StarBackground />
      <Navbar items={navbarData} />
      <main className="px-[5%] md:px-[8%] lg:px-[12%]">
        <PresentationSection />
        <ExperienceSection />
        <ProjectsSection />
        <CurriculumSection />
      </main>

      <Footer />
    </div>
  );
};

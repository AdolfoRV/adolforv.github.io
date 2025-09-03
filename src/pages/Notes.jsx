import navbarData from "@/data/navegation/notes-navbar.json";
import { Footer } from "@/components/Footer";
import NotesIntroduction from "@/components/notes/NotesIntroduction";
import Sidebar from "@/components/Sidebar";

export const Notes = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Sidebar items={navbarData} />
      <main>
        <NotesIntroduction />
      </main>

      <Footer />
    </div>
  );
};
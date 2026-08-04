import { ArrowUp, Linkedin, Github, Instagram, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="z-50 py-4 px-[10%] bg-card relative border-t border-border mt-10 pt-5 flex flex-wrap justify-between items-center">
      <div className="flex items-center gap-4">
        <a
          href="https://www.linkedin.com/in/adolfo-rv"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="https://github.com/AdolfoRV"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github size={24} />
        </a>
        <a
          href="https://instagram.com/ad.rrova"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <Instagram size={24} />
        </a>
        <a href="mailto:adolfo.rojas.v@ug.uchile.cl" aria-label="Email">
          <Mail size={24} />
        </a>
      </div>
      <div className="flex items-center gap-5">
        <a
          href="#presentation"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};

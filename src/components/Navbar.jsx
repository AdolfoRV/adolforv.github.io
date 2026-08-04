import { cn } from "@/lib/utils";
import { Menu, X, Linkedin, Github } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavItem = ({ item, className, onClick }) => {
  const baseClass = cn(
    "text-foreground/80 hover:text-primary hover:scale-110 transition-colors duration-300",
    className
  );

  const content = item.title;

  if (item.link) {
    return (
      <Link to={item.link} className={baseClass} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={item.href}
      className={baseClass}
      onClick={onClick}
      {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {content}
    </a>
  );
};

export const Navbar = ({ items }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "sm:py-3 py-2 bg-background/80 backdrop-blur-md shadow-xs"
          : "sm:py-5 py-4"
      )}
    >
      <div className="container px-[10%] flex items-center justify-between">
        {/* Logo */}
        <Link
          className="text-xl font-bold text-primary flex items-center hover:scale-110 transition-transform"
          to="/"
        >
          <span className="text-glow text-foreground">@ Ad</span>rrova
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {items.map((item) => (
            <NavItem key={item.title} item={item} />
          ))}
        </div>

        {/* Extras */}
        <div className="flex items-center gap-4">
          <a
            className="hover:scale-110"
            href="https://www.linkedin.com/in/adolfo-rv"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            className="hover:scale-110"
            href="https://github.com/AdolfoRV"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <ThemeToggle size={20}/>
        </div>

        {/* Mobile menu */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden text-foreground z-50 fixed left-1/2 -translate-x-1/2"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center h-screen",
            "transition-all duration-300 lg:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {items.map((item) => (
            <NavItem
              key={item.title}
              item={item}
              onClick={closeMenu}
            />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

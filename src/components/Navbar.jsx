import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ items }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderNavItem = (item, { customStyling, onClick } = {}) => {
    const className = cn(
      "text-foreground/80 hover:text-primary hover:scale-110 transition-colors duration-300",
      customStyling
    );

    if (item.link) {
      return (
        <Link
          key={item.title}
          to={item.link}
          className={className}
          onClick={onClick}
        >
          {item.title}
        </Link>
      );
    }

    return (
      <a
        key={item.title}
        href={item.href}
        className={className}
        onClick={onClick}
        {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {item.title}
      </a>
    );
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "sm:py-3 py-2 bg-background/80 backdrop-blur-md shadow-xs"
          : "sm:py-5 py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link
          className="text-xl font-bold text-primary flex items-center"
          to="/"
        >
          <span className="hover:scale-110 relative z-10">
            <span className="text-glow text-foreground">@ Ad</span>rrova
          </span>
        </Link>

        <div className="hidden md:flex space-x-8">
          {items.map((item) => renderNavItem(item))}
        </div>

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center h-screen",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {items.map((item) =>
              renderNavItem(item, { onClick: () => setIsMenuOpen(false) })
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

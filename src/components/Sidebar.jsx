import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { ArrowUp, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Sidebar({ items }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <aside
      className={cn(
        "fixed h-screen z-40 transition-all duration-300 bg-background/800 backdrop-blur-md shadow-xs border-r",
        expanded ? "sm:w-58 w-50" : "sm:w-18 w-10"
      )}
    >
      <div className="flex flex-col h-full justify-between py-8 px-4">
        {/* Botón para expandir/colapsar */}
        <div className={`flex items-center mb-6 ${expanded ? "justify-between" : "justify-center"}`}>
            {expanded && (
              <a
                className="text-xl font-bold text-primary flex items-center opacity-0 animate-fade-in-delay-1"
                href="/"
              >
                <span className="relative z-10">
                  <span className="text-glow text-foreground">@ Ad</span>
                  rrova
								</span>
							</a>
            )}
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className="rounded text-foreground bg-background/80 hover:text-primary hover:bg-primary/10 transition-colors duration-300"
              aria-label="Expand sidebar"
            >
              {expanded ? <ArrowLeft /> : <ArrowRight />}
            </button>
        </div>
        {/* Links del menú */}
        <nav className="flex-1 flex flex-col gap-2">
          {items && items.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className={cn(
                "rounded px-1 py-2 text-foreground/80 hover:text-primary hover:bg-background/80 transition-colors duration-300 font-medium",
                expanded ? "text-base text-left" : "text-xs text-center px-1"
              )}
              style={{
                whiteSpace: expanded ? "normal" : "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                transition: "width 0.3s"
              }}
            >
              {item.title}
            </a>
          ))}
        </nav>

        {/* Fondo de la sidebar: ThemeToggle y ArrowUp pegados abajo */}
        {/* <div className={cn(
					"flex gap-5 mt-auto pb-4",
					expanded ? "items-center" : "items-center flex-col"
				)}>
          <ThemeToggle />
          <a
            href="#presentation"
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
          >
            <ArrowUp size={20} />
          </a>
        </div> */}
      </div>
    </aside>
  );
}

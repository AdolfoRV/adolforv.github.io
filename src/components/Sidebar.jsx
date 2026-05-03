import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Sidebar({ items }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <aside
      className={cn(
        "fixed h-screen z-40 transition-all duration-300 bg-background/80 backdrop-blur-md shadow-xs border-r",
        expanded ? "sm:w-58 w-50" : "sm:w-18 w-10"
      )}
    >
      <div className="flex flex-col h-full py-8 px-4">
        <div
          className={`flex items-center mb-6 ${expanded ? "justify-between" : "justify-center"}`}
        >
          {expanded && (
            <a
              href="/"
              className="text-xl font-bold text-primary opacity-0 animate-fade-in-delay-1"
            >
              <span className="text-glow text-foreground">@ Ad</span>rrova
            </a>
          )}
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="rounded text-foreground bg-background/80 hover:text-primary hover:bg-primary/10 transition-colors duration-300"
            aria-label="Toggle sidebar"
          >
            {expanded ? <ArrowLeft /> : <ArrowRight />}
          </button>
        </div>

        <nav className="flex-1 flex flex-col gap-2">
          {items?.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className={cn(
                "rounded px-1 py-2 text-foreground/80 hover:text-primary hover:bg-background/80 transition-colors duration-300 font-medium overflow-hidden",
                expanded ? "text-base text-left" : "text-xs text-center"
              )}
            >
              {item.title}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}

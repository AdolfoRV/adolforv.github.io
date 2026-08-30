import { ArrowDown, ArrowDownRight, FileDown, Linkedin, Github } from "lucide-react";

export const PresentationSection = () => {
  const currentAge = new Date().getFullYear() - 2003;

  return (
    <section
      id="presentation"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 md:pt-0"
    >
      <article className="flex flex-col gap-16 w-full max-w-6xl mx-auto">
        <section className="flex flex-col-reverse items-center gap-8 md:flex-row-reverse md:items-center md:justify-between">

          {/* PDF Preview Card */}
          <div className="w-10/12 md:w-2/5 mx-auto md:mx-0 p-6 mb-10 rounded-2xl border border-border bg-card text-card-foreground shadow-sm opacity-0 animate-fade-in-delay-1 flex flex-col items-center text-center gap-4">
            <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-primary/20 ring-offset-2 ring-offset-background">
              <img
                src="https://github.com/AdolfoRV.png"
                alt="Adolfo R. V."
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Adolfo I. Rojas Valenzuela</h3>
              <p className="text-sm">PDF • English/Español</p>
            </div>
            <a
              href="https://github.com/AdolfoRV/AdolfoRV/blob/main/cv-eng.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cosmic-button w-full inline-flex items-center justify-center gap-2"
            >
              <FileDown size={16} />
              View CV
            </a>
          </div>

          {/* Presentation */}
          <div className="flex flex-col items-center text-center z-10 md:items-start md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-balance">
              <span className="opacity-0 animate-fade-in">Hola! I'm </span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                Adolfo
              </span>
            </h1>

            <p className="mt-2 text-sm font-medium sm:text-base text-muted-foreground opacity-0 animate-fade-in-delay-2">
              {currentAge}yo Data Scientist & Industrial Engineer from Chile 🇨🇱
            </p>

            <p className="mt-4 max-w-sm text-balance text-sm sm:text-base text-muted-foreground opacity-0 animate-fade-in-delay-3">
              Process engineer by background, software and data engineer by passion. I enjoy abstract/analythical problem solving and building things that actually matters.
            </p>

            <div className="mt-6 flex items-center gap-1 opacity-0 animate-fade-in-delay-3">
              <p className="text-balance text-sm font-semibold sm:text-base">
                Always open!
              </p>
              <ArrowDownRight className="hidden size-5 animate-bounce sm:block text-primary" />
              <ArrowDown className="block size-5 animate-bounce sm:hidden text-primary" />
            </div>

            <section className="mt-6 flex flex-wrap justify-center md:justify-start items-center gap-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">
                My Projects
              </a>

              <a
                className="hover:scale-110 transition-transform"
                href="https://www.linkedin.com/in/adolfo-rv"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                className="hover:scale-110 transition-transform"
                href="https://github.com/AdolfoRV"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </section>
          </div>
        </section>
      </article>
    </section>
  );
};

import { Briefcase, Code, User } from "lucide-react";
import { AboutCard } from "./AboutCard";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Industrial Engineer & Data Scientist
            </h3>
            <p className="text-muted-foreground">
              I'm a 5th-year Industrial Engineering student at the University of Chile, 
              specializing in Operations, Finance, Marketing, and Business Intelligence. 
              Alongside my major, I pursue minors in Computer Science and Data Science, 
              and I am advancing in the Master's program in Data Science.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="mailto:adolfo.rojas.v@ug.uchile.cl" aria-label="Email" className="cosmic-button">
                Get In Touch
              </a>
              <a href="https://www.linkedin.com/in/adolfo-rv" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                My LinkedIn
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <AboutCard icon={<Code className="h-6 w-6 text-primary" />} title="Data Science & Analytics">
              Skilled in data mining, causal inference, and information engineering. 
              Experienced with Python, R, SQL/NoSQL, and analytical modeling.
            </AboutCard>
            <AboutCard icon={<User className="h-6 w-6 text-primary" />} title="Software Development">
              Background in Scala, and C programming. 
              Experienced in building prototypes, efficient systems programming, 
              and object-oriented design patterns.
            </AboutCard>
            <AboutCard icon={<Briefcase className="h-6 w-6 text-primary" />} title="Business & Operations">
              Strong foundation in optimization and BI. 
              Experienced in applying data science for decision-making and 
              performance measurement (KPIs, dashboards, analytics).
            </AboutCard>
          </div>
        </div>
      </div>
    </section>
  );
};

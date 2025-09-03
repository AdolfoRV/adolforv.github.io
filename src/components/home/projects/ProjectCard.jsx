import { ExternalLink, Github } from "lucide-react";

export function ProjectCard({ project }) {
  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
      {project.image && (
        <div className="h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold mb-1">{project.name}</h3>
        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex space-x-3">
            {project.url && project.url !== "" && (
              <a
                href={project.url}
                target="_blank"
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                <ExternalLink size={20} />
              </a>
            )}
            {project.github && project.github !== "" && (
              <a
                href={project.github}
                target="_blank"
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                <Github size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

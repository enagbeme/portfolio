import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section id="projects" className="container">
      <h2 className="text-dark">My Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.title} className="project-item">
            {project.image && (
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
            )}
            <h3 className="text-primary">{project.title}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Technologies:</strong> <span>{project.technologiesUsed}</span>
            </p>
            <div className="project-links">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm bg-dark text-white"
              >
                GitHub
              </a>
              {project.demoLink && project.demoLink !== "#" && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm bg-secondary text-white"
                >
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


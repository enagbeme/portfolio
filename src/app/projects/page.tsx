"use client";
import { projects } from "@/data/projects";
import Image from "next/image";
import { useState, useMemo } from "react";

const CATEGORIES = ["All", "Full Stack", "Web", "AI / ML", "Desktop", "Mobile"];

export default function ProjectsPage() {
  const [openProject, setOpenProject] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((p) => p.category === activeFilter),
    [activeFilter]
  );

  return (
    <section className="projects-section">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <div className="accent-line" />
          <h2>My Projects</h2>
          <p>A collection of work I&apos;ve built across various technologies</p>
        </div>

        {/* Filter Bar */}
        <div className="filter-bar animate-on-scroll">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="project-grid">
          {filtered.map((project) => (
            <div key={project.title} className="project-card animate-on-scroll">
              {project.image && (
                <div className="project-card-image">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              )}
              <div className="project-card-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech-tags">
                  {project.technologiesUsed.split(", ").slice(0, 5).map((tech) => (
                    <span key={tech} className="project-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-card-links">
                  {project.githubLink && project.githubLink !== "#" && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-ghost"
                    >
                      <i className="fab fa-github" /> GitHub
                    </a>
                  )}
                  {project.githubLink === "#" && (
                    <span className="btn btn-sm btn-ghost" style={{ opacity: 0.5, cursor: "default" }}>
                      <i className="fab fa-github" /> Repo Private
                    </span>
                  )}
                  {project.demoLink && project.demoLink !== "#" && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-primary"
                    >
                      <i className="fas fa-external-link-alt" /> Live Demo
                    </a>
                  )}
                  {project.images && project.images.length > 0 && (
                    <button
                      className="btn btn-sm btn-outline"
                      onClick={() => {
                        setOpenProject(project.title);
                        setCurrentIndex(0);
                      }}
                    >
                      <i className="fas fa-images" /> Screenshots
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {openProject && (
          <div className="modal-overlay" onClick={() => setOpenProject(null)}>
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <h3>{openProject}</h3>
              {(() => {
                const imgs =
                  projects.find((p) => p.title === openProject)?.images || [];
                const total = imgs.length;
                const goPrev = () =>
                  setCurrentIndex((i) => (i - 1 + total) % total);
                const goNext = () =>
                  setCurrentIndex((i) => (i + 1) % total);
                const currentSrc = imgs[currentIndex];
                return (
                  <div className="carousel">
                    <div className="carousel-stage">
                      {currentSrc && (
                        <div className="modal-image">
                          <Image
                            src={currentSrc}
                            alt={openProject}
                            fill
                            sizes="100vw"
                            style={{ objectFit: "contain" }}
                          />
                        </div>
                      )}
                    </div>
                    {total > 1 && (
                      <div className="carousel-nav">
                        <button
                          aria-label="Previous"
                          className="carousel-btn prev"
                          onClick={goPrev}
                        >
                          &#8249;
                        </button>
                        <button
                          aria-label="Next"
                          className="carousel-btn next"
                          onClick={goNext}
                        >
                          &#8250;
                        </button>
                      </div>
                    )}
                    {total > 1 && (
                      <div className="carousel-dots">
                        {imgs.map((_, idx) => (
                          <button
                            key={idx}
                            className={`dot ${idx === currentIndex ? "active" : ""}`}
                            aria-label={`Go to slide ${idx + 1}`}
                            onClick={() => setCurrentIndex(idx)}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                );
              })()}
              <div style={{ marginTop: 16 }}>
                <button
                  className="btn btn-sm btn-outline"
                  onClick={() => setOpenProject(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

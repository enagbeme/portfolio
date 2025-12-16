"use client";
import { projects } from "@/data/projects";
import Image from "next/image";
import { useState } from "react";

export default function ProjectsPage() {
  const [openProject, setOpenProject] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  return (
    <section id="projects" className="container">
      <h2 className="text-dark">My Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.title} className="project-item">
            {project.image && (
              <div className="project-image">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
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
              {project.images && project.images.length > 0 && (
                <button
                  className="btn btn-sm bg-primary text-white"
                  onClick={() => {
                    setOpenProject(project.title);
                    setCurrentIndex(0);
                  }}
                >
                  Screenshots
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      {openProject && (
        <div className="modal-overlay" onClick={() => setOpenProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-primary">{openProject}</h3>
            {(() => {
              const imgs =
                projects.find((p) => p.title === openProject)?.images || [];
              const total = imgs.length;
              const goPrev = () => setCurrentIndex((i) => (i - 1 + total) % total);
              const goNext = () => setCurrentIndex((i) => (i + 1) % total);
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
                      <button aria-label="Previous" className="carousel-btn prev" onClick={goPrev}>
                        ‹
                      </button>
                      <button aria-label="Next" className="carousel-btn next" onClick={goNext}>
                        ›
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
            <button
              className="btn btn-sm bg-dark text-white"
              onClick={() => setOpenProject(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}


import React from "react";

const projects = [
  {
    title: "TIC TAK TOE",
    description: "Want to play a quick game of tic-tac-toe ? ",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    link: "https://pranayaj.github.io/Tik-Tak-Toe/",
  },
  {
    title: "Weather App",
    description: "Want to find weather of around the world ? ",
    tech: ["HTML", "CSS", "WEATHER API"],
    link: "https://pranayaj.github.io/WeatherApp/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="project-card"
            onClick={() => (window.location.href = project.link)}
            style={{ cursor: "pointer" }}
          >
            <div className="project-header">
              <h3>{project.title}</h3>
              <span className="project-badge">Spring Boot Ready</span>
            </div>

            <p className="project-desc">{project.description}</p>

            <div className="project-tech">
              {project.tech.map((tech, index) => (
                <span key={index} className="tech-chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

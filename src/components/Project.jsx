import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <h2>Projects</h2>
      <div className="project-grid">
        <div className="project">
          <h3>AirLine Turn Time App</h3>
          <p>
            The Airline Turn Time App is a React-based single-page application
            designed to monitor and analyze airline ground turnaround
            performance and operational metrics in real time. The platform
            enables airline operations teams to track key turnaround events,
            identify bottlenecks, and improve on-time performance by providing a
            comprehensive view of ground operations.
          </p>
        </div>
        <div className="project">
          <h3>Project Two</h3>
          <p>
            REST API created with Express and MongoDB for user authentication.
          </p>
        </div>
        <div className="project">
          <h3>Project Three</h3>
          <p>Python script automating data processing and report generation.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;

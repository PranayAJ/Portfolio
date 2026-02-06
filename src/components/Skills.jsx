import React from "react";

const skills = {
  technical: [
    "Java",
    "JavaScript (ES6+)",
    "C",
    "C++",
    "Python",
    "HTML5",
    "CSS3",
    "React.js",
    "Redux Toolkit",
    "jQuery",
    "Bootstrap",
    "Spring",
    "Spring Boot",
    "Hibernate",
    "REST APIs",
    "Microservices",
    "MySQL",
    "MS SQL Server",
  ],
  tools: [
    "Postman",
    "Node.js",
    "Git",
    "Jira",
    "Jaspersoft",
    "Power BI",
    "PowerApps",
    "MySQL Workbench",
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="section skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        <div className="skill-block">
          <h3>Technical Skills</h3>
          <div className="skill-pills">
            {skills.technical.map((skill, index) => (
              <span key={index} className="pill">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="skill-block">
          <h3>Tools & Platforms</h3>
          <div className="skill-pills">
            {skills.tools.map((skill, index) => (
              <span key={index} className="pill">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

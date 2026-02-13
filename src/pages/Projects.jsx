import { useEffect, useState } from "react";
import "../styles/Projects.css";

function Projects() {
  const [fade, setFade] = useState(false);
  useEffect(() => setFade(true), []);

  const projects = [
    {
      name: "Faiza UI",
      description: "A premium responsive UI built with React and CSS.",
    },
    {
      name: "Task Manager App",
      description: "Manage tasks with clean UI and smooth animations.",
    },
    {
      name: "Portfolio Website",
      description: "This very portfolio! Elegant, multi-page, premium design.",
    },
  ];

  return (
    <section className={`projects-page ${fade ? "fade-in" : ""}`}>
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, i) => (
          <div key={i} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

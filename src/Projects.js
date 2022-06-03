import ProjectCard from "./Components/ProjectCard";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="projects-main" id="projects">
      <h2 className="about-sub">
        <span className="about-underline">Pr</span>ojects
      </h2>
      <div className="projects-grid-container">
        <div data-aos="fade-up" className="projects-grid">
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
        </div>
      </div>
    </div>
  );
}

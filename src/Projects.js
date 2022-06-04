import ProjectCard from "./Components/ProjectCard";
import "./Projects.css";
import ProjectInfo from "./Components/ProjectInfo.json";

export default function Projects() {
  return (
    <div className="projects-main" id="projects">
      <h2 className="about-sub">
        <span className="about-underline">Pr</span>ojects
      </h2>
      <div className="projects-grid-container">
        <div data-aos="fade-up" className="projects-grid">
          {ProjectInfo.map((e) => {
            return (
              <ProjectCard
                key={e.name}
                name={e.name}
                img={e.img}
                link={e.link}
                description={e.description}
              ></ProjectCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}

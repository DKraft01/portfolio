import "./ProjectCard.css";

export default function ProjectCard(props) {
  return (
    <div className="project-main">
      <div className="project-container">
        <div className="project-img-container">
          <img className="project-img" alt="" src={props.img}></img>
          <div className="project-overlay">
            <button onClick={() => window.open(props.link)}>Visit</button>
          </div>
        </div>

        <div className="project-texts">
          <h3>{props.name}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

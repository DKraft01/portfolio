import "./ProjectCard.css";
export default function ProjectCard() {
  return (
    <div className="project-main">
      <div className="project-container">
        <div className="project-img-container">
          <img
            className="project-img"
            alt=""
            src="https://www.ceupe.com/images/easyblog_articles/1223/b2ap3_large_idea-proyect-management.jpg"
          ></img>
          <div className="project-overlay">
            <button>Visit</button>
          </div>
        </div>

        <div className="project-texts">
          <h3>What can I offer?</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
            repellat voluptatum veniam deleniti sint animi modi dolorem error
            corrupti magni, minima enim, soluta a. Aut perspiciatis in tempore
            qui cumque.
          </p>
        </div>
      </div>
    </div>
  );
}

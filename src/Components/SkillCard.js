import "./SkillCard.css";

export default function SkillCard(props) {
  return (
    <div className="skillcard-overlay">
      <div className="skillcard-main">
        <div className="skillcard-container">
          <img className="skillcard-img" alt="" src={props.logo}></img>
          <div className="skillcard-texts">
            <h3>What can I offer?</h3>
            <p>{props.offer}</p>
            <h3>Extra info</h3>
            <p>{props.extra}</p>
          </div>
        </div>
        <div>
          <p
            onClick={props.toogle}
            className="skillcard-close"
            src="https://img.icons8.com/material-outlined/24/000000/delete-sign.png"
            alt=""
          >
            x
          </p>
        </div>
      </div>
    </div>
  );
}

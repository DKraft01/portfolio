import SkillCard from "./SkillCard";
import "./SkillTool.css";
import React, { useState } from "react";

export default function SkillTool(props) {
  const [CardActive, setCardActive] = useState(false);

  const cardToogle = () => {
    setCardActive(!CardActive);
  };
  return (
    <>
      <div
        data-aos="zoom-in"
        onClick={cardToogle}
        className="skilltool-svg-container"
      >
        <img className="skilltool-svg" src={props.logo} alt={props.name}></img>
      </div>
      {CardActive ? (
        <SkillCard
          toogle={cardToogle}
          logo={props.logo}
          offer={props.offer}
          extra={props.extra}
        ></SkillCard>
      ) : null}
    </>
  );
}

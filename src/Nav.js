import "./Nav.css";
import { ReactComponent as Burguer } from "./svgs/bars-burguer.svg";

import React, { useState } from "react";
import logo from "./svgs/logo.svg";

export default function Nav(props) {
  const [Expanded, setExpanded] = useState("nav-it");

  const expand = () => {
    Expanded === "nav-it"
      ? setExpanded("nav-it-expanded")
      : setExpanded("nav-it");
  };

  return (
    <>
      <ul className="nav">
        <div className="logo">
          <a className="nav-home-logo" href="#home">
            {/* <h1>DK</h1> */}
            <img src={logo} alt="Daniel Kraft"></img>
          </a>

          <a className="home" href="#home">
            Home
          </a>
          <div className="burguer">
            <Burguer onClick={expand}></Burguer>
          </div>
        </div>

        <li className={Expanded}>
          <a href="#about">About</a>
        </li>
        <li className={Expanded}>
          <a href="#skills">Skills</a>
        </li>
        <li className={Expanded}>
          <a href="#projects">Projects</a>
        </li>
        <li className={Expanded}>
          <a href="#contact">Contact</a>
        </li>

        <li className={Expanded}></li>
      </ul>
    </>
  );
}

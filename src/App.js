import { ReactComponent as Separator } from "./svgs/landing.svg";
import Aos from "aos";
import React, { useEffect } from "react";

import "aos/dist/aos.css";
import "./App.css";
import Nav from "./Nav";
import About from "./About";
import Background from "./Background";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="App" id="home">
      <Background></Background>
      <div className="proof">
        <Separator className="landingSvg"></Separator>
      </div>
      <Nav></Nav>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;

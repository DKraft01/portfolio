import "./About.css";

export default function About() {
  return (
    <div className="about" id="about">
      <h2 className="about-sub">
        <span className="about-underline">Ab</span>out
      </h2>
      <div data-aos="fade">
        <p className="about-text">
          My name is <b>Daniel</b>, I'm currently studying a Multimedia
          Engineering in USB Medellin Colombia, that means I not only know how
          to code, but also have a lot of other tools to offer, like
          Illustrator, Photoshop, AutoDesk Maya, Unity, Reaper, etc.
        </p>

        <p className="about-text">
          I've been learning <b>React </b> for one year and I think I've been
          making very good progress but of course there's always so much learn.
          However 'I'll always find a way'.
        </p>
        <p className="about-text">
          {" "}
          Apart from <b> Coding</b> I also love music and finance, so you can
          find me playing bass in a bar, or probably in library studying
          macroeconomics.
        </p>
      </div>
      <div className="about-wkm-div">
        <a
          href="https://www.linkedin.com/in/danielanthonykraft/"
          rel="noreferrer"
          download="DKraft react developer"
          target="_blank"
        >
          <button className="about-wkm"> Wanna Know More?</button>
        </a>
      </div>
    </div>
  );
}

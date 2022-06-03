import "./Footer.css";
import LinkedinLogo from "./svgs/linkedin.svg";

export default function Footer() {
  return (
    <div className="footer-main">
      <a
        href="https://www.linkedin.com/in/danielanthonykraft"
        rel="noreferrer"
        target="_blank"
      >
        <img alt="linkedin" src={LinkedinLogo}></img>
      </a>

      <p>danielkraft2022@gmail.com</p>
    </div>
  );
}

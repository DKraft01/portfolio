import SkillTool from "./Components/SkillTool";
import "./Skills.css";
import SkillData from "./Components/SkillData.json";
export default function Skills() {
  return (
    <div className="skill" id="skills">
      <h2 className="skill-sub">
        <span className="skill-underline">Sk</span>ills
      </h2>
      <div className="skill-grid-container">
        <div className="skill-grid">
          {SkillData.map((e) => (
            <SkillTool
              key={e.name}
              logo={e.logo}
              name={e.name}
              offer={e.offer}
              extra={e.extra}
            ></SkillTool>
          ))}
        </div>
      </div>
    </div>
  );
}

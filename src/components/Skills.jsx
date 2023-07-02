import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../styles/Skills.css";

function Skills({ title, value, experience }) {
  return (
    <div className="skills-card">
      <h4>{title}</h4>
      <div className="skill-progress-bar">
        <CircularProgressbar
          value={value}
          text={`${value}%`}
          styles={buildStyles({
            textSize: "18px",
            pathColor: `#3d68f3`,
            textColor: "black",
            trailColor: "#f0f0f0",
            backgroundColor: "#3e98c7",
          })}
        />
      </div>
      <p>
        Experience: <span>{experience}</span>
      </p>
    </div>
  );
}

export default Skills;

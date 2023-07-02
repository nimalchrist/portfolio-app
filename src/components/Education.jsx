import "../styles/Education.css";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Education({ completion, title, grade, description }) {
  return (
    <>
      <div className="education-div">
        <div className="education-icon">
          <div className="icon-wrapper">
            <FontAwesomeIcon
              icon={faGraduationCap}
              size="2x"
              color="white"
              className="custom-icon"
            />
          </div>
        </div>
        <div className="education-content">
          <h5>{completion}</h5>
          <h4>{title}</h4>
          <h6>{grade}</h6>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}

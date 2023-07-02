import "../styles/Awards.css";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Awards({ year, title, provider, description }) {
  return (
    <>
      <div className="awards-div">
        <div className="awards-icon">
          <div className="icon-wrapper">
            <FontAwesomeIcon
              icon={faAward}
              size="2x"
              color="white"
              className="custom-icon"
            />
          </div>
        </div>
        <div className="awards-content">
          <h5>{year}</h5>
          <h4>{title}</h4>
          <h6>{provider}</h6>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}

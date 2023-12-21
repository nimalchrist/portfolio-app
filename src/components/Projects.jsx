import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyCheckAlt,
  faBookBible,
  faR,
  faBrain,
  faChartLine,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Projects.css";

export default function Projects() {
  const projectList = [
    {
      projectName: "Budget Buddy",
      projectIcon: faMoneyCheckAlt,
      usedSkilss: "Flutter, Nodejs, MySQL, AWS",
      description:
        "A flutter app which is used to track the expense and budgets.",
      githubLink: "https://github.com/nimalchrist/Budget_Buddy.git",
    },
    {
      projectName: "Remit app",
      projectIcon: faR,
      usedSkilss: "Flutter",
      description:
        "An android app which is used to track the screen time and making virtual habits.",
      githubLink: "https://github.com/nimalchrist/Remit_application.git",
    },
    {
      projectName: "Fresco app",
      projectIcon: faBookBible,
      usedSkilss: "Flutter, Nodejs, MySQL",
      description:
        "It is a social media app developed with flutter used to share educational content among the students.",
      githubLink: "https://github.com/nimalchrist/Fresco.git",
    },
    {
      projectName: "AI chatbot",
      projectIcon: faBrain,
      usedSkilss: "Html, Css, Python, Flask, JQuery",
      description:
        "It is an AI based chatbot which is used to give the personalised suggestions about the government schemes to the user.",
      githubLink: "https://github.com/nimalchrist/SchemeSuggestion-chatbot",
    },
    {
      projectName: "Price Comparison Website",
      projectIcon: faChartLine,
      usedSkilss: "React, Flask, MySQL and web scrapping",
      description:
        "It is a web application developed with react, flask and mysql. It is used to track the products price from amazon and flipkart",
      githubLink: "https://github.com/nimalchrist/pricetracker.git",
    },
    {
      projectName: "Sample Cloud Business",
      projectIcon: faCloud,
      usedSkilss: "Html, Css, Js",
      description: "It is a sample business website",
      githubLink: "https://github.com/nimalchrist/CloudHoster.git",
    },
  ];
  return (
    <>
      <div className="project-section-container" id="projects">
        <h1>My Projects</h1>
        <p style={{ fontSize: 15 }}>
          My project list exemplifies my commitment to impactful tech solutions,
          showcasing dedication, problem-solving abilities, and a passion for
          positive change.
        </p>

        {projectList.map((project, index) => (
          <div className="project-div" key={index}>
            <h4>{project.projectName}</h4>
            <div className="project-icon-wrapper">
              <FontAwesomeIcon
                icon={project.projectIcon}
                size="2x"
                color="black"
                className="project-icon"
              />
            </div>
            <h5>
              Skills Used: <span>{project.usedSkilss}</span>
            </h5>
            <p style={{ fontSize: "14px" }}>{project.description}</p>
            <a href={project.githubLink} target="_blank">
              Github Link
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

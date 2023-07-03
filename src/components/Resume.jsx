import React, { useEffect, useState, useRef } from "react";
import { Nav } from "react-bootstrap";
import "../styles/Resume.css";
import Skills from "./Skills";
import Awards from "./Awards";
import Education from "./Education";

function Resume() {
  const [activeSection, setActiveSection] = useState("");
  const scrollContainerRef = useRef(null);
  const educationList = [
    {
      completion: "2018",
      title: "SSLC",
      grade: "92.6%",
      description:
        "I successfully completed my SSLC schooling at Sacred Heart Hr Sec School with an impressive percentage of 92.6%, showcasing my exceptional dedication and academic excellence.",
    },
    {
      completion: "2020",
      title: "HSC",
      grade: "91.83%",
      description:
        "I proudly completed my HSC schooling at Sacred Heart Hr Sec School, achieving an impressive percentage of 91.83%. This accomplishment is a testament to my hard work and commitment to academic excellence.",
    },
    {
      completion: "2024(current final yr)",
      title: "BE CSE",
      grade: "8.7 cgpa",
      description:
        "I am currently pursuing my final year, and I have achieved an impressive CGPA of 8.7. This reflects my consistent dedication and academic performance throughout my academic journey, setting a strong foundation for future success.",
    },
  ];
  const awardsList = [
    {
      year: "2022",
      title: "Smart India Hackathon 2022",
      provider: "AICTE in association with MeiTY",
      description:
        "My team and I emerged victorious in the prestigious Smart India Hackathon 2022, organized by AICTE in association with MeiTY. We proudly clinched the top position in the world's largest hackathon, showcasing our exceptional problem-solving skills and innovative thinking.",
    },
    {
      year: "2022",
      title: "Govtechthon 2022 (Runners up)",
      provider: "TN Skills and StartupTN",
      description:
        "In the State Level event, Govtechthon 2022, organized by Startup TN and TN Skills, my team and I proudly secured the position of runners-up. Our commendable performance in this competition highlights our strong skills and dedication in the field of government technology innovation.",
    },
  ];
  const skillsList = [
    {
      skill: "HTML",
      value: 90,
      experience: "2 Years",
    },
    {
      skill: "CSS",
      value: 94,
      experience: "2 Years",
    },
    {
      skill: "JS",
      value: 83,
      experience: "1 Year",
    },
    {
      skill: "REACT",
      value: 65,
      experience: "3 Months",
    },
    {
      skill: "FLUTTER",
      value: 90,
      experience: "1.5 Years",
    },
    {
      skill: "NODE JS",
      value: 77,
      experience: "8 Months",
    },
    {
      skill: "JAVA",
      value: 90,
      experience: "2 Years",
    },
    {
      skill: "PYTHON",
      value: 80,
      experience: "3 Years",
    },
    {
      skill: "MYSQL",
      value: 83,
      experience: "1.5 Years",
    },
  ];
  useEffect(() => {
    function handleScroll() {
      console.log("Handle scroll called");
      const sections = document.querySelectorAll(".resume-section");
      const navLinks = document.querySelectorAll(".resume-nav-link");
      const resumeContentHeight = scrollContainerRef.current.offsetHeight;
      console.log(sections);
      console.log(navLinks);

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        console.log(rect);
        if (rect.top >= 0 && rect.top <= resumeContentHeight * 0.5) {
          setActiveSection(section.id);
          navLinks.forEach((navLink) => navLink.classList.remove("active"));
          navLinks[index].classList.add("active");
        }
      });
    }
    const scrollContainer = scrollContainerRef.current;
    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="resume-container" id="resume">
      <div className="resume-navbar-container">
        <Nav className="resume-navbar">
          <Nav.Item>
            <Nav.Link
              href="#section1"
              className={`resume-nav-link ${
                activeSection === "section1" ? "active" : ""
              }`}
            >
              Skills
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="#section2"
              className={`resume-nav-link ${
                activeSection === "section2" ? "active" : ""
              }`}
            >
              Awards
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="#section3"
              className={`resume-nav-link ${
                activeSection === "section3" ? "active" : ""
              }`}
            >
              Education
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      <div className="resume-content" ref={scrollContainerRef}>
        <div id="section1" className="resume-section skill-section">
          <h2>Skills</h2>
          {skillsList.map((skill, index) => (
            <Skills
              key={index}
              title={skill.skill}
              value={skill.value}
              experience={skill.experience}
            />
          ))}
        </div>
        <div id="section2" className="resume-section awards-section">
          <h2>Awards</h2>
          {awardsList.map((award, index) => (
            <Awards
              key={index}
              year={award.year}
              title={award.title}
              provider={award.provider}
              description={award.description}
            />
          ))}
        </div>
        <div id="section3" className="resume-section education-section">
          <h2>Education</h2>
          {educationList.map((education, index) => (
            <Education
              key={index}
              completion={education.completion}
              grade={education.grade}
              description={education.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resume;

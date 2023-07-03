import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Table } from "react-bootstrap";
import {
  faLocationDot,
  faEnvelope,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const queriesContent = [
    {
      id: 1,
      key: faLocationDot,
      value:
        "7/7a, Karaiyalar Kudiyetru Street, Sathankulam 628704, Tuticorin, Tamil Nadu, India",
    },
    {
      id: 2,
      key: faEnvelope,
      value: "chiristonimal@gmail.com",
    },
    {
      id: 3,
      key: faAddressBook,
      value: "+91 6381610711",
    },
  ];
  return (
    <>
      <div className="footer-section">
        <div className="link-section">
          <h2>Links</h2>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="follow-me-section">
          <h2>Follow Me</h2>
          <a href="https://www.facebook.com/SelvaNimal13" target="_blank">
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
              color="#a3a3a3"
              className="follow-icon facebook"
            />
          </a>
          <a href="https://www.instagram.com/_christo_nimal/" target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              color="#a3a3a3"
              className="follow-icon instagram"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/christo-selva-nimal-s-47400b1bb/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              color="#a3a3a3"
              className="follow-icon linkedIn"
            />
          </a>
        </div>
        <div className="queries-section">
          <h2>Having Queries?</h2>
          <Table
            borderless
            bgcolor="primary"
            className="content-table custom-table"
          >
            <tbody>
              {queriesContent.map((item) => (
                <tr key={item.id}>
                  <td style={{ backgroundColor: "black" }}>
                    <FontAwesomeIcon icon={item.key} color="#afafaf" />
                  </td>
                  <td
                    className="p-2"
                    style={{
                      fontWeight: 700,
                      color: "#afafaf",
                      backgroundColor: "black",
                    }}
                  >
                    {item.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className="credits-section">
          <p
            style={{
              textAlign: "center",
              color: "#afafaf",
              margin: "15px auto 0px auto",
              fontSize: "14px",
            }}
          >
            Designed and developed by Christo Nimal
          </p>
        </div>
      </div>
    </>
  );
}

import { Table } from "react-bootstrap";
import "../styles/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const contactContent = [
    { id: 1, key: "Email:", value: "chiristonimal@gmail.com" },
    { id: 2, key: "Phone:", value: "+91 6381610711" },
    {
      id: 3,
      key: "LinkedIn:",
      value: "https://www.linkedin.com/in/christo-selva-nimal-s-47400b1bb/",
    },
    {
      id: 4,
      key: "Address:",
      value:
        "7/7a, Karaiyalar Kudiyetru Street, Sathankulam 628704, Tuticorin, Tamil Nadu, India",
    },
  ];
  return (
    <>
      <div className="contact-section" id="contact">
        <h1>Contact Me</h1>
        <div className="contact-image">
          <img src={require("../assets/images/me.jpg")} alt="My Profile" />
        </div>
        <div className="contact-div">
          <Table borderless bgcolor="light" hover className="content-table">
            <tbody>
              {contactContent.map((item) => (
                <tr key={item.id}>
                  <td className="p-2" style={{ fontWeight: "bold" }}>
                    {item.key}
                  </td>
                  <td
                    className="p-2"
                    style={{ fontWeight: 700, color: "#afafaf" }}
                  >
                    {item.id !== 3 ? (
                      item.value
                    ) : (
                      <a href={item.value} target="_blank">
                        {"christo-selva-nimal-s-47400b1bb/"}
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="social-icon-list">
            <h2>Reach Me In</h2>

            <a href="https://www.facebook.com/SelvaNimal13" target="_blank">
              <FontAwesomeIcon
                icon={faFacebook}
                size="3x"
                color="black"
                className="social-icon fb"
              />
            </a>
            <a href="https://www.instagram.com/_christo_nimal/" target="_blank">
              <FontAwesomeIcon
                icon={faInstagram}
                size="3x"
                color="black"
                className="social-icon insta"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/christo-selva-nimal-s-47400b1bb/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="3x"
                color="black"
                className="social-icon ln"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

import "../styles/About.css";
import { Table } from "react-bootstrap";

export default function AboutSection() {
  const aboutContent = [
    { id: 1, key: "Name:", value: "S. Chiristo Selva Nimal" },
    { id: 2, key: "Date of birth: ", value: "September 13, 2002" },
    {
      id: 3,
      key: "Address:",
      value:
        "7/7a, Karaiyalar Kudiyetru Street, Sathankulam 628704, Tuticorin, Tamil Nadu, India",
    },
    { id: 4, key: "Religion:", value: "RC Christian" },
    { id: 5, key: "Email:", value: "chiristonimal@gmail.com" },
    { id: 6, key: "Phone:", value: "+91 6381610711" },
    { id: 7, key: "Age:", value: "20" },
  ];
  return (
    <div className="about-section-container" id="about">
      <div className="about-image">
        <img src={require("../assets/images/me.jpg")} alt="My Profile" />
      </div>
      <div className="about-content">
        <h1>About Me</h1>
        <p style={{ color: "#afafaf", fontWeight: 700 }}>
          Highly motivated Full stack developer with Expertise in data
          structures and algorithms.
        </p>
        <div className="about-content-div">
          <Table
            borderless
            bgcolor="light"
            hover
            className="about-content-table"
          >
            <tbody>
              {aboutContent.map((item) => (
                <tr key={item.id}>
                  <td className="p-2" style={{ fontWeight: "bold" }}>
                    {item.key}
                  </td>
                  <td
                    className="p-2"
                    style={{ fontWeight: 700, color: "#afafaf" }}
                  >
                    {item.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

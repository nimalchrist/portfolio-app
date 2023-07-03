import NavbarHeader from "./components/Navbar";
import "./styles/Home.css";
import "./App.css";
import TextCycler from "./components/TextCycler";
import AboutSection from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import { Button } from "react-bootstrap";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const hostName = "CHIRISTO SELVA NIMAL";
  return (
    <>
      <div className="home-container" id="home">
        <header className="header-container">
          <NavbarHeader />
        </header>
        <h3>HEY! I'AM</h3>
        <h1>{hostName}</h1>
        <TextCycler />
      </div>
      <br />
      <AboutSection />
      <Resume />
      <Projects />
      <div className="free-lancing-section">
        <div className="overlay"></div> {/* Add the overlay div */}
        <h1>
          I am available for <span>FreeLancing!</span>
        </h1>
        <Button variant="info" className="px-4 py-2 hire-me-btn">
          Hire Me
        </Button>
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default App;

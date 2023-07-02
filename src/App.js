import NavbarHeader from "./components/Navbar";
import "./styles/Home.css";
import TextCycler from "./components/TextCycler";
import AboutSection from "./components/About";
import Resume from "./components/Resume";

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
    </>
  );
}

export default App;

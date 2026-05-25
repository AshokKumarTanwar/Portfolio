import Navbar from "./components/Navbar";
import Text from "./components/Text";
import HeroSection from "./components/HeroSection";
import Hobbies from "./components/Hobbies";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Bottom from "./components/Bottom";

export default function Home() {
  return (
    <div className="container">

      <Navbar />
      <section className="heroContainer">
        <div className="heroLeft">
          <Text />
        </div>

        <div className="heroRight">
          <HeroSection />
        </div>

      </section>
      
      <section className="infoBoxes">

        <div className="infoCard">
          <Hobbies />
        </div>

        <div className="infoCard">
          <Skills />
        </div>

        <div className="infoCard">
          <Education />
        </div>

      </section>

      <Bottom />

    </div>
  );
}
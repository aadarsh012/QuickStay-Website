import "./Home.css";
import Navbar from "../../Components/Navigation/Navbar/Navbar";
import Hero from "../../Components/HeroSection/Hero";
import Section3 from "../../Components/ThirdSection/Section3";
import Section4 from "../../Components/FourthSection/Section4";
import Section5 from "../../Components/FifthSection/Section5";
import Section6 from "../../Components/SixthSection/Section6";

const Home = (props) => {
  return (
    <div className="Home">
      <Navbar />
      <Hero />
      <div className="SecondSection">
        <div>
          <img src="/Assets/2.png" alt="benefits" />
        </div>
        <div>
          <img src="/Assets/5.png" alt="benefits" />
        </div>
        <div>
          <img src="/Assets/3.png" alt="benefits" />
        </div>
      </div>
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
};
export default Home;

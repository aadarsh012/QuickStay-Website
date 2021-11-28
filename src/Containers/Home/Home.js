import "./Home.css";
import { useState, useEffect } from "react";
import Navbar from "../../Components/Navigation/Navbar/Navbar";
import Hero from "../../Components/HeroSection/Hero";
import Section3 from "../../Components/ThirdSection/Section3";
import Section4 from "../../Components/FourthSection/Section4";
import Section5 from "../../Components/FifthSection/Section5";
import Section6 from "../../Components/SixthSection/Section6";
import Sidedrawer from "../../Components/Navigation/Sidedrawer/Sidedrawer";
import Modal from "../../UI/Modal/Modal";

const Home = (props) => {
  const [sideDrawer, setSideDrawer] = useState(false);
  const [toTop, setToTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setToTop(true);
      } else {
        setToTop(false);
      }
    });
  }, [toTop]);

  return (
    <div className="Home">
      {/* Sidedrawer */}
      <Sidedrawer open={sideDrawer} clicked={() => setSideDrawer(false)} />
      {/* Burger */}
      <div className="Burger" onClick={() => setSideDrawer(true)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
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
      <div className={toTop ? "ToTop show" : "ToTop hide"} onClick={() => window.scrollTo(0, 0)}>
        <i className="fas fa-chevron-up"></i>
      </div>
    </div>
  );
};
export default Home;

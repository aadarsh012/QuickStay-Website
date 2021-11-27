import "./Home.css";
import Navbar from "../../Components/Navigation/Navbar/Navbar";
import Hero from "../../Components/HeroSection/Hero";

const Home = (props) => {
  return (
    <div className="Home">
      <Navbar />
      <Hero />
    </div>
  );
};
export default Home;

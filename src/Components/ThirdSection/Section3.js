import classes from "./Section3.module.css";
import pg from "../../Images/PG.png";
import appartment from "../../Images/Apartment.png";
import ir from "../../Images/IndependentRoom.png";
const Section3 = (props) => {
  return (
    <div className={classes.Section3}>
      <div>
        <span>Find your favourite stays!</span>
        <p>
          A new city might feel too new to roam around and look for a decent rental stay, is'nt it?
          No need to worry, find the best PG in few clicks!
        </p>
      </div>
      <div>
        <img src={pg} alt="pg" />
        <span>Paying Guest(PG)</span>
      </div>
      <div>
        <img src={appartment} alt="apartment" />
        <span>Flat/Apartment</span>
      </div>
      <div>
        <img src={ir} alt="independentroom" />
        <span>Independent Room</span>
      </div>
    </div>
  );
};
export default Section3;

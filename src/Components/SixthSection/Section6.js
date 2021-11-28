import classes from "./Section6.module.css";
import gpd from "../../Images/GenuinePropertyDetails.png";
import cs from "../../Images/CustomerSupport.png";
import ts from "../../Images/TimeSaving.png";
const Section6 = (props) => {
  return (
    <div className={classes.Section6}>
      <div>
        <span>Why stay at QuickStay?</span>
        <p>
          We want to help you simplify your life and cut out the unnecessary hustle of finding a
          perfect rental stay.
        </p>
      </div>
      <div>
        <img src={gpd} alt="propertyDetails" />
        <span>Genuine Property Details</span>
      </div>
      <div>
        <img src={cs} alt="support" />
        <span>End to End Customer Support</span>
      </div>
      <div>
        <img src={ts} alt="timeSaving" />
        <span>Time Saving & Hassle-Free</span>
      </div>
    </div>
  );
};
export default Section6;

import classes from "./Section6.module.css";
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
        <img src="/Assets/GenuinePropertyDetails.png" alt="propertyDetails" />
        <span>Genuine Property Details</span>
      </div>
      <div>
        <img src="/Assets/CustomerSupport.png" alt="support" />
        <span>End to End Customer Support</span>
      </div>
      <div>
        <img src="/Assets/TimeSaving.png" alt="timeSaving" />
        <span>Time Saving & Hassle-Free</span>
      </div>
    </div>
  );
};
export default Section6;

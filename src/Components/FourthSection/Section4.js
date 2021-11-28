import classes from "./Section4.module.css";
import rf1 from "../../Images/Refer&Earn1.png";
import rf2 from "../../Images/Refer&Earn2.png";

const Section4 = (props) => {
  return (
    <div className={classes.Section4}>
      <div>
        <img src={rf1} className={classes.firstImage} alt="banner" />
      </div>
      <div>
        <img src={rf2} alt="banner" />
      </div>
    </div>
  );
};
export default Section4;

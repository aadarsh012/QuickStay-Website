import classes from "./Section5.module.css";
import img from "../../Images/Hero_Image.jpg";
const Section5 = (props) => {
  return (
    <>
      <div className={classes.Section5}>
        <div>
          <span>QuickStay Exclusive Properties</span>
          <p>
            We won't show you photos that are too good to be true. Find the best room for rent near
            you!
          </p>
        </div>
        <div className={classes.Cards}>
          <div className={classes.Image}>
            <img src={img} alt="rooms" />
          </div>
          <span className={classes.Name}>Private Room</span>
          <span className={classes.Location}>
            <i className="fas fa-map-marker-alt"></i> Sec 22, Chandigarh
          </span>
          <span className={classes.Description}>Fully-Furnished</span>
          <span className={classes.Price}>
            <i className="fas fa-rupee-sign"> </i>6500
          </span>
        </div>
        <div className={classes.Cards}>
          <div className={classes.Image}>
            <img src={img} alt="rooms" />
          </div>
          <span className={classes.Name}>PG</span>
          <span className={classes.Location}>
            <i className="fas fa-map-marker-alt"></i> Sec 46, Chandigarh
          </span>
          <span className={classes.Description}>Fully-Furnished</span>
          <span className={classes.Price}>
            <i className="fas fa-rupee-sign"></i>5000
          </span>
        </div>
        <div className={classes.Cards}>
          <div className={classes.Image}>
            <img src={img} alt="rooms" />
          </div>
          <span className={classes.Name}>Single Room</span>
          <span className={classes.Location}>
            <i className="fas fa-map-marker-alt"></i> VIP road, Zirakpur
          </span>
          <span className={classes.Description}>Fully-Furnished</span>
          <span className={classes.Price}>
            <i className="fas fa-rupee-sign"></i>8500
          </span>
        </div>
      </div>
      <p>
        See all <i className="fas fa-chevron-right"></i>
      </p>
    </>
  );
};
export default Section5;

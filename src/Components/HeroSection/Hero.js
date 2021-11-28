import classes from "./Hero.module.css";
import heroImage from "../../Images/Hero_Image.jpg";
const Hero = (props) => {
  return (
    <div className={classes.Hero}>
      {/* Hero Image */}
      <div className={classes.Image}>
        <img src={heroImage} alt="Hero" />
      </div>
      <div className={classes.Heading}>
        <span>Want Easy Stay?</span>
        <span>Karo QuickStay!</span>
      </div>
      <div className={classes.Search_Section}>
        <div>
          <div>
            <span>25000+</span>
            <span>Trusted Users</span>
          </div>
          <div>
            <span>4000+</span>
            <span>Verified Properties PAN India</span>
          </div>
          <div>
            <span>17.5+ Lakhs</span>
            <span>Total Brokerage Saved</span>
          </div>
        </div>
        <div className={classes.Search}>
          <div className={classes.Dropbox}>
            <select className={classes.Select} name="States">
              <option value="Chandigarh">Chandigarh</option>
              <option value="New Delhi">New Delhi</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="West Bengal">West Bengal</option>
              <option value="Kerala">Kerala</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Assam">Assam</option>
            </select>
          </div>
          <input type="search" placeholder="Search Locality..." />
          <button>SEARCH</button>
          <button className={classes.ResBtn}>
            <i className="fas fa-search-location"></i>
          </button>
        </div>
      </div>
      <div className={classes.ResidentList}>
        <input type="text" placeholder="Do you own a residential property? List it here..." />
        <button>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};
export default Hero;

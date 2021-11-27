import classes from "./Hero.module.css";
import { useState } from "react";
const Hero = (props) => {
  return (
    <div className={classes.Hero}>
      {/* Hero Image */}
      <div className={classes.Image}>
        <img src="/Assets/Hero_Image.jpg" alt="Hero" />
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
          <div></div>
          <input type="search" placeholder="Search Locality..." />
          <button>SEARCH</button>
          <button className={classes.ResBtn}>
            <i className="fas fa-search-location"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;

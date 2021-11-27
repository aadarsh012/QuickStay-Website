import classes from "./Section3.module.css";
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
        <img src="/Assets/PG.png" alt="pg" />
        <span>Paying Guest(PG)</span>
      </div>
      <div>
        <img src="/Assets/Apartment.png" alt="apartment" />
        <span>Flat/Apartment</span>
      </div>
      <div>
        <img src="/Assets/IndependentRoom.png" alt="independentroom" />
        <span>Independent Room</span>
      </div>
    </div>
  );
};
export default Section3;

import classes from "./Sidedrawer.module.css";
import { useEffect, useState } from "react";
import Backdrop from "../../../UI/Backdrop/Backdrop";
import NavigationItem from "../NavigationItems/NavigationItem";

const Sidedrawer = (props) => {
  let classArray = [classes.Sidedrawer, classes.Close];
  const [isLogin, setIsLogin] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogin(false);
    }
  }, []);

  if (props.open) {
    classArray = [classes.Sidedrawer, classes.Open];
  } else {
    classArray = [classes.Sidedrawer, classes.Close];
  }

  return (
    <>
      <Backdrop show={props.open} click={props.clicked} />
      <div className={classArray.join(" ")}>
        <NavigationItem path="/">Home</NavigationItem>
        <NavigationItem path="/">About</NavigationItem>
        <NavigationItem path="/">BLog</NavigationItem>
        <NavigationItem path="/">Contact Us</NavigationItem>
        {isLogin ? <button>Login</button> : <button>Logout</button>}
      </div>
    </>
  );
};

export default Sidedrawer;

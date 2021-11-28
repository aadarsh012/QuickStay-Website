import classes from "./Sidedrawer.module.css";
import { useEffect, useState } from "react";
import Backdrop from "../../../UI/Backdrop/Backdrop";
import Modal from "../../../UI/Modal/Modal";
import NavigationItem from "../NavigationItems/NavigationItem";
import Register from "../../Register/Register";

const Sidedrawer = (props) => {
  let classArray = [classes.Sidedrawer, classes.Close];

  if (props.open) {
    classArray = [classes.Sidedrawer, classes.Open];
  } else {
    classArray = [classes.Sidedrawer, classes.Close];
  }

  return (
    <>
      <Backdrop show={props.open} click={props.clicked} />
      <div className={classArray.join(" ")}>
        <NavigationItem path="/QuickStay-Website">Home</NavigationItem>
        <NavigationItem path="/QuickStay-Website">About</NavigationItem>
        <NavigationItem path="/QuickStay-Website">BLog</NavigationItem>
        <NavigationItem path="/QuickStay-Website">Contact Us</NavigationItem>
      </div>
    </>
  );
};

export default Sidedrawer;

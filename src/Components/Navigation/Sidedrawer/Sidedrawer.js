import classes from "./Sidedrawer.module.css";
import { useEffect, useState } from "react";
import Backdrop from "../../../UI/Backdrop/Backdrop";
import Modal from "../../../UI/Modal/Modal";
import NavigationItem from "../NavigationItems/NavigationItem";
import Register from "../../Register/Register";

const Sidedrawer = (props) => {
  let classArray = [classes.Sidedrawer, classes.Close];
  const [isLogin, setIsLogin] = useState(true);
  const [modal, setModal] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogin(false);
    }
  }, []);

  const loginHandler = () => {
    setModal(true);
  };

  if (props.open) {
    classArray = [classes.Sidedrawer, classes.Open];
  } else {
    classArray = [classes.Sidedrawer, classes.Close];
  }

  return (
    <>
      <Modal show={modal} clicked={() => setModal(false)}>
        <Register />
      </Modal>
      <Backdrop show={props.open} click={props.clicked} />
      <div className={classArray.join(" ")}>
        <NavigationItem path="/">Home</NavigationItem>
        <NavigationItem path="/">About</NavigationItem>
        <NavigationItem path="/">BLog</NavigationItem>
        <NavigationItem path="/">Contact Us</NavigationItem>
        {isLogin ? (
          <button onClick={loginHandler}>Login</button>
        ) : (
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.reload(false);
            }}
          >
            Logout
          </button>
        )}
      </div>
    </>
  );
};

export default Sidedrawer;

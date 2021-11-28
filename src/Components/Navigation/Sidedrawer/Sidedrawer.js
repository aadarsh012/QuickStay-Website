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

  if (props.open && !modal) {
    classArray = [classes.Sidedrawer, classes.Open];
  } else {
    classArray = [classes.Sidedrawer, classes.Close];
  }

  return (
    <>
      <Modal show={modal} clicked={() => setModal(false)}>
        <Register />
      </Modal>
      <Backdrop show={!modal && props.open} click={props.clicked} />
      <div className={classArray.join(" ")}>
        <NavigationItem path="/QuickStay-Website">Home</NavigationItem>
        <NavigationItem path="/QuickStay-Website">About</NavigationItem>
        <NavigationItem path="/QuickStay-Website">BLog</NavigationItem>
        <NavigationItem path="/QuickStay-Website">Contact Us</NavigationItem>
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

import classes from "./Navbar.module.css";
import NavigationItem from "../NavigationItems/NavigationItem";
import { useEffect, useState } from "react";
import Modal from "../../../UI/Modal/Modal";
import Register from "../../Register/Register";
import logo from "../../../Images/Logo.png";

const Navbar = (props) => {
  const [isLogin, setIsLogin] = useState(true);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogin(false);
      setModal(false);
    }
  }, [modal, isLogin]);

  const loginHandler = () => {
    setModal(true);
  };

  return (
    <>
      <Modal show={modal} clicked={() => setModal(false)}>
        <Register />
      </Modal>

      <div className={classes.Navbar}>
        {/* Logo */}
        <div className={classes.Logo}>
          <a href="/QuickStay-Website">
            <img src={logo} alt="Logo" />
          </a>
        </div>

        {/* Links */}
        <div className={classes.NavigationItems}>
          <NavigationItem path="/QuickStay-Website">Home</NavigationItem>
          <NavigationItem path="/QuickStay-Website/about">About</NavigationItem>
          <NavigationItem path="/QuickStay-Website/blog">Blog</NavigationItem>
          <NavigationItem path="/QuickStay-Website/contact">Contact Us</NavigationItem>
          {/* Login */}
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
      </div>
    </>
  );
};
export default Navbar;

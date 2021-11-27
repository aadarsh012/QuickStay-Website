import classes from "./Navbar.module.css";
import NavigationItem from "../NavigationItems/NavigationItem";
import { useEffect, useState } from "react";
const Navbar = (props) => {
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogin(false);
    }
  }, []);

  return (
    <div className={classes.Navbar}>
      {/* Logo */}
      <div className={classes.Logo}>
        <a href="/">
          <img src="/Assets/Logo.png" alt="Logo" />
        </a>
      </div>

      {/* Links */}
      <div className={classes.NavigationItems}>
        <NavigationItem path="/">Home</NavigationItem>
        <NavigationItem path="/about">About</NavigationItem>
        <NavigationItem path="/blog">Blog</NavigationItem>
        <NavigationItem path="/contact">Contact Us</NavigationItem>
        {/* Login */}
        {isLogin ? <button>Login</button> : <button>Logout</button>}
      </div>
    </div>
  );
};
export default Navbar;

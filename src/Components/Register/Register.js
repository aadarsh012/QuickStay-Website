import classes from "./Register.module.css";
import Input from "../../UI/Input/Input";
import { useState } from "react";
import firebase from "../../firebase";

const Register = (props) => {
  const [phone, setPhone] = useState("+91");
  const [otp, setOtp] = useState(null);
  const [name, setName] = useState("");
  const [numberError, setNumberError] = useState("");
  const [nameError, setNameError] = useState("");
  const [otpError, setOtpError] = useState("");
  const [isOtp, setIsOtp] = useState(false);
  const [response, setResponse] = useState(null);

  const loginHandler = async (event) => {
    event.preventDefault();
    let reCaptcha = new firebase.auth.RecaptchaVerifier("reCaptcha");
    let number = phone;
    try {
      if (phone.length != 13) {
        setNumberError("Invalid Number.");
        setTimeout(() => {
          setNumberError("");
        }, 3000);
      } else if (!name) {
        setNameError("Please Provide your Name.");
        setTimeout(() => {
          setNameError("");
        }, 3000);
      } else {
        const res = await firebase.auth().signInWithPhoneNumber(number, reCaptcha);
        setResponse(res);
        setIsOtp(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const otpHandler = async (event) => {
    event.preventDefault();

    if (!otp) {
      setOtpError("Please Enter OTP.");
      setTimeout(() => {
        setOtpError("");
      }, 3000);
    } else {
      const result = await response.confirm(otp);
      console.log(result);
      if (!result.user) {
        setOtp("Invalid OTP.");
        setTimeout(() => {
          setOtpError("");
        }, 3000);
      } else {
        localStorage.setItem("token", result.user.uid);
        setIsOtp(false);
        window.location.reload(false);
      }
    }
  };

  return (
    <div className={classes.Register}>
      {isOtp ? (
        <>
          <h2>Confirm OTP</h2>
          <Input
            label="Enter OTP"
            type="number"
            changed={(event) => setOtp(event.target.value)}
            value={otp}
            error={otpError}
          />
          <button onClick={(event) => otpHandler(event)}>Confirm OTP</button>
        </>
      ) : (
        <>
          <h2>Register</h2>
          <Input
            label="Name"
            type="text"
            changed={(event) => setName(event.target.value)}
            value={name}
            error={nameError}
          />
          <Input
            label="Phone"
            type="text"
            changed={(event) => setPhone(event.target.value)}
            value={phone}
            error={numberError}
          />
          <button onClick={(event) => loginHandler(event)}>Send OTP</button>
          <div id="reCaptcha"></div>
        </>
      )}
    </div>
  );
};
export default Register;

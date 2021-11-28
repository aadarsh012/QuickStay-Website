import classes from "./Register.module.css";
import Input from "../../UI/Input/Input";
import { useState } from "react";
const Register = (props) => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  return (
    <div className={classes.Register}>
      <h2>Register</h2>
      <Input
        label="Name"
        type="text"
        changed={(event) => setName(event.target.value)}
        value={name}
      />
      <Input
        label="Phone"
        type="number"
        changed={(event) => setPhone(event.target.value)}
        value={phone}
      />
      <button onClick>Register</button>
    </div>
  );
};
export default Register;

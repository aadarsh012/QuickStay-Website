import classes from "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";
import { useEffect, useState } from "react";

const Modal = (props) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (props.show) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [props.show, showModal]);

  return (
    <>
      <Backdrop show={props.show} click={props.clicked} />
      <div className={showModal ? "Modal open" : "Modal"}>{props.children}</div>
    </>
  );
};
export default Modal;

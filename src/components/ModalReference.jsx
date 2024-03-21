import classes from "./ModalReference.module.scss";
import ReactDOM from "react-dom";
import innoReg from "../assets/company-logos/innoreg-reference.jpg";
import buttonClose from "../assets/close-reference.png";
import { useState, forwardRef, useImperativeHandle } from "react";

const ModalReference = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(true);

  useImperativeHandle(ref, () => ({
    openModal() {
      setIsOpen(true);
    },
  }));

  if (!isOpen) {
    return null;
  }
  const handleCloseClick = () => {
    setIsOpen(false);
  };

  return ReactDOM.createPortal(
    <>
      <img
        className={classes["button-close"]}
        src={buttonClose}
        alt="close"
        onClick={handleCloseClick}
      />
      <div className={classes["modal-reference"]}>
        <div className={classes["modal-reference__content"]}>
          <img className={classes["reference"]} src={innoReg} alt="reference" />
        </div>
      </div>
      <div className={classes["shadow"]}></div>
    </>,
    document.getElementById("modal-reference")
  );
});

ModalReference.displayName = "ModalReference";

export default ModalReference;

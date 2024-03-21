import classes from "./ModalReference.module.scss";
import ReactDOM from "react-dom";
import innoReg from "../assets/company-logos/innoreg-reference.jpg";
import buttonClose from "../assets/close-reference.png";

const ModalReference = () => {
  return ReactDOM.createPortal(
    <>
      <img className={classes["button-close"]} src={buttonClose} alt="close" />
      <div className={classes["modal-reference"]}>
        <div className={classes["modal-reference__content"]}>
          <img className={classes["reference"]} src={innoReg} alt="reference" />
        </div>
      </div>
      <div className={classes["shadow"]}></div>
    </>,
    document.getElementById("modal-reference")
  );
};

export default ModalReference;

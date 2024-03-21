import classes from "./ModalReference.module.scss";
import ReactDOM from "react-dom";
import innoReg from "../assets/company-logos/innoreg-reference.jpg";

const ModalReference = () => {
  return ReactDOM.createPortal(
    <div className={classes["modal-reference"]}>
      <div className={classes["modal-reference__content"]}></div>
      <img className={classes["reference"]} src={innoReg} alt="reference" />
    </div>,
    document.getElementById("modal-reference")
  );
};

export default ModalReference;

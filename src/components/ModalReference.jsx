import classes from "./ModalReference.module.scss";
import ReactDOM from "react-dom";
import buttonClose from "../assets/close-reference.png";
import { useState, forwardRef, useImperativeHandle } from "react";

const ModalReference = forwardRef(({ image }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal(event) {
    event.stopPropagation();
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  useImperativeHandle(ref, () => ({
    openModal: openModal,
    closeModal: closeModal,
  }));

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <img
        className={classes["button-close"]}
        src={buttonClose}
        alt="close"
        onClick={closeModal}
      />
      <div className={classes["modal-reference"]}>
        <div className={classes["modal-reference__content"]}>
          <img className={classes["reference"]} src={image} alt="reference" />
        </div>
      </div>
      <div className={classes["shadow"]}></div>
    </>,
    document.getElementById("modal-reference")
  );
});

ModalReference.displayName = "ModalReference";

export default ModalReference;

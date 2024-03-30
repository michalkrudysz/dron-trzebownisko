import { createPortal } from "react-dom";
import { useState, forwardRef, useImperativeHandle } from "react";
import classes from "./PhotoModal.module.scss";
import buttonClose from "../assets/close-reference.png";

const PhotoModal = forwardRef(({ imageData }, ref) => {
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

  return createPortal(
    <>
      <img
        className={classes["button-close"]}
        onClick={closeModal}
        src={buttonClose}
        alt="close"
      />
      <div className={classes.modal}>
        <div className={classes["modal-content"]}>
          <div className={classes.photo}>
            <img src={imageData.img} alt="zdjęcie" />
          </div>
          <div className={classes["photo-description"]}>
            <div className={classes["photo-description-title"]}>
              {imageData.alt}
            </div>
            <div className={classes["photo-date"]}>
              Rok wykonania zdjęcia: {imageData.dateOfPhoto}
            </div>
            <div className={classes.curiosity}>Ciekawostka</div>
            <div className={classes["photo-description-text"]}>
              {imageData.curiosityPL}
            </div>
          </div>
        </div>
      </div>
      <div className={classes.shadow}></div>
    </>,
    document.getElementById("photo")
  );
});

PhotoModal.displayName = "PhotoModal";
export default PhotoModal;

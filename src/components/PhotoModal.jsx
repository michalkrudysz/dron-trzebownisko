import React from "react";
import { createPortal } from "react-dom";
import { useState, forwardRef, useImperativeHandle } from "react";
import { useLanguage } from "../store/language/languageContext";
import classes from "./PhotoModal.module.scss";
import buttonClose from "../assets/close-reference.png";

const PhotoModal = forwardRef(({ imageData }, ref) => {
  const { language } = useLanguage();
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
            <img
              src={imageData.img}
              alt={language === "PL" ? imageData.alt : imageData.altEN}
            />
          </div>
          <div className={classes["photo-description"]}>
            <div className={classes["photo-description-title"]}>
              {language === "PL" ? imageData.alt : imageData.altEN}
            </div>
            <div className={classes["photo-date"]}>
              {language === "PL"
                ? `Rok wykonania zdjęcia:`
                : `Year the photo was taken:`}{" "}
              {imageData.dateOfPhoto}
            </div>
            <div className={classes.curiosity}>
              {language === "PL" ? "Ciekawostka" : "Fun fact"}
            </div>
            <div className={classes["photo-description-text"]}>
              {language === "PL"
                ? imageData.curiosityPL
                : imageData.curiosityEN}
            </div>
            {imageData.sources &&
              imageData.sources.map((source, index) => (
                <div key={index} className={classes.source}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer">
                    {language === "PL"
                      ? `Źródło: ${source.nameSource}`
                      : `Source: ${source.nameSource}`}
                  </a>
                </div>
              ))}
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

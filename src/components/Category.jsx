import classes from "./Category.module.scss";
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";
import PhotoModal from "./PhotoModal";
import { useRef } from "react";
import { useLanguage } from "../store/language/languageContext";
import { useState } from "react";

export default function Category({ materials }) {
  const { language } = useLanguage();
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const photosLength = materials.materials.length;
  const currentPhoto = materials.materials[currentPhotoIndex];

  const photoModal = useRef();

  const clickButton = (whichButton) => {
    if (whichButton === "left") {
      setCurrentPhotoIndex(
        (prevIndex) => (prevIndex - 1 + photosLength) % photosLength
      );
    } else if (whichButton === "right") {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photosLength);
    }
  };

  const openPhoto = () => {
    photoModal.current.openModal();
  };

  return (
    <>
      <PhotoModal ref={photoModal} imageData={currentPhoto} />
      <div className={classes.category}>
        <img
          onClick={() => clickButton("left")}
          className={classes["left-arrow"]}
          src={leftArrow}
          alt="Button on the left"
        />
        <img
          onClick={() => clickButton("right")}
          className={classes["right-arrow"]}
          src={rightArrow}
          alt="Button on the right"
        />
        <div className={classes["category-item"]}>
          <img
            onClick={() => openPhoto()}
            className={classes.item}
            src={currentPhoto.imgUrl}
            alt={language === "PL" ? currentPhoto.altPL : currentPhoto.altEN}
          />
        </div>
      </div>
    </>
  );
}

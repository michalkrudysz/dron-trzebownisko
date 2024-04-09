import classes from "./Photos.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useLanguage } from "../store/language/languageContext";
import PhotoModal from "./PhotoModal";
import { useRef } from "react";
import { useState } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Photos({ photos }) {
  const { language } = useLanguage();
  const [currentPhoto, setCurrentPhoto] = useState(null);
  const photoModal = useRef();

  const openPhoto = (photo) => {
    setCurrentPhoto(photo);
    photoModal.current.openModal();
  };

  return (
    <>
      <PhotoModal ref={photoModal} imageData={currentPhoto} />
      <div className={classes.top}>
        <h1 className={classes.title}>Zdjęcia warte uwagi</h1>
      </div>
      <div className={classes.photos}>
        {photos.materials.map((photo, index) => (
          <div key={index} className={classes["photo-box"]}>
            <div className={classes.photo}>
              <LazyLoadImage
                onClick={() => openPhoto(photo)}
                src={photo.imgUrl}
                alt={language === "PL" ? photo.altPL : photo.altEN}
                effect="blur"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

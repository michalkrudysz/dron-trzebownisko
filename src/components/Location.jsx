import classes from "./Location.module.scss";
import PhotoModal from "./PhotoModal";
import { useLanguage } from "../store/language/languageContext";
import { useRef, useState } from "react";

export default function Location({ location }) {
  const { language } = useLanguage();
  const photoModal = useRef();

  const [selectedLocation, setSelectedLocation] = useState(null);

  const openPhoto = (material) => {
    setSelectedLocation(material);
    photoModal.current.openModal();
  };
  return (
    <>
      <PhotoModal ref={photoModal} imageData={selectedLocation} />
      <div className={classes.container}>
        <div className={classes.top}>
          <div className={classes.left}>
            <div className={classes.title}>{location.name}</div>
          </div>
          <div className={classes.right}>
            <div className={classes.description}>
              {language === "PL"
                ? location.descriptionPL
                : location.descriptionEN}
            </div>
          </div>
        </div>
        <div className={classes.bottom}>
          <div className={classes.header}>
            {language === "PL" ? "Dostępne materiały" : "Available materials"}
          </div>
          <div className={classes.materials}>
            <ul>
              {location.Materials.map((material, index) => (
                <li onClick={() => openPhoto(material)} key={index}>
                  <img
                    src={material.img}
                    alt={language === "PL" ? material.alt : material.altEN}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

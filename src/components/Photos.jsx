import classes from "./Photos.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useLanguage } from "../store/language/languageContext";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Photos({ photos }) {
  const { language } = useLanguage();
  return (
    <>
      <div className={classes.top}>
        <h1 className={classes.title}>Zdjęcia warte uwagi</h1>
      </div>
      <div className={classes.photos}>
        {photos.materials.map((photo, index) => (
          <div key={index} className={classes["photo-box"]}>
            <div className={classes.photo}>
              <LazyLoadImage
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

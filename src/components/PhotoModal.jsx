import { createPortal } from "react-dom";
import classes from "./PhotoModal.module.scss";
import photo from "../assets/municipality-of-trzebownisko/laka/church-2019.png";
import buttonClose from "../assets/close-reference.png";
export default function PhotoModal({}) {
  return createPortal(
    <>
      <img className={classes["button-close"]} src={buttonClose} alt="close" />
      <div className={classes.modal}>
        <div className={classes["modal-content"]}>
          <div className={classes.photo}>
            <img src={photo} alt="zdjęcie" />
          </div>
          <div className={classes["photo-description"]}>
            <div className={classes["photo-description-title"]}>
              Kościół pw. Dobrego Pasterza
            </div>
            <div className={classes["photo-date"]}>
              Rok wykonania zdjęcia: 2019
            </div>
            <div className={classes.curiosity}>Ciekawostka</div>
            <div className={classes["photo-description-text"]}>
              Port lotniczy Rzeszów-Jasionka był pierwszym w Polsce, który
              wprowadził bezkontaktowe bramki bezpieczeństwa.
            </div>
          </div>
        </div>
      </div>
      <div className={classes.shadow}></div>
    </>,
    document.getElementById("photo")
  );
}

import { createPortal } from "react-dom";
import classes from "./PhotoModal.module.scss";
import photo from "../assets/municipality-of-trzebownisko/laka/church-2019.png";

export default function PhotoModal({}) {
  return createPortal(
    <>
      <div className={classes.modal}>
        <div className={classes["modal-content"]}>
          <div className={classes.photo}>
            <img src={photo} alt="zdjęcie" />
          </div>
        </div>
      </div>
      <div className={classes.shadow}></div>
    </>,
    document.getElementById("photo")
  );
}

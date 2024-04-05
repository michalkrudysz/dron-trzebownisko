import ReactDOM from "react-dom";
import classes from "./Loading.module.scss";
import droneBody from "../assets/loading/drone-body.png";
import propeller from "../assets/loading/propeller.png";
import { useLanguage } from "../store/language/languageContext";

const currentYear = new Date().getFullYear();
export default function Loading() {
  const { language } = useLanguage();

  return ReactDOM.createPortal(
    <div className={classes.loading}>
      <div className={classes["loading-box"]}>
        <div className={`${classes["drone-propeller"]} ${classes["top-left"]}`}>
          <img src={propeller} alt="Drone's propeller - top left" />
        </div>
        <div
          className={`${classes["drone-propeller"]} ${classes["top-right"]}`}
        >
          <img src={propeller} alt="Drone's propeller - top right" />
        </div>
        <div className={classes["drone-body"]}>
          <img src={droneBody} alt="Drone's body" />
        </div>
        <div
          className={`${classes["drone-propeller"]} ${classes["bottom-left"]}`}
        >
          <img src={propeller} alt="Drone's propeller - bottom left" />
        </div>
        <div
          className={`${classes["drone-propeller"]} ${classes["bottom-right"]}`}
        >
          <img src={propeller} alt="Drone's propeller - bottom right" />
        </div>
      </div>
      <div className={classes["loading-text"]}>
        {language === "PL" ? "Ładowanie..." : "Loading..."}
      </div>
      <div className={classes["description"]}>
        {language === "PL"
          ? `Aby zwiększyć Państwa komfort korzystania ze strony, wymagane jest
        wcześniejsze załadowanie niektórych elementów.`
          : `To enhance your comfort of using the site, it is required to pre-load some elements.`}
      </div>
      <footer className={classes["footer"]}>
        <p>{`© 2017 - ${currentYear} DronTrzebownisko.pl`}</p>
      </footer>
    </div>,
    document.getElementById("loading")
  );
}

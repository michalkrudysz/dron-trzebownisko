import classes from "./Film.module.scss";
import waran from "../assets/portfolio/waran-photo.png";

export default function Film() {
  return (
    <div className={classes["video-box"]}>
      <img src={waran} alt="Waran"></img>
    </div>
  );
}

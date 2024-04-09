import classes from "./Photos.module.scss";
import cyprus from "../assets/portfolio/cyprus-2019-2.png";
export default function Photos() {
  return (
    <>
      <div className={classes.top}>
        <h1 className={classes.title}>Zdjęcia warte uwagi</h1>
      </div>
      <div className={classes["photos"]}>
        <div className={classes["photo-box"]}>
          <div className={classes.photo}>
            <img src={cyprus} alt="Photo by Toa Heftiba on Unsplash" />
          </div>
        </div>
        <div className={classes["photo-box"]}>
          <div className={classes.photo}>
            <img src={cyprus} alt="Photo by Toa Heftiba on Unsplash" />
          </div>
        </div>
        <div className={classes["photo-box"]}>
          <div className={classes.photo}>
            <img src={cyprus} alt="Photo by Toa Heftiba on Unsplash" />
          </div>
        </div>
        <div className={classes["photo-box"]}>
          <div className={classes.photo}>
            <img src={cyprus} alt="Photo by Toa Heftiba on Unsplash" />
          </div>
        </div>
      </div>
    </>
  );
}

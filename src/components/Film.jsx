import classes from "./Film.module.scss";

export default function Film({ material, isReversed }) {
  return (
    <div
      className={`${classes["movies"]} ${isReversed ? classes.reversed : ""}`}
    >
      <div className={classes.left}>
        <div className={classes.description}>
          <div className={classes["title-box"]}>{material.titleBox}</div>
          <div className={classes["text-box"]}>{material.textBox}</div>
          <p className={classes.text}>{material.text}</p>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes["video-box"]}>
          <img src={material.src} alt={material.alt}></img>
        </div>
      </div>
    </div>
  );
}

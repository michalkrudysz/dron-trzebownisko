import classes from "./Category.module.scss";
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";
import test from "../assets/portfolio/cyprus-2019-4.png";

export default function Category() {
  return (
    <div className={classes.category}>
      <img className={classes["left-arrow"]} src={leftArrow} alt="test" />
      <img className={classes["right-arrow"]} src={rightArrow} alt="test" />

      <div className={classes["category-item"]}>
        <img className={classes.item} src={test} alt="test" />
      </div>
    </div>
  );
}

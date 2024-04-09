import classes from "./Film.module.scss";
import waran from "../assets/portfolio/waran-photo.png";

export default function Film() {
  return (
    <div className={classes["movies"]}>
      <div className={classes.left}>
        <div className={classes.description}>
          <div className={classes["title-box"]}>Film korporacyjny</div>
          <div className={classes["text-box"]}>
            Film korporacyjny to narzędzie komunikacji marketingowej
            wykorzystywane przez firmy i organizacje do promowania ich marki,
            produktów lub usług. Taki film zazwyczaj przedstawia wartości firmy,
            jej misję, kulturę organizacyjną oraz kluczowe kompetencje i
            osiągnięcia. Może również pokazywać pracowników, procesy
            produkcyjne, technologie i case studies zadowolonych klientów.
          </div>
          <p className={classes.text}>Rok produkcji: 2019</p>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes["video-box"]}>
          <img src={waran} alt="Waran"></img>
        </div>
      </div>
    </div>
  );
}

import classes from "./FilmProductions.module.scss";
import Film from "./Film";

export default function FilmProductions() {
  return (
    <>
      <div className={classes.top}>
        <h1 className={classes.title}>Własne produkcje</h1>
      </div>
      <div className={classes["film-productions"]}>
        <Film />
        <Film />
        <Film />
      </div>
    </>
  );
}

import classes from "./Portfolio.module.scss";
import SkillBar from "./SkillBar";
import Category from "./Category";
import FilmEditing from "./FilmEditing";
import FilmProductions from "./FilmProductions";
import Photos from "./Photos";

export default function Portfolio() {
  return (
    <>
      <div className={classes["top"]}>
        <div className={classes["portfolio"]}>
          <div className={classes["left"]}>
            <h1 className={classes["text"]}>
              Moja pasja do dokumentowania niezapomnianych chwil, zarówno w
              trakcie podróży, jak i w codziennym życiu, zaowocowała stworzeniem
              obszernej kolekcji. Portfolio to także przestrzeń, w której
              prezentuję moje doświadczenie w tworzeniu relacji z wydarzeń,
              filmów korporacyjnych, spotów czy dokumentacji inwestycji. Dzięki
              współpracy z różnymi firmami, szczególnie przy tworzeniu filmów
              ślubnych, zgromadziłem portfolio montaży filmowych, liczące
              dziesiątki zrealizowanych projektów.
            </h1>
            <div className={classes["skills-box"]}>
              <div className={classes.skills}>
                <SkillBar
                  skill="Adobe Premiere Pro"
                  percentage={95}
                  color="#0455BF"
                />
                <SkillBar
                  skill="Adobe Photoshop"
                  percentage={70}
                  color="#3084F2"
                />
                <SkillBar
                  skill="Adobe Auditiono"
                  percentage={50}
                  color="#5096F2"
                />
                <SkillBar
                  skill="Adobe After Effects"
                  percentage={30}
                  color="#7EB0F2"
                />
              </div>
            </div>
          </div>
          <div className={classes["right"]}>
            <Category />
          </div>
        </div>
      </div>
      <FilmEditing />
      <FilmProductions />
      <Photos />
    </>
  );
}

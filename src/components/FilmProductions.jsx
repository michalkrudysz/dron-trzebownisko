import classes from "./FilmProductions.module.scss";
import Film from "./Film";
import { useLanguage } from "../store/language/languageContext";

export default function FilmProductions({ content }) {
  const { language } = useLanguage();

  let substance = content.PL;
  if (language === "EN") {
    substance = content.EN;
  }

  return (
    <>
      <div className={classes.top}>
        <h1 className={classes.title}>{substance.title}</h1>
      </div>
      <div className={classes["film-productions"]}>
        {substance.materials.map((material, index) => (
          <Film key={index} material={material} />
        ))}
      </div>
    </>
  );
}

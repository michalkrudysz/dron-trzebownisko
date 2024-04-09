import classes from "./FilmEditing.module.scss";
import screenshotFromThePremiereProProject from "../assets/portfolio/screenshot-from-the-premiere-pro-project.png";
import { useLanguage } from "../store/language/languageContext";

export default function FilmEditing({ content }) {
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
      <div className={classes["film-editing"]}>
        <div className={classes.left}>
          <div className={classes["photo-box"]}>
            <div className={classes.photo}>
              <img
                src={screenshotFromThePremiereProProject}
                alt="Screenshot from the Premiere Pro project"
              />
            </div>
          </div>
        </div>
        <div className={classes.right}>
          <h1 className={classes.text}>{substance.content}</h1>
          <h2>{substance.h2}</h2>
          <ul className={classes["list"]}>
            <li>{substance.liFirst}</li>
            <li>{substance.liSecond}</li>
            <li>{substance.liThird}</li>
            <li>{substance.liFourth}</li>
            <li>{substance.liFifth}</li>
            <li>{substance.liSixth}</li>
          </ul>
        </div>
      </div>
      <div className={classes.materials}>
        <h2 className={classes.info}>{substance.info}</h2>
        <div className={classes["video-box"]}>
          <div className={classes.video}>
            <img src={substance.video[0].src} alt={substance.video[0].alt} />
          </div>
          <div className={classes.video}>
            <img src={substance.video[1].src} alt={substance.video[1].alt} />
          </div>
        </div>
      </div>
    </>
  );
}

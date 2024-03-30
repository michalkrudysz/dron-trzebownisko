import classes from "./Location.module.scss";
import PhotoModal from "./PhotoModal";
import { useLanguage } from "../store/language/languageContext";

export default function Location({ location }) {
  console.log(location);

  const { language } = useLanguage();

  return (
    <>
      <PhotoModal />
      <div className={classes.container}>
        <div className={classes.top}>
          <div className={classes.left}>
            <div className={classes.title}>{location.name}</div>
          </div>
          <div className={classes.right}>
            <div className={classes.description}>{location.descriptionPL}</div>
          </div>
        </div>
        <div className={classes.bottom}>
          <div className={classes.header}>Dostępne materiały</div>
          <div className={classes.materials}>
            <ul>
              {location.Materials.map((material, index) => (
                <li key={index}>
                  <img src={material.img} alt="zdjęcie" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

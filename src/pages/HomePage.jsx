import { useEffect, useRef, useState, useCallback } from "react";
import { useLanguage } from "../store/language/languageContext";
import HOME_PAGE_CONTENT from "../../data/homePageContent";
import REFERENCES from "../../data/references";
import classes from "./HomePage.module.scss";
import { Link } from "react-router-dom";
import ReferenceBox from "../components/ReferenceBox";
import ModalReference from "../components/ModalReference";
import linkStyles from "../components/NavLink.module.scss";
import { getRandomIndexes } from "../utils/getRandomIndexes";
import { handleModalReference } from "../utils/handleModalReference";

const currentYear = new Date().getFullYear();

export default function HomePage() {
  const { language } = useLanguage();
  const [indexes, setIndexes] = useState(() =>
    getRandomIndexes(REFERENCES.length, 3)
  );
  const [referenceImage, setReferenceImage] = useState(null);
  const modalReferenceRef = useRef();

  const refreshIndexes = useCallback(() => {
    setIndexes(getRandomIndexes(REFERENCES.length, 3));
  }, []);

  useEffect(() => {
    const intervalId = setInterval(refreshIndexes, 2500);
    return () => clearInterval(intervalId);
  }, [refreshIndexes]);

  const content = HOME_PAGE_CONTENT[language] || HOME_PAGE_CONTENT.PL;

  const handleReferenceClick = (reference) => {
    handleModalReference(
      setReferenceImage,
      modalReferenceRef,
      reference.referenceImage
    );
  };

  return (
    <>
      <div className={classes["home-page"]}>
        <section className={classes.section}>
          <div className={classes["left-container"]}>
            <h1 className={classes.h1}>
              <span className={classes["highlighted-text"]}>
                {content.greeting.split(" ")[0]}
              </span>
              {content.greeting.split(" ").slice(1).join(" ")}
            </h1>
            <h2 className={classes.h2}>{content.description}</h2>
            <div className={classes["button-container"]}>
              <Link to="/portfolio" className={linkStyles.link}>
                {content.buttons.portfolio}
              </Link>
              <Link
                to="/discover"
                className={`${linkStyles.link} ${linkStyles.linkExplore}`}
              >
                {content.buttons.discover}
              </Link>
            </div>
          </div>
          <div className={classes["right-container"]}>
            <ModalReference image={referenceImage} ref={modalReferenceRef} />
            {indexes.map((index) => (
              <div
                key={REFERENCES[index].id}
                onClick={() => handleReferenceClick(REFERENCES[index])}
                className={
                  classes[["first", "second", "third"][indexes.indexOf(index)]]
                }
              >
                <ReferenceBox {...REFERENCES[index]} />
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className={classes["shadow"]}></div>
      <footer
        className={classes.footer}
      >{`© 2017 - ${currentYear} Michał Krudysz`}</footer>
    </>
  );
}

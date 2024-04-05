import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../store/language/languageContext";
import { usePage } from "../store/page/pageContext";
import REFERENCES from "../../data/references";
import HOME_PAGE_CONTENT from "../../data/homePageContent";
import classes from "./HomePage.module.scss";
import Button from "./Button";
import ReferenceBox from "./ReferenceBox";
import ModalReference from "./ModalReference";

const contentByLanguage = HOME_PAGE_CONTENT;

const getRandomIndexes = (length, count) => {
  let indexes = [];
  while (indexes.length < count) {
    let index = Math.floor(Math.random() * length);
    if (!indexes.includes(index)) {
      indexes.push(index);
    }
  }
  return indexes;
};

export default function HomePage() {
  const { language } = useLanguage();
  const { changePage } = usePage();
  const [indexes, setIndexes] = useState(
    getRandomIndexes(REFERENCES.length, 3)
  );
  const [referenceImage, setReferenceImage] = useState();

  const modalReferenceRef = useRef();

  const handleModalReference = (image) => {
    setReferenceImage(image);
    modalReferenceRef.current.openModal();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexes(getRandomIndexes(REFERENCES.length, 3));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const { greeting, description, buttons } =
    contentByLanguage[language] || contentByLanguage.PL;

  return (
    <>
      <div className={classes["home-page"]}>
        <section className={classes.section}>
          <div className={classes["left-container"]}>
            <h1 className={classes.h1}>
              <span className={classes["highlighted-text"]}>
                {greeting.split(" ")[0]}
              </span>{" "}
              {greeting.split(" ").slice(1).join(" ")}
            </h1>
            <h2 className={classes.h2}>{description}</h2>
            <div className={classes["button-container"]}>
              <Button onClick={() => changePage("portfolio")}>
                {buttons.portfolio}
              </Button>
              <Button
                onClick={() => changePage("exploreTheMunicipality")}
                kind={false}
              >
                {buttons.discover}
              </Button>
            </div>
          </div>

          <div className={classes["right-container"]}>
            <ModalReference image={referenceImage} ref={modalReferenceRef} />
            {indexes.map((index) => {
              const reference = REFERENCES[index];
              return (
                <div
                  onClick={() => handleModalReference(reference.referenceImage)}
                  key={reference.id}
                  className={
                    classes[
                      ["first", "second", "third"][indexes.indexOf(index)]
                    ]
                  }
                >
                  <ReferenceBox
                    id={reference.id}
                    logo={reference.logo}
                    companyName={reference.companyName}
                    descriptionPL={reference.descriptionPL}
                    descriptionEN={reference.descriptionEN}
                  />
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <div className={classes["shadow"]}></div>
      <footer className={classes.footer}>&copy; Michał Krudysz 2024</footer>
    </>
  );
}

import { useState, useRef } from "react";
import { useLanguage } from "../store/language/languageContext";
import REFERENCES from "../../data/references";
import HOME_PAGE_CONTENT from "../../data/homePageContent";
import classes from "./HomePage.module.scss";
import Button from "../components/Button";
import ReferenceBox from "../components/ReferenceBox";
import ModalReference from "../components/ModalReference";

const currentYear = new Date().getFullYear();

export default function HomePage() {
  const [referenceImage, setReferenceImage] = useState(null);
  const modalReferenceRef = useRef();
  const { language } = useLanguage();

  const handleModalReference = (imageSrc) => {
    setReferenceImage(imageSrc);
    if (modalReferenceRef.current) {
      modalReferenceRef.current.openModal();
    }
  };

  const { greeting, description, buttons } =
    HOME_PAGE_CONTENT[language] || HOME_PAGE_CONTENT.PL;

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

  const indexes = getRandomIndexes(REFERENCES.length, 3);

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
              <Button>{buttons.portfolio}</Button>
              <Button kind={false}>{buttons.discover}</Button>
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
      <footer
        className={classes.footer}
      >{`© 2017 - ${currentYear} Michał Krudysz`}</footer>
    </>
  );
}

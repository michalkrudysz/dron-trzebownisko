import { useState, useRef } from "react";
import classes from "./References.module.scss";
import { useLanguage } from "../store/language/languageContext";
import ReferenceBox from "../components/ReferenceBox";
import REFERENCES from "../../data/references";
import REFERENCES_CONTENT from "../../data/referencesContent";
import ModalReference from "../components/ModalReference";

export default function References() {
  const [referenceImage, setReferenceImage] = useState(null);
  const modalReferenceRef = useRef();
  const { language } = useLanguage();

  const handleModalReference = (imageSrc) => {
    setReferenceImage(imageSrc);
    if (modalReferenceRef.current) {
      modalReferenceRef.current.openModal();
    }
  };

  const contentByLanguage =
    REFERENCES_CONTENT[language] || REFERENCES_CONTENT.PL;
  const { left, leftInfo, rightDescription } = contentByLanguage;

  return (
    <>
      <div className={classes.headline}>
        <div className={classes.container}>
          <div className={classes.left}>
            <h1>{left}</h1>
            <p>{leftInfo}</p>
          </div>
          <div className={classes.right}>
            <h2>{rightDescription}</h2>
          </div>
        </div>
      </div>
      <ul className={classes.references}>
        <ModalReference image={referenceImage} ref={modalReferenceRef} />
        {REFERENCES.map((reference) => (
          <li
            key={reference.id}
            onClick={() => handleModalReference(reference.referenceImage)}
          >
            <ReferenceBox
              id={reference.id}
              logo={reference.logo}
              companyName={reference.companyName}
              descriptionPL={reference.descriptionPL}
              descriptionEN={reference.descriptionEN}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

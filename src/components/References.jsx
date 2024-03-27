import classes from "./References.module.scss";
import { useLanguage } from "../store/language/languageContext";
import { useState, useRef } from "react";
import ReferenceBox from "./ReferenceBox";
import REFERENCES from "../../data/references";
import ModalReference from "./ModalReference";

export default function References() {
  const { language } = useLanguage();

  const [referenceImage, setReferenceImage] = useState();

  const modalReferenceRef = useRef();

  const handleModalReference = (image) => {
    setReferenceImage(image);
    modalReferenceRef.current.openModal();
  };

  return (
    <>
      <div className={classes.headline}>
        <div className={classes.container}>
          <div className={classes.left}>
            <h1>
              {language === "PL"
                ? "Co piszą o mnie"
                : "What they write about me"}
            </h1>
            <p>
              {language === "PL"
                ? `(Kliknięcie na interesującą Cię referencję spowoduje wyświetlenie
            dokumentu)`
                : `(Clicking on a reference that interests you will display the document)`}
            </p>
          </div>
          <div className={classes.right}>
            <h2>
              {language === "PL"
                ? `Można zauważyć, że wszystkie zebrane referencje pochodzą z roku
            2023, co wynika z prostego faktu: nigdy wcześniej nie zbierałem
            referencji po zakończonych projektach. Zmiana nastąpiła, gdy w mojej
            głowie zrodził się pomysł odświeżenia tej witryny. Wówczas zwróciłem
            się z prośbą o referencje do firm, z którymi współpracowałem i które
            wciąż pozostawały w kontakcie ze mną. W świecie, gdzie każdy kadr,
            ścieżka dźwiękowa czy dobrany kolor niesie za sobą znaczenie i
            opowiada historię, nic tak nie świadczy o zaangażowaniu, jak opinie
            osób, dla których miałem przyjemność tworzyć. Zdobyte referencje
            stanowią dla mnie przede wszystkim świadectwo pasji i zaangażowania,
            które wkładałem w każdy projekt.`
                : `You may notice that all the collected references come from 2023, which is due to a simple fact: I never collected references after completed projects. The change occurred when the idea of refreshing this website came to my mind. Then, I turned to the companies I worked with and that still remained in contact with me for a reference. In a world where every frame, sound track, or chosen color carries meaning and tells a story, nothing so clearly testifies to commitment as the opinions of the people I had the pleasure to create for. The references I have obtained are, above all, a testament to the passion and commitment that I have put into every project.`}
            </h2>
          </div>
        </div>
      </div>
      <div className={classes.references}>
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
      </div>
    </>
  );
}

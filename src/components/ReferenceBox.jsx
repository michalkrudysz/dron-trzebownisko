import React from "react";
import classes from "./ReferenceBox.module.scss";
import gminaTrzebownisko from "../assets/company-logos/gmina-trzebownisko.png";
import waran from "../assets/company-logos/waran.png";
import innoreg from "../assets/company-logos/innoreg.png";

const references = [
  {
    id: 1,
    logo: gminaTrzebownisko,
    companyName: "Urząd Gminy Trzebownisko",
    descriptionPL: `"Na szczególne uznanie zasługuje stworzenie w 2018 roku spotu promocyjnego dla Gminy, dostępnego na platformie YouTube. Z głębokim zrozumieniem potrzeb społeczności, Pan Michał Krudysz uwiecznił naszą gminę w różnych aspektach..."`,
    descriptionEN: `Special recognition deserves the creation of a promotional video for the Municipality in 2018, available on the YouTube platform. With a deep understanding of community needs, Mr. Michał Krudysz immortalized our municipality in various aspects...`,
  },
  {
    id: 2,
    logo: waran,
    companyName: "Waran Regały",
    descriptionPL: `"Współpraca na każdym etapie realizacji zlecenia przebiegała w sposób wzorowy. Pan Michał reagował na bieżąco na wszelkie nasze sugestie dotyczące projektu, jednocześnie sam wykazywał się dużą kreatywnością i zaangażowaniem w tworzeniu jego treści."`,
    descriptionEN: `The cooperation at every stage of the order execution was exemplary. Mr. Michał responded promptly to all our suggestions regarding the project, while also showing great creativity and commitment in creating its content.`,
  },
  {
    id: 3,
    logo: innoreg,
    companyName: "Innoreg Sp. z o.o.",
    descriptionPL: `"Pan Michał wykazał się nie tylko zaangażowaniem, ale również strategicznym myśleniem w zakresie logistyki projektu. Dla zapewnienia płynności prac i efektywności realizacji...
    "`,
    descriptionEN: `Mr. Michał demonstrated not only commitment but also strategic thinking in terms of the project's logistics. To ensure the smoothness of operations and efficiency of execution...`,
  },
];

export default function ReferenceBox({ id, language }) {
  const reference = references.find((ref) => ref.id === id);

  const getDescription = (language) => {
    return language === "PL"
      ? reference.descriptionPL
      : reference.descriptionEN;
  };

  if (reference) {
    return (
      <div className={classes["reference-box"]}>
        <div className={classes.avatar}>
          <img src={reference.logo} alt={reference.companyName} />
        </div>
        <div className={classes["reference-content"]}>
          <div className={classes["reference-header"]}>
            {reference.companyName}
          </div>
          <div className={classes["reference-text"]}>
            {getDescription(language)}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

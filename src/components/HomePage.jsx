import classes from "./HomePage.module.scss";
import Button from "./Button";
import ReferenceBox from "./ReferenceBox";
import references from "../references.js";
import gminaTrzebownisko from "../assets/company-logos/gmina-trzebownisko.png";

const contentByLanguage = {
  PL: {
    greeting: "Cześć! Nazywam się Michał",
    description:
      "Od 2017 do 2021 roku tworzyłem drontrzebownisko.pl, by z innej perspektywy pokazać piękno naszej Gminy. Zapraszam Cię do wspólnego odkrywania jej zakątków oraz historii mojego projektu.",
    buttons: {
      portfolio: "Portfolio",
      discover: "Odkryj gminę",
    },
  },
  EN: {
    greeting: "Hello! My name is Michał",
    description:
      "From 2017 to 2021, I created drontrzebownisko.pl to show the beauty of our Municipality from a different perspective. I invite you to explore its various places and the history of my project together.",
    buttons: {
      portfolio: "Portfolio",
      discover: "Explore the Municipality",
    },
  },
};

export default function HomePage({ language }) {
  const { greeting, description, buttons } =
    contentByLanguage[language] || contentByLanguage.PL;

  return (
    <div className={classes["home-page"]}>
      {" "}
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
          {references.slice(0, 3).map((ref) => (
            <div
              key={ref.id}
              className={
                classes[
                  ref.id === 1 ? "first" : ref.id === 2 ? "second" : "third"
                ]
              }
            >
              <ReferenceBox
                logoUrl={ref.logoUrl}
                companyName={ref.companyName}
                description={
                  language === "PL" ? ref.descriptionPL : ref.descriptionEN
                }
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

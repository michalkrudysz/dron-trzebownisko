import classes from "./HomePage.module.scss";
import Button from "./Button";
import ReferenceBox from "./ReferenceBox";

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
            <div className={classes.first}>
              <ReferenceBox language={language} id={2} />
            </div>
            <div className={classes.second}>
              <ReferenceBox language={language} id={1} />
            </div>
            <div className={classes.third}>
              <ReferenceBox language={language} id={3} />
            </div>
          </div>
        </section>
      </div>
      <div className={classes["shadow"]}></div>
    </>
  );
}

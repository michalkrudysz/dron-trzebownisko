import classes from "./MobileMenu.module.scss";
import Button from "./Button";
import { useLanguage } from "../store/language/languageContext";

export default function MobileMenu({ changePage }) {
  const { language } = useLanguage();
  return (
    <>
      <div className={classes["mobile-menu"]}>
        <Button onClick={() => changePage("portfolio")}>
          {language === "PL" ? "Portfolio" : "Portfolio"}
        </Button>
        <Button onClick={() => changePage("references")}>
          {language === "PL" ? "Referencje" : "References"}
        </Button>
        <Button onClick={() => changePage("aboutMe")}>
          {language === "PL" ? "O mnie" : "About Me"}
        </Button>
        <Button
          onClick={() => changePage("exploreTheMunicipality")}
          kind={false}
        >
          {language === "PL" ? "Odkryj gminę" : "Explore the Municipality"}
        </Button>
      </div>
    </>
  );
}

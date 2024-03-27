import classes from "./MobileMenu.module.scss";
import Button from "./Button";
import { useLanguage } from "../store/language/languageContext";

export default function MobileMenu({ changePage, setIsMenuOpen }) {
  const { language } = useLanguage();

  const handleClick = (page) => {
    changePage(page);
    setIsMenuOpen(false);
  };

  return (
    <div className={classes["mobile-menu"]}>
      <Button onClick={() => handleClick("portfolio")}>
        {language === "PL" ? "Portfolio" : "Portfolio"}
      </Button>
      <Button onClick={() => handleClick("references")}>
        {language === "PL" ? "Referencje" : "References"}
      </Button>
      <Button onClick={() => handleClick("aboutMe")}>
        {language === "PL" ? "O mnie" : "About Me"}
      </Button>
      <Button
        onClick={() => handleClick("exploreTheMunicipality")}
        kind={false}
      >
        {language === "PL" ? "Odkryj gminę" : "Explore the Municipality"}
      </Button>
    </div>
  );
}

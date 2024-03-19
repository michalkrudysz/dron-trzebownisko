import classes from "./MobileMenu.module.scss";
import Button from "./Button";
import { useLanguage } from "../store/language/languageContext";

export default function MobileMenu() {
  const { language } = useLanguage();
  return (
    <>
      <div className={classes["mobile-menu"]}>
        <Button>{language === "PL" ? "Portfolio" : "Portfolio"}</Button>
        <Button>{language === "PL" ? "Referencje" : "References"}</Button>
        <Button>{language === "PL" ? "O mnie" : "About Me"}</Button>
        <Button kind={false}>
          {language === "PL" ? "Odkryj gminę" : "Explore the Municipality"}
        </Button>
      </div>
    </>
  );
}

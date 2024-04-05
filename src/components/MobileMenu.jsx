import classes from "./MobileMenu.module.scss";
import Button from "./Button";
import { useLanguage } from "../store/language/languageContext";
import { usePage } from "../store/page/pageContext";

export default function MobileMenu({ setIsMenuOpen }) {
  const { language } = useLanguage();
  const { changePage } = usePage();

  const handleChangePage = (page) => {
    changePage(page);
    setIsMenuOpen(false);
  };

  return (
    <div className={classes["mobile-menu"]}>
      <Button onClick={() => handleChangePage("portfolio")}>
        {language === "PL" ? "Portfolio" : "Portfolio"}
      </Button>
      <Button onClick={() => handleChangePage("references")}>
        {language === "PL" ? "Referencje" : "References"}
      </Button>
      <Button onClick={() => handleChangePage("aboutMe")}>
        {language === "PL" ? "O mnie" : "About Me"}
      </Button>
      <Button
        onClick={() => handleChangePage("exploreTheMunicipality")}
        kind={false}
      >
        {language === "PL" ? "Odkryj gminę" : "Explore the Municipality"}
      </Button>
    </div>
  );
}

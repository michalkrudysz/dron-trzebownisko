import classes from "./Header.module.scss";
import Button from "./Button";
import logo from "../assets/logo-small.png";
import menu from "../assets/hamburger-menu.png";
import closeMenu from "../assets/close-menu.png";
import { useLanguage } from "../store/language/languageContext";
import { usePage } from "../store/page/pageContext";

export default function Header({ toggleMenu, isOpen, setIsMenuOpen }) {
  const { language, toggleLanguage } = useLanguage();
  const { changePage } = usePage();

  return (
    <header className={classes.header}>
      <div className={classes["header-logo"]}>
        <img
          onClick={() => {
            changePage("homePage");
            setIsMenuOpen(false);
          }}
          src={logo}
          alt="Logo"
        />
      </div>
      <nav className={classes.menu}>
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
      </nav>
      <div className={classes.language} onClick={toggleLanguage}>
        {language === "PL" ? "EN" : "PL"}
      </div>
      <div className={classes["hamburger-menu"]} onClick={toggleMenu}>
        {isOpen ? (
          <img src={closeMenu} alt="Menu" />
        ) : (
          <img src={menu} alt="Menu" />
        )}
      </div>
    </header>
  );
}

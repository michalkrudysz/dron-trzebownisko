import classes from "./Header.module.scss";
import Button from "./Button";
import logo from "../assets/logo-small.png";
import menu from "../assets/hamburger-menu.png";
import closeMenu from "../assets/close-menu.png";
import { useLanguage } from "../store/language/languageContext";
import { usePage } from "../store/page/pageContext";
import NAVIGATION_CONTENT from "../../data/navigationContent";

export default function Header({ toggleMenu, isOpen, setIsMenuOpen }) {
  const { language, toggleLanguage } = useLanguage();
  const { changePage } = usePage();
  const content = NAVIGATION_CONTENT[language] || NAVIGATION_CONTENT.PL;

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
          {content.portfolio}
        </Button>
        <Button onClick={() => changePage("references")}>
          {content.references}
        </Button>

        <Button
          onClick={() => changePage("exploreTheMunicipality")}
          kind={false}
        >
          {content.exploreTheMunicipality}
        </Button>
      </nav>
      <div className={classes.language} onClick={toggleLanguage}>
        {content.languageSwitch}
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

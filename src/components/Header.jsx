// Header.js
import { NavLink } from "react-router-dom";
import classes from "./Header.module.scss";
import linkStyles from "./NavLink.module.scss";
import logo from "../assets/logo-small.png";
import menu from "../assets/hamburger-menu.png";
import closeMenu from "../assets/close-menu.png";
import { useLanguage } from "../store/language/languageContext";
import NAVIGATION_CONTENT from "../../data/navigationContent";

export default function Header({ toggleMenu, isOpen, setIsMenuOpen }) {
  const { language, toggleLanguage } = useLanguage();
  const content = NAVIGATION_CONTENT[language] || NAVIGATION_CONTENT.PL;

  return (
    <header className={classes.header}>
      <div className={classes["header-logo"]}>
        <img
          src={logo}
          alt="Logo"
          onClick={() => setIsMenuOpen(false)}
          style={{ cursor: "pointer" }}
        />
      </div>
      <nav className={classes.menu}>
        <NavLink
          to="/"
          className={linkStyles.link}
          onClick={() => setIsMenuOpen(false)}
        >
          {content.home}
        </NavLink>
        <NavLink
          to="/portfolio"
          className={linkStyles.link}
          onClick={() => setIsMenuOpen(false)}
        >
          {content.portfolio}
        </NavLink>
        <NavLink
          to="/references"
          className={linkStyles.link}
          onClick={() => setIsMenuOpen(false)}
        >
          {content.references}
        </NavLink>
        <NavLink
          to="/explore"
          className={`${linkStyles.link} ${linkStyles.linkExplore}`}
          onClick={() => setIsMenuOpen(false)}
        >
          {content.exploreTheMunicipality}
        </NavLink>
      </nav>
      <div className={classes.language} onClick={toggleLanguage}>
        {content.languageSwitch}
      </div>
      <div className={classes["hamburger-menu"]} onClick={toggleMenu}>
        <img
          src={isOpen ? closeMenu : menu}
          alt={isOpen ? "Close menu" : "Open menu"}
        />
      </div>
    </header>
  );
}

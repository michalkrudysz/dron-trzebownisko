import { NavLink } from "react-router-dom";
import classes from "./MobileMenu.module.scss";
import linkStyles from "./NavLink.module.scss"; // Import stylów NavLink
import { useLanguage } from "../store/language/languageContext";
import NAVIGATION_CONTENT from "../../data/navigationContent";

export default function MobileMenu({ setIsMenuOpen }) {
  const { language } = useLanguage();
  const content = NAVIGATION_CONTENT[language] || NAVIGATION_CONTENT.PL;

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className={classes["mobile-menu"]}>
      <NavLink to="/portfolio" className={linkStyles.link} onClick={closeMenu}>
        {content.portfolio}
      </NavLink>
      <NavLink to="/references" className={linkStyles.link} onClick={closeMenu}>
        {content.references}
      </NavLink>
      <NavLink
        to="/explore"
        className={`${linkStyles.link} ${linkStyles.linkExplore}`}
        onClick={closeMenu}
      >
        {content.exploreTheMunicipality}
      </NavLink>
    </div>
  );
}

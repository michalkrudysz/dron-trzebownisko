import classes from "./Header.module.scss";
import Button from "./Button";
import logo from "../assets/logo-small.png";

export default function Header({ language, changeLanguage }) {
  return (
    <header className={classes.header}>
      <div className={classes["header-logo"]}>
        <img src={logo} alt="Logo" />
      </div>
      <nav className={classes.menu}>
        <Button>{language === "PL" ? "Portfolio" : "Portfolio"}</Button>
        <Button>{language === "PL" ? "Referencje" : "References"}</Button>
        <Button>{language === "PL" ? "O mnie" : "About Me"}</Button>
        <Button kind={false}>
          {language === "PL" ? "Odkryj gminę" : "Explore the Municipality"}
        </Button>
      </nav>
      <div className={classes.language} onClick={changeLanguage}>
        {language === "PL" ? "EN" : "PL"}
      </div>
    </header>
  );
}

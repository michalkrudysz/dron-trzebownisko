import { useState } from "react";
import classes from "./Main.module.scss";
import Header from "./Header";
import HomePage from "./HomePage";
import MobileMenu from "./MobileMenu";

export default function Main() {
  const [language, setLanguage] = useState("PL");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function changeLanguage() {
    setLanguage((prevLanguage) => (prevLanguage === "PL" ? "EN" : "PL"));
  }

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <Header
        language={language}
        changeLanguage={changeLanguage}
        toggleMenu={toggleMenu}
      />
      {isMenuOpen ? (
        <MobileMenu language={language} />
      ) : (
        <>
          <HomePage language={language} />
          <footer className={classes.footer}>&copy; Michał Krudysz 2024</footer>
        </>
      )}
    </>
  );
}

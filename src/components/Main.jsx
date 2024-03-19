import { useState } from "react";
import classes from "./Main.module.scss";
import Header from "./Header";
import HomePage from "./HomePage";
import MobileMenu from "./MobileMenu";

export default function Main() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <Header toggleMenu={toggleMenu} />
      {isMenuOpen ? (
        <MobileMenu />
      ) : (
        <>
          <HomePage />
          <footer className={classes.footer}>&copy; Michał Krudysz 2024</footer>
        </>
      )}
    </>
  );
}

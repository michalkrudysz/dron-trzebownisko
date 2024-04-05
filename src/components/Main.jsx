import { useState } from "react";
import { usePage } from "../store/page/pageContext";
import classes from "./Main.module.scss";
import Header from "./Header";
import MobileMenu from "./MobileMenu";

export default function Main() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { displayPage, changePage } = usePage();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <Header
        toggleMenu={toggleMenu}
        isOpen={isMenuOpen}
        changePage={changePage}
        setIsMenuOpen={setIsMenuOpen}
      />
      {isMenuOpen ? (
        <MobileMenu changePage={changePage} setIsMenuOpen={setIsMenuOpen} />
      ) : (
        <>{displayPage()}</>
      )}
    </>
  );
}

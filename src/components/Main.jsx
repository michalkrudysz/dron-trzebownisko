import { useState } from "react";
import { usePage } from "../store/page/pageContext";
import Header from "./Header";
import MobileMenu from "./MobileMenu";

export default function Main() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { displayPage } = usePage();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <Header
        toggleMenu={toggleMenu}
        isOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      {isMenuOpen ? (
        <MobileMenu setIsMenuOpen={setIsMenuOpen} />
      ) : (
        <>{displayPage()}</>
      )}
    </>
  );
}

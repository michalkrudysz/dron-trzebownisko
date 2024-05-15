import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";

function Main() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <Header toggleMenu={toggleMenu} isOpen={isMenuOpen} />
      {isMenuOpen ? <MobileMenu toggleMenu={toggleMenu} /> : <Outlet />}
    </>
  );
}

export default Main;

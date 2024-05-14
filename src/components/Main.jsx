import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import MobileMenu from "./MobileMenu";

export default function Main() {
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

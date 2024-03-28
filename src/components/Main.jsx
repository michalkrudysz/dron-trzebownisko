import { useState } from "react";
import classes from "./Main.module.scss";
import Header from "./Header";
import HomePage from "./HomePage";
import MobileMenu from "./MobileMenu";
import References from "./References";
import ExploreTheMunicipality from "./ExploreTheMunicipality";

export default function Main() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("homePage");

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const changePage = (page) => {
    setCurrentPage(page);
  };

  const displayPage = () => {
    switch (currentPage) {
      case "homePage":
        return <HomePage />;
      case "portfolio":
        return <Portfolio />;
      case "references":
        return <References />;
      case "aboutMe":
        return <AboutMe />;
      case "exploreTheMunicipality":
        return <ExploreTheMunicipality />;
      default:
        return <HomePage />;
    }
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
        <>
          {displayPage()}
          {currentPage === "homePage" && (
            <footer className={classes.footer}>
              &copy; Michał Krudysz 2024
            </footer>
          )}
        </>
      )}
    </>
  );
}

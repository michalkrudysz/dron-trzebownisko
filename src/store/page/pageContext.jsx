import { createContext, useState, useContext } from "react";
import HomePage from "../../components/HomePage";
import References from "../../components/References";
import ExploreTheMunicipality from "../../components/ExploreTheMunicipality";
import Quiz from "../../components/Quiz";

const PageContext = createContext();

export function PageProvider({ children }) {
  const [currentPage, setCurrentPage] = useState("homePage");

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
      case "quiz":
        return <Quiz />;
      default:
        return <HomePage />;
    }
  };

  return (
    <PageContext.Provider value={{ currentPage, changePage, displayPage }}>
      {children}
    </PageContext.Provider>
  );
}

export function usePage() {
  const context = useContext(PageContext);
  if (context === undefined) {
    throw new Error("usePage must be used within a PageProvider");
  }
  return context;
}

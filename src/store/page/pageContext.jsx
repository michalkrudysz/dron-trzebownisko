import { createContext, useState, useContext } from "react";
import HomePage from "../../components/HomePage";
import References from "../../components/References";
import ExploreTheMunicipality from "../../components/ExploreTheMunicipality";
import Quiz from "../../components/Quiz";

const PageContext = createContext();

export function PageProvider({ children }) {
  const [currentPage, setCurrentPage] = useState("homePage");
  const [key, setKey] = useState(Date.now());

  const changePage = (page) => {
    setCurrentPage(page);
    if (page === "quiz") {
      setKey(Date.now());
    }
  };

  const displayPage = () => {
    switch (currentPage) {
      case "homePage":
        return <HomePage />;
      case "portfolio":
        // return <Portfolio />;
        break;
      case "references":
        return <References />;
      case "aboutMe":
        // return <AboutMe />;
        break;
      case "exploreTheMunicipality":
        return <ExploreTheMunicipality />;
      case "quiz":
        return <Quiz key={key} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <PageContext.Provider value={{ changePage, displayPage }}>
      {children}
    </PageContext.Provider>
  );
}

export function usePage() {
  return useContext(PageContext);
}

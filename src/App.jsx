import "./App.scss";
import { LanguageProvider } from "./store/language/languageContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main.jsx";
import HomePage from "./pages/HomePage.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import ExploreTheMunicipality from "./pages/ExploreTheMunicipality.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "discover", element: <ExploreTheMunicipality /> },
    ],
  },
]);

function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}

export default App;

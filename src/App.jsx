import "./App.scss";
import { Suspense, lazy } from "react";
import { LanguageProvider } from "./store/language/languageContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "./pages/Loading.jsx";

const HomePageWrapper = lazy(() => import("./pages/HomePageWrapper.jsx"));
const Portfolio = lazy(() => import("./pages/Portfolio.jsx"));
const ExploreTheMunicipality = lazy(() =>
  import("./pages/ExploreTheMunicipality.jsx")
);
const Main = lazy(() => import("./pages/Main.jsx"));
const References = lazy(() => import("./pages/References.jsx"));
const Quiz = lazy(() => import("./pages/Quiz"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { index: true, element: <HomePageWrapper /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "references", element: <References /> },
      { path: "discover", element: <ExploreTheMunicipality /> },
      { path: "quiz", element: <Quiz /> },
      { path: "quiz-reset", element: <Loading /> },
    ],
  },
]);

function App() {
  return (
    <LanguageProvider>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </LanguageProvider>
  );
}

export default App;

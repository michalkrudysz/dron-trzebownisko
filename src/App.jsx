import "./App.scss";
import { LanguageProvider } from "./store/language/languageContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main.jsx";
import HomePage from "./pages/HomePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [{ index: true, element: <HomePage /> }],
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

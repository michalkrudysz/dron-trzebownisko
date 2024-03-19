import "./App.scss";
import { LanguageProvider } from "./store/language/languageContext";
import Loading from "./components/Loading.jsx";
import Main from "./components/Main.jsx";

function App() {
  return (
    <LanguageProvider>
      <>
        {/* <Loading /> */}
        <Main />
      </>
    </LanguageProvider>
  );
}

export default App;

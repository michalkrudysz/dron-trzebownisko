import "./App.scss";
import { LanguageProvider } from "./store/language/languageContext";
import { PageProvider } from "../src/store/page/pageContext.jsx";
import Loading from "./components/Loading.jsx";
import Main from "./components/Main.jsx";

function App() {
  return (
    <PageProvider>
      <LanguageProvider>
        <>
          {/* <Loading */}
          <Main />
        </>
      </LanguageProvider>
    </PageProvider>
  );
}

export default App;

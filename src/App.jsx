import "./App.scss";
import { LanguageProvider } from "./store/language/languageContext";
import { PageProvider } from "./store/page/pageContext";
import Main from "./components/Main.jsx";

function App() {
  return (
    <PageProvider>
      <LanguageProvider>
        <Main />
      </LanguageProvider>
    </PageProvider>
  );
}

export default App;

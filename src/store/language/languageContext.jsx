import { createContext, useEffect, useContext, useMemo, useState } from "react";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(
    () => localStorage.getItem("language") || "PL"
  );

  const toggleLanguage = () => {
    setLanguage((current) => {
      const newLanguage = current === "PL" ? "EN" : "PL";
      return newLanguage;
    });
  };

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const contextValue = useMemo(
    () => ({ language, toggleLanguage }),
    [language]
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  return context;
}

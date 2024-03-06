import { useState } from "react";
import classes from "./Main.module.scss";
import Header from "./Header";
import HomePage from "./HomePage";
import MobileMenu from "./MobileMenu";

export default function Main() {
  const [language, setLanguage] = useState("PL");

  function changeLanguage() {
    setLanguage((prevLanguage) => (prevLanguage === "PL" ? "EN" : "PL"));
  }

  return (
    <>
      <Header language={language} changeLanguage={changeLanguage} />
      <HomePage language={language} />
      <footer>&copy; Michał Krudysz 2024</footer>
    </>
  );
}

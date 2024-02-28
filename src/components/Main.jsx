import { useState } from "react";
import classes from "./Main.module.scss";
import Header from "./Header";
import HomePage from "./HomePage";

export default function Main() {
  const [language, setLanguage] = useState("PL");

  function changeLanguage() {
    setLanguage((prevLanguage) => (prevLanguage === "PL" ? "EN" : "PL"));
  }

  return (
    <>
      <Header language={language} changeLanguage={changeLanguage} />
      <HomePage language={language} />
    </>
  );
}

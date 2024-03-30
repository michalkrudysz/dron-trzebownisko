import Select from "react-select";
import classes from "./ExploreTheMunicipality.module.scss";
import Location from "./Location";
import { useLanguage } from "../store/language/languageContext";
import { useState } from "react";
import MUNICIPALITY_OF_TRZEBOWNISKO from "../../data/municipalityOfTrzebownisko";

export default function ExploreTheMunicipality() {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: "1", label: "Trzebownisko" },
    { value: "2", label: "Łąka" },
    { value: "3", label: "Łukawiec" },
    { value: "4", label: "Jasionka" },
    { value: "5", label: "Wólka Podleśna" },
    { value: "6", label: "Terliczka" },
    { value: "7", label: "Nowa Wieś" },
    { value: "8", label: "Zaczernie" },
  ];

  const selectLocation = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  let filteredLocations;
  let place;
  if (selectedOption) {
    filteredLocations = MUNICIPALITY_OF_TRZEBOWNISKO.filter((location) => {
      return location.name === selectedOption.label;
    });
  } else {
    filteredLocations = MUNICIPALITY_OF_TRZEBOWNISKO;
  }

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "transparent",
      borderColor: state.isFocused ? "#5096f2" : "#5096f2",
      boxShadow: state.isFocused ? "0px" : "none",
      borderRadius: 0,
      cursor: "pointer",
      paddingLeft: "1.2em",
      paddingRight: "1.2em",
      paddingTop: "0.15em",
      paddingBottom: "0.15em",
      textAlign: "center",
      width: "100%",
      "&:hover": {
        borderColor: "#5096f2",
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#3084F2",
      cursor: "pointer",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#3084F2" : "#586274e5",
      color: state.isSelected ? "white" : "white",
      cursor: "pointer",
      fontWeight: 400,
      "&:hover": {
        backgroundColor: "#4b525ee5",
        color: "white",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "white",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "white",
    }),
    input: (provided) => ({
      ...provided,
      color: "white",
    }),
    noOptionsMessage: (provided) => ({
      ...provided,
      color: "white",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "white",
      "&:hover": {
        color: "white",
      },
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
  };
  const { language } = useLanguage();

  return (
    <>
      <div className={classes.top}>
        <div className={classes.header}>
          <h3>
            {language === "PL" ? "Odkryj gminę" : "Explore the Municipality"}
          </h3>
          <h1>
            {language === "PL"
              ? "Zagraj w quiz lub znajdź interesujące miejsce"
              : "Play a quiz or find an interesting place"}
          </h1>
        </div>
        <div className={classes.blocks}>
          <div className={`${classes["left-block"]} ${classes["block"]}`}>
            <div className={classes.title}>Quiz</div>
            <div className={classes.description}>
              {language === "PL"
                ? "Rozwiąż quiz i sprawdź swoją wiedzę o Gminie Trzebownisko."
                : "Solve the quiz and check your knowledge about the Trzebownisko Municipality."}
            </div>
            <button className={classes.button}>
              {language === "PL" ? "Rozpocznij" : "Start"}
            </button>
          </div>
          <div className={`${classes["right-block"]} ${classes["block"]}`}>
            <div className={classes.title}>
              {language === "PL" ? "Znajdź miejsce" : "Find a place"}
            </div>
            <div className={classes.description}>
              {language === "PL"
                ? "Wybierz miejscowość, by wyświetlić dostępne materiały."
                : "Select a village to view available materials."}
            </div>
            <Select
              className={classes["custom-select"]}
              options={options}
              styles={customStyles}
              onChange={selectLocation}
              placeholder={language === "PL" ? "Wszystkie" : "All villages"}
              noOptionsMessage={() => {
                return language === "PL" ? "Brak opcji" : "No options";
              }}
            />
          </div>
        </div>
      </div>
      <div className={classes.locations}>
        {selectedOption === null && (
          <>
            <div className={classes["locations-header"]}>
              {language === "PL" ? "Wszystkie miejscowości" : "All localities"}
            </div>
            <div className={classes["locations-description"]}>
              {language === "PL"
                ? `(Kliknięcie na zdjęcie odsłoni więcej informacji o tym miejscu)`
                : `(Clicking on the picture will reveal more information about this place)`}
            </div>
          </>
        )}

        <div className={classes["locations-list"]}>
          <ol>
            {filteredLocations.map((location, index) => (
              <li key={index}>
                <Location location={location} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

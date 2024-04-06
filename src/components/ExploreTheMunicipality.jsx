import Select from "react-select";
import classes from "./ExploreTheMunicipality.module.scss";
import Location from "./Location";
import Loading from "./Loading";
import { useLanguage } from "../store/language/languageContext";
import { useState } from "react";
import { usePage } from "../store/page/pageContext";
import { useEffect } from "react";
import MUNICIPALITY_OF_TRZEBOWNISKO from "../../data/municipalityOfTrzebownisko";
import EXPLORE_MUNICIPALITY_CONTENT from "../../data/exploreMunicipalityContent";

export default function ExploreTheMunicipality() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const { changePage } = usePage();
  const { language } = useLanguage();

  const content =
    EXPLORE_MUNICIPALITY_CONTENT[language] || EXPLORE_MUNICIPALITY_CONTENT.PL;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const options = [
    { value: "1", label: "Trzebownisko" },
    { value: "2", label: "Łąka" },
    { value: "3", label: "Łukawiec" },
    { value: "4", label: "Jasionka" },
    { value: "5", label: "Wólka Podleśna" },
    { value: "6", label: "Terliczka" },
    { value: "7", label: "Nowa Wieś" },
    { value: "8", label: "Zaczernie" },
    { value: "8", label: "Stobierna" },
  ];

  const selectLocation = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  let filteredLocations;

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

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div className={classes.top}>
        <div className={classes.header}>
          <h3>{content.header}</h3>
          <h1>{content.subHeader}</h1>
        </div>
        <div className={classes.blocks}>
          <div className={`${classes["left-block"]} ${classes["block"]}`}>
            <div className={classes.title}>{content.quizTitle}</div>
            <div className={classes.description}>{content.quizDescription}</div>
            <button
              onClick={() => changePage("quiz")}
              className={classes.button}
            >
              {content.quizButton}
            </button>
          </div>
          <div className={`${classes["right-block"]} ${classes["block"]}`}>
            <div className={classes.title}>{content.findPlaceTitle}</div>
            <div className={classes.description}>
              {content.findPlaceDescription}
            </div>
            <Select
              className={classes["custom-select"]}
              options={options}
              styles={customStyles}
              onChange={selectLocation}
              placeholder={content.allVillages}
              noOptionsMessage={() => content.noOptions}
            />
          </div>
        </div>
      </div>
      <div className={classes.locations}>
        {selectedOption === null && (
          <>
            <div className={classes["locations-header"]}>
              {content.allLocalities}
            </div>
            <div className={classes["locations-description"]}>
              {content.locationDescription}
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

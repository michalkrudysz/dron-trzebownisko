import Select from "react-select";
import classes from "./ExploreTheMunicipality.module.scss";
import Location from "../components/Location";
import { useLanguage } from "../store/language/languageContext";
import { useState } from "react";
import MUNICIPALITY_OF_TRZEBOWNISKO from "../../data/municipalityOfTrzebownisko";
import EXPLORE_MUNICIPALITY_CONTENT from "../../data/exploreMunicipalityContent";
import { Link } from "react-router-dom";
import {
  filterLocations,
  customSelectStyles,
} from "../utils/exploreMunicipalityUtils";

export default function ExploreTheMunicipality() {
  const [selectedOption, setSelectedOption] = useState(null);
  const { language } = useLanguage();

  const content =
    EXPLORE_MUNICIPALITY_CONTENT[language] || EXPLORE_MUNICIPALITY_CONTENT.PL;

  const options = [
    { value: "1", label: "Trzebownisko" },
    { value: "2", label: "Łąka" },
    { value: "3", label: "Łukawiec" },
    { value: "4", label: "Jasionka" },
    { value: "5", label: "Wólka Podleśna" },
    { value: "6", label: "Terliczka" },
    { value: "7", label: "Nowa Wieś" },
    { value: "8", label: "Zaczernie" },
    { value: "9", label: "Stobierna" },
  ];

  const selectLocation = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const filteredLocations = filterLocations(
    MUNICIPALITY_OF_TRZEBOWNISKO,
    selectedOption
  );

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
            <Link to="/quiz" className={classes.button}>
              {content.quizButton}
            </Link>
          </div>
          <div className={`${classes["right-block"]} ${classes["block"]}`}>
            <div className={classes.title}>{content.findPlaceTitle}</div>
            <div className={classes.description}>
              {content.findPlaceDescription}
            </div>
            <Select
              className={classes["custom-select"]}
              options={options}
              styles={customSelectStyles}
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

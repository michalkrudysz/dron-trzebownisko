import Select from "react-select";
import classes from "./ExploreTheMunicipality.module.scss";

export default function ExploreTheMunicipality() {
  const options = [
    { value: "1", label: "Wszystkie miejscowości" },
    { value: "2", label: "Trzebownisko" },
    { value: "3", label: "Łąka" },
    { value: "4", label: "Łukawiec" },
    { value: "5", label: "Jasionka" },
    { value: "6", label: "Wólka Podleśna" },
    { value: "7", label: "Terliczka" },
    { value: "8", label: "Jasionka" },
    { value: "9", label: "Nowa Wieś" },
    { value: "10", label: "Zaczernie" },
    { value: "11", label: "Tajęcina" },
  ];

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
    menu: (provided, state) => ({
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
    singleValue: (provided, state) => ({
      ...provided,
      color: "white",
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: "white",
    }),
    input: (provided, state) => ({
      ...provided,
      color: "white",
    }),
    noOptionsMessage: (provided, state) => ({
      ...provided,
      color: "white",
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: "white",
      "&:hover": {
        color: "white",
      },
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      display: "none",
    }),
  };

  return (
    <div className={classes.top}>
      <div className={classes.header}>
        <h3>Odkryj gminę</h3>
        <h1>Zagraj w quiz lub znajdź interesujące miejsce</h1>
      </div>
      <div className={classes.blocks}>
        <div className={`${classes["left-block"]} ${classes["block"]}`}>
          <div className={classes.title}>Quiz</div>
          <div className={classes.description}>
            Rozwiąż quiz i sprawdź swoją wiedzę o Gminie Trzebownisko.
          </div>
          <button className={classes.button}>Rozpocznij</button>
        </div>
        <div className={`${classes["right-block"]} ${classes["block"]}`}>
          <div className={classes.title}>Znajdź miejsce</div>
          <div className={classes.description}>
            Wybierz miejscowość, by wyświetlić dostępne materiały.
          </div>
          <Select
            className={classes["custom-select"]}
            options={options}
            styles={customStyles}
            placeholder="Wyszukaj"
            noOptionsMessage={() => "Brak opcji"} // Zmiana tekstu dla braku opcji
          />
        </div>
      </div>
    </div>
  );
}

export const filterLocations = (locations, selectedOption) => {
  if (selectedOption) {
    return locations.filter(
      (location) => location.name === selectedOption.label
    );
  }
  return locations;
};

export const customSelectStyles = {
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

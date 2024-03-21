import classes from "./ReferenceBox.module.scss";

export default function ReferenceBox({
  logo,
  companyName,
  descriptionPL,
  descriptionEN,
  language,
}) {
  const getDescription = (language) => {
    return language === "PL" ? descriptionPL : descriptionEN;
  };

  return (
    <div className={classes["reference-box"]}>
      <div className={classes.avatar}>
        <img src={logo} alt={companyName} />
      </div>
      <div className={classes["reference-content"]}>
        <div className={classes["reference-header"]}>{companyName}</div>
        <div className={classes["reference-text"]}>
          {getDescription(language)}
        </div>
      </div>
    </div>
  );
}

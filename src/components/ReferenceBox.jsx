import classes from "./ReferenceBox.module.scss";
import gminaTrzebownisko from "../assets/company-logos/gmina-trzebownisko.png";

export default function ReferenceBox({ logoUrl, companyName, description }) {
  return (
    <div className={classes["reference-box"]}>
      <div className={classes.avatar}>
        <img src={gminaTrzebownisko} alt={companyName} />
      </div>
      <div className={classes["reference-content"]}>
        <div className={classes["reference-header"]}>{companyName}</div>
        <div className={classes["reference-text"]}>{description}</div>
      </div>
    </div>
  );
}

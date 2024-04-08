import { useEffect, useState } from "react";
import classes from "./SkillBar.module.scss";

const SkillBar = ({ skill, percentage, color }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((oldValue) => {
        const newValue = oldValue + 1;
        if (newValue <= percentage) {
          return newValue;
        } else {
          clearInterval(interval);
          return percentage;
        }
      });
    }, 20);

    return () => clearInterval(interval);
  }, [percentage]);

  return (
    <div className={classes["skill-container"]}>
      <div className={classes["skill-name"]} style={{ color: "#FFF" }}>
        {skill}
      </div>
      <div className={classes["skill-bar"]} style={{ backgroundColor: "#DDD" }}>
        <div
          className={classes["skill-progress"]}
          style={{ width: `${value}%`, backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;

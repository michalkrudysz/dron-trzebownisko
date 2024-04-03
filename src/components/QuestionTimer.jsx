import { useState, useEffect } from "react";
import classes from "./QuestionTimer.module.scss";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timeoutId = setTimeout(onTimeout, timeout);
    return () => clearTimeout(timeoutId);
  }, [onTimeout, timeout]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prevRemainingTime) => {
        const newRemainingTime = prevRemainingTime - 1000;
        if (newRemainingTime <= 0) {
          clearInterval(intervalId);
          return 0;
        }
        return newRemainingTime;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <progress
      className={classes["question-time"]}
      max={timeout}
      value={remainingTime}
    />
  );
}

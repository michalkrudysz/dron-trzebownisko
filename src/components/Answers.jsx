import { useRef } from "react";
import classes from "../pages/Quiz.module.scss";
export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul className={classes.answers}>
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClasses = "";
        if (answerState === "answered" && isSelected) {
          cssClasses = classes.answered;
        }
        if (
          (answerState === "correctly" || answerState === "incorrectly") &&
          isSelected
        ) {
          cssClasses = classes[answerState];
        }

        return (
          <li key={answer} className={classes.answer}>
            <button onClick={() => onSelect(answer)} className={cssClasses}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

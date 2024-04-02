import classes from "./Quiz.module.scss";
import { useState } from "react";
import QUESTIONS from "../../data/questions";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  function handleAnswerClick(answer) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, answer];
    });
  }

  return (
    <div className={classes.quiz}>
      <div className={classes.image}>
        <img
          src={QUESTIONS[activeQuestionIndex].image}
          alt={QUESTIONS[activeQuestionIndex].alt}
        />
      </div>
      <div className={classes.question}>
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul className={classes.answers}>
          {QUESTIONS[activeQuestionIndex].answers.map((answer, index) => (
            <li key={index} className={classes.answer}>
              <button onClick={() => handleAnswerClick(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

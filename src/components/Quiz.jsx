import classes from "./Quiz.module.scss";
import { useState } from "react";
import QUESTIONS from "../../data/questions";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizFinished = activeQuestionIndex === QUESTIONS.length;

  function handleAnswerClick(answer) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, answer];
    });
  }

  if (quizFinished) {
    return <div className={classes.summary}>Koniec quizu.</div>;
  }
  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <>
      <div className={classes.quiz}>
        <div className={classes.image}>
          <img
            src={QUESTIONS[activeQuestionIndex].image}
            alt={QUESTIONS[activeQuestionIndex].alt}
          />
        </div>
        <div className={classes.question}>
          <h2 className={classes.header}>
            {QUESTIONS[activeQuestionIndex].text}
          </h2>
          <ul className={classes.answers}>
            {shuffledAnswers.map((answer) => (
              <li key={answer} className={classes.answer}>
                <button onClick={() => handleAnswerClick(answer)}>
                  {answer}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={classes["shadow"]}></div>
    </>
  );
}

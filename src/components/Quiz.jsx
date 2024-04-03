import classes from "./Quiz.module.scss";
import { useState, useCallback } from "react";
import QUESTIONS from "../../data/questions";
import QuestionTimer from "./QuestionTimer";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizFinished = activeQuestionIndex === QUESTIONS.length;

  const handleAnswerClick = useCallback(function handleAnswerClick(answer) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, answer];
    });
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleAnswerClick(null),
    [handleAnswerClick]
  );

  if (quizFinished) {
    return <div className={classes.summary}>Koniec quizu.</div>;
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <>
      <div className={classes.quiz}>
        <div className={classes.timer}>
          <QuestionTimer
            key={activeQuestionIndex}
            timeout={10000}
            onTimeout={handleSkipAnswer}
          />
        </div>
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

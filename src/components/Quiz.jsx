import classes from "./Quiz.module.scss";
import { useState, useCallback } from "react";
import QUESTIONS from "../../data/questions";
import QuestionTimer from "./QuestionTimer";

export default function Quiz() {
  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;
  const quizFinished = activeQuestionIndex === QUESTIONS.length;

  const handleAnswerClick = useCallback(
    function handleAnswerClick(answer) {
      setAnswerState("answered");

      setUserAnswers((prevUserAnswers) => {
        return [...prevUserAnswers, answer];
      });

      setTimeout(() => {
        if (answer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState("correctly");
        } else {
          setAnswerState("incorrectly");
        }

        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

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
            {shuffledAnswers.map((answer) => {
              const isSelected = userAnswers[userAnswers.length - 1] === answer;
              let cssClasses = "";
              if (answerState === "answered" && isSelected) {
                cssClasses = classes.answered;
              }
              if (
                (answerState === "correctly" ||
                  answerState === "incorrectly") &&
                isSelected
              ) {
                cssClasses = classes[answerState];
              }

              return (
                <li key={answer} className={classes.answer}>
                  <button
                    onClick={() => handleAnswerClick(answer)}
                    className={cssClasses}
                  >
                    {answer}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={classes["shadow"]}></div>
    </>
  );
}

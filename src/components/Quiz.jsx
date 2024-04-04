import classes from "./Quiz.module.scss";
import { useState, useCallback } from "react";
import QUESTIONS from "../../data/questions";
import Question from "./Question";

export default function Quiz() {
  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;
  const quizFinished = activeQuestionIndex === QUESTIONS.length;

  const handleAnswerClick = useCallback(
    (answer) => {
      setAnswerState("answered");
      setUserAnswers((prevUserAnswers) => [...prevUserAnswers, answer]);

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

  return (
    <>
      <Question
        questionText={QUESTIONS[activeQuestionIndex].text}
        answers={QUESTIONS[activeQuestionIndex].answers}
        onSelectAnswer={handleAnswerClick}
        activeQuestionIndex={activeQuestionIndex}
        handleSkipAnswer={handleSkipAnswer}
        answerState={answerState}
        userAnswers={userAnswers}
        imageSrc={QUESTIONS[activeQuestionIndex].image}
        imageAlt={QUESTIONS[activeQuestionIndex].alt}
      />
      <div className={classes["shadow"]}></div>
    </>
  );
}

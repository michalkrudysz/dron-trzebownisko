import classes from "./Quiz.module.scss";
import { useState } from "react";
import QUESTIONS from "../../data/questions";
import Question from "./Question";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const quizFinished = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = (selectedAnswer) => {
    setUserAnswers((prevUserAnswers) => [...prevUserAnswers, selectedAnswer]);
  };

  if (quizFinished) {
    return <div className={classes.summary}>Koniec quizu.</div>;
  }

  return (
    <>
      <Question
        questionText={QUESTIONS[activeQuestionIndex].text}
        onSelectAnswer={handleSelectAnswer}
        activeQuestionIndex={activeQuestionIndex}
        answers={QUESTIONS[activeQuestionIndex].answers}
        questionIndex={activeQuestionIndex}
        imageSrc={QUESTIONS[activeQuestionIndex].image}
        imageAlt={QUESTIONS[activeQuestionIndex].alt}
      />
      <div className={classes["shadow"]}></div>
    </>
  );
}

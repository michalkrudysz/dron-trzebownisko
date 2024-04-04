import { useState } from "react";
import classes from "./Quiz.module.scss";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import QUESTIONS from "../../data/questions";

export default function Question({
  onSelectAnswer,
  questionIndex,
  imageSrc,
  imageAlt,
}) {
  const [answer, setAnswer] = useState({ selectedAnswer: "", isCorrect: null });

  const handleSelectAnswer = (answerText) => {
    setAnswer({ selectedAnswer: answerText, isCorrect: null });
    setTimeout(() => {
      const isCorrect = answerText === QUESTIONS[questionIndex].answers[0];
      setAnswer((prev) => ({ ...prev, isCorrect }));
      onSelectAnswer(answerText);
    }, 1000);
  };

  return (
    <div className={classes.quiz}>
      <div className={classes.timer}>
        <QuestionTimer
          timeout={10000}
          onTimeout={() => handleSelectAnswer(null)}
        />
      </div>
      <div className={classes.image}>
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <div className={classes.question}>
        <h2 className={classes.header}>{QUESTIONS[questionIndex].text}</h2>
        <Answers
          answers={QUESTIONS[questionIndex].answers}
          selectedAnswer={answer.selectedAnswer}
          answerState={
            answer.isCorrect === null
              ? ""
              : answer.isCorrect
              ? "correct"
              : "wrong"
          }
          onSelect={handleSelectAnswer}
        />
      </div>
    </div>
  );
}

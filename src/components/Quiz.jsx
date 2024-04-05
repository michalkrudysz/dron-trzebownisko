import QuizEnd from "./QuizEnd";
import classes from "./Quiz.module.scss";
import { useState, useCallback } from "react";
import QUESTIONS from "../../data/questions";
import Question from "./Question";
import { useLanguage } from "../store/language/languageContext";

export default function Quiz() {
  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);

  const { language } = useLanguage();

  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;
  const quizFinished = activeQuestionIndex === QUESTIONS.length;

  const handleAnswerClick = useCallback(
    (answer) => {
      if (answerState !== "") {
        return;
      }
      setAnswerState("answered");
      setUserAnswers((prevUserAnswers) => [...prevUserAnswers, answer]);

      setTimeout(() => {
        const correctAnswer =
          language === "EN"
            ? QUESTIONS[activeQuestionIndex].answersEN[0]
            : QUESTIONS[activeQuestionIndex].answersPL[0];
        const newState = answer === correctAnswer ? "correctly" : "incorrectly";
        setAnswerState(newState);

        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex, answerState, language]
  );

  const handleSkipAnswer = useCallback(
    () => handleAnswerClick(null),
    [handleAnswerClick]
  );

  if (quizFinished) {
    return <QuizEnd userAnswers={userAnswers} questions={QUESTIONS} />;
  }

  return (
    <>
      <Question
        questionText={
          language === "EN"
            ? QUESTIONS[activeQuestionIndex].textEN
            : QUESTIONS[activeQuestionIndex].textPL
        }
        answers={
          language === "EN"
            ? QUESTIONS[activeQuestionIndex].answersEN
            : QUESTIONS[activeQuestionIndex].answersPL
        }
        onSelectAnswer={handleAnswerClick}
        activeQuestionIndex={activeQuestionIndex}
        handleSkipAnswer={handleSkipAnswer}
        answerState={answerState}
        userAnswers={userAnswers}
        imageSrc={QUESTIONS[activeQuestionIndex].image}
        imageAlt={
          language === "EN"
            ? QUESTIONS[activeQuestionIndex].altEN
            : QUESTIONS[activeQuestionIndex].altPL
        }
      />
      <div className={classes["shadow"]}></div>
    </>
  );
}

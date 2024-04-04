import QuizEnd from "./QuizEnd";
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
      // Jeśli już odpowiedziano, ignoruj kolejne kliknięcia
      if (answerState !== "") {
        return;
      }

      // Zaznacz, że odpowiedź została wybrana
      setAnswerState("answered");
      setUserAnswers((prevUserAnswers) => [...prevUserAnswers, answer]);

      // Ustawienie timeoutów do zarządzania wyświetlaniem stanów odpowiedzi
      const timeoutId = setTimeout(() => {
        const newState =
          answer === QUESTIONS[activeQuestionIndex].answers[0]
            ? "correctly"
            : "incorrectly";
        setAnswerState(newState);

        const resetStateTimeoutId = setTimeout(() => {
          setAnswerState("");
        }, 2000);

        // Opcjonalnie, przechowywanie ID timeoutu do czyszczenia, jeśli użytkownik szybko przejdzie do następnego pytania
        // clearTimeout(resetStateTimeoutId);
      }, 1000);

      // Czyszczenie timeoutu przy szybkim przejściu między pytaniami
      // return () => clearTimeout(timeoutId);
    },
    [activeQuestionIndex, answerState] // Upewnij się, że odpowiednio zarządzasz zależnościami
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

import QuizEnd from "../components/QuizEnd";
import classes from "./Quiz.module.scss";
import { useState, useEffect, useCallback } from "react";
import QUESTIONS from "../../data/questions";
import Question from "../components/Question";
import { useLanguage } from "../store/language/languageContext";
import Loading from "./Loading";

export default function Quiz() {
  const [loadedImages, setLoadedImages] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);
  const { language } = useLanguage();

  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;
  const quizFinished = activeQuestionIndex === QUESTIONS.length;

  useEffect(() => {
    const loadImage = (imageSrc) =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.src = imageSrc;
        img.onload = () => resolve({ src: img.src, id: imageSrc });
        img.onerror = reject;
      });

    const loadImagesAsync = async () => {
      setIsLoading(true);
      const startTime = Date.now();

      try {
        const imagePromises = QUESTIONS.map((question) =>
          loadImage(question.image)
        );
        const images = await Promise.all(imagePromises);
        const imagesMap = images.reduce((acc, image) => {
          acc[image.id] = image.src;
          return acc;
        }, {});

        const elapsedTime = Date.now() - startTime;
        if (elapsedTime < 1000) {
          await new Promise((resolve) =>
            setTimeout(resolve, 1000 - elapsedTime)
          );
        }

        setLoadedImages(imagesMap);
      } catch (error) {
        console.error("Error loading images:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadImagesAsync();
  }, []);

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

  if (isLoading) {
    return <Loading />;
  }

  if (quizFinished) {
    return <QuizEnd userAnswers={userAnswers} questions={QUESTIONS} />;
  }

  const question = QUESTIONS[activeQuestionIndex];
  const imageSrc = loadedImages[question.image];

  return (
    <>
      <Question
        questionText={language === "EN" ? question.textEN : question.textPL}
        answers={language === "EN" ? question.answersEN : question.answersPL}
        onSelectAnswer={handleAnswerClick}
        activeQuestionIndex={activeQuestionIndex}
        handleSkipAnswer={handleSkipAnswer}
        answerState={answerState}
        userAnswers={userAnswers}
        imageSrc={imageSrc}
        imageAlt={language === "EN" ? question.altEN : question.altPL}
      />
      <div className={classes["shadow"]}></div>
    </>
  );
}

import classes from "./QuizEnd.module.scss";
import { useLanguage } from "../store/language/languageContext";
import { usePage } from "../store/page/pageContext";

export default function QuizEnd({ userAnswers, questions }) {
  const { language } = useLanguage();
  const { changePage } = usePage();

  const totalQuestions = questions.length;
  const correctAnswers = userAnswers.filter((answer, index) => {
    const correctAnswer =
      language === "EN"
        ? questions[index].answersEN[0]
        : questions[index].answersPL[0];
    return answer === correctAnswer;
  }).length;
  const skippedAnswers = userAnswers.filter((answer) => answer === null).length;
  const incorrectAnswers = totalQuestions - correctAnswers - skippedAnswers;

  const correctPercentage = (correctAnswers / totalQuestions) * 100;
  const skippedPercentage = (skippedAnswers / totalQuestions) * 100;
  const incorrectPercentage = (incorrectAnswers / totalQuestions) * 100;

  const content =
    language === "PL"
      ? {
          congrats: "Brawo!",
          congratsText:
            "Ukończyłeś test dotyczący wiedzy o Gminie Trzebownisko!",
          resultsSummary: "Podsumowanie wyników",
          correctAnswers: "Poprawne odpowiedzi",
          skippedAnswers: "Pominięte odpowiedzi",
          incorrectAnswers: "Niepoprawne odpowiedzi",
          returnButton: "Powrót do strony głównej",
          retryButton: "Powtórz test",
        }
      : {
          congrats: "Congrats!",
          congratsText: "You've finished the Trzebownisko Municipality quiz!",
          resultsSummary: "Score Breakdown",
          correctAnswers: "Correct answers",
          skippedAnswers: "Skipped answers",
          incorrectAnswers: "Incorrect answers",
          returnButton: "Back to Home",
          retryButton: "Give it Another Go",
        };

  return (
    <>
      <div className={classes.summary}>
        <h1 className={classes.title}>
          <span className={classes.strong}>{content.congrats}</span>
          {content.congratsText}
        </h1>
        <h2 className={classes["summary-results"]}>{content.resultsSummary}</h2>
        <div className={classes.results}>
          <p className={classes.paragraph}>
            <strong className={classes.text}>{content.correctAnswers}:</strong>
            <span className={classes.score}>
              {" "}
              {correctAnswers} ({correctPercentage.toFixed(2)}%)
            </span>
          </p>
          <p className={classes.paragraph}>
            <strong className={classes.text}>{content.skippedAnswers}:</strong>
            <span className={classes.score}>
              {" "}
              {skippedAnswers} ({skippedPercentage.toFixed(2)}%)
            </span>
          </p>
          <p className={classes.paragraph}>
            <strong className={classes.text}>
              {content.incorrectAnswers}:
            </strong>
            <span className={classes.score}>
              {" "}
              {incorrectAnswers} ({incorrectPercentage.toFixed(2)}%)
            </span>
          </p>
        </div>
        <div className={classes.buttons}>
          <button
            onClick={() => {
              changePage("homePage");
            }}
            className={classes.button}
          >
            {content.returnButton}
          </button>
          <button onClick={() => changePage("quiz")} className={classes.button}>
            {content.retryButton}
          </button>
        </div>
      </div>

      <div className={classes["shadow"]}></div>
    </>
  );
}

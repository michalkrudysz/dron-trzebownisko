import classes from "./QuizEnd.module.scss";

export default function QuizEnd({ userAnswers, questions }) {
  const totalQuestions = questions.length;
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === questions[index].answers[0]
  ).length;
  const skippedAnswers = userAnswers.filter((answer) => answer === null).length;
  const incorrectAnswers = totalQuestions - correctAnswers - skippedAnswers;

  const correctPercentage = (correctAnswers / totalQuestions) * 100;
  const skippedPercentage = (skippedAnswers / totalQuestions) * 100;
  const incorrectPercentage = (incorrectAnswers / totalQuestions) * 100;

  return (
    <>
      <div className={classes.summary}>
        <h1 className={classes.title}>
          <span className={classes.strong}>Brawo!</span> Ukończyłeś test
          dotyczący wiedzy o Gminie Trzebownisko!
        </h1>
        <h2 className={classes["summary-results"]}>Podsumowanie wyników</h2>
        <div className={classes.results}>
          <p className={classes.paragraph}>
            <strong className={classes.text}>Poprawne odpowiedzi:</strong>{" "}
            <span className={classes.score}>
              {correctAnswers} ({correctPercentage.toFixed(2)}%)
            </span>
          </p>
          <p className={classes.paragraph}>
            <strong className={classes.text}>Pominięte odpowiedzi:</strong>{" "}
            <span className={classes.score}>
              {skippedAnswers} ({skippedPercentage.toFixed(2)}%)
            </span>
          </p>
          <p className={classes.paragraph}>
            <strong className={classes.text}>Niepoprawne odpowiedzi:</strong>{" "}
            <span className={classes.score}>
              {incorrectAnswers} ({incorrectPercentage.toFixed(2)}%)
            </span>
          </p>
        </div>
        <div className={classes.buttons}>
          <button className={classes.button}>Powrót do strony głównej</button>
          <button className={classes.button}>Powtórz test</button>
        </div>
      </div>

      <div className={classes["shadow"]}></div>
    </>
  );
}

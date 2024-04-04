export default function QuizEnd({ userAnswers, questions }) {
  const totalQuestions = questions.length;
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === questions[index].answers[0]
  ).length;
  const skippedAnswers = userAnswers.filter((answer) => answer === null).length;
  const incorrectAnswers = userAnswers.length - correctAnswers - skippedAnswers;

  const correctPercentage = (correctAnswers / totalQuestions) * 100;
  const skippedPercentage = (skippedAnswers / totalQuestions) * 100;
  const incorrectPercentage = (incorrectAnswers / totalQuestions) * 100;

  return (
    <div>
      <h2>Podsumowanie</h2>
      <p>
        <strong>Poprawne odpowiedzi:</strong> {correctAnswers} (
        {correctPercentage.toFixed(2)}%)
      </p>
      <p>
        <strong>Pominięte odpowiedzi:</strong> {skippedAnswers} (
        {skippedPercentage.toFixed(2)}%)
      </p>
      <p>
        <strong>Błędne odpowiedzi:</strong> {incorrectAnswers} (
        {incorrectPercentage.toFixed(2)}%)
      </p>
    </div>
  );
}

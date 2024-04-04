import classes from "./Quiz.module.scss";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";

export default function Question({
  questionText,
  answers,
  onSelectAnswer,
  activeQuestionIndex,
  handleSkipAnswer,
  answerState,
  userAnswers,
  imageSrc,
  imageAlt,
}) {
  return (
    <div className={classes.quiz}>
      <div className={classes.timer}>
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />
      </div>
      <div className={classes.image}>
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <div className={classes.question}>
        <h2 className={classes.header}>{questionText}</h2>
        <Answers
          key={activeQuestionIndex}
          answers={answers}
          selectedAnswer={userAnswers[userAnswers.length - 1]}
          answerState={answerState}
          onSelect={onSelectAnswer}
        />
      </div>
    </div>
  );
}

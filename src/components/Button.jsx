import classes from "./Button.module.scss";

export default function Button({ kind, children, onClick }) {
  return kind === false ? (
    <button
      className={`${classes.button} ${classes.explore}`}
      onClick={onClick}
    >
      {children}
    </button>
  ) : (
    <button className={classes.button} onClick={onClick}>
      {children}
    </button>
  );
}

import classes from "./ExploreTheMunicipality.module.scss";

export default function ExploreTheMunicipality() {
  return (
    <div className={classes.top}>
      <div className={classes.header}>
        <h3>Odkrywaj gminę</h3>
        <h1>Zagraj w quiz lub wyszukaj miejsce</h1>
      </div>
      <div className={classes.blocks}>
        <div className={`${classes["left-block"]} ${classes["block"]}`}>
          <div className={classes.title}>Quiz</div>
          <div className={classes.description}>
            Rozwiąż quiz i sprawdź swoją wiedzę o gminie
          </div>
          <button className={classes.button}>Rozpocznij</button>
        </div>
        <div className={`$classes["right-block"] ${classes["block"]}`}>
          <div className={classes.title}>Znajdź miejsce</div>
          <div className={classes["description"]}>
            Wybierz miejscowość, która Cię interesuje, aby wyświetlić materiały
          </div>
          <div className={classes["search-block"]}>
            <select className={classes["select"]}>
              <option value="1">Miejscowość 1</option>
              <option value="2">Miejscowość 2</option>
              <option value="3">Miejscowość 3</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

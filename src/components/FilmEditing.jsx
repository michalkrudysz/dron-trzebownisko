import classes from "./FilmEditing.module.scss";
import screenshotFromThePremiereProProject from "../assets/portfolio/screenshot-from-the-premiere-pro-project.png";
import marzenaISzczepanPhoto from "../assets/portfolio/marzena-i-szczepan-photo.png";
import idaICezary from "../assets/portfolio/ida-i-cezary-photo.png";

export default function FilmEditing() {
  return (
    <>
      <div className={classes.top}>
        <h1 className={classes.title}>Postprodukcja wideo</h1>
      </div>
      <div className={classes["film-editing"]}>
        <div className={classes.left}>
          <div className={classes["photo-box"]}>
            <div className={classes.photo}>
              <img
                src={screenshotFromThePremiereProProject}
                alt="Screenshot from the Premiere Pro project"
              />
            </div>
          </div>
        </div>
        <div className={classes.right}>
          <h1 className={classes.text}>
            W procesie posprodukcji wideo rolę odgrywa nie tylko materiał
            źródłowy, ale także umiejętność opowiedzenia historii w sposób,
            który najlepiej odpowiada intencjom i oczekiwaniom klienta. Dzięki
            pracy przy użyciu programów z pakietu Adobe, moje projekty filmowe,
            szczególnie te dotyczące uroczystości ślubnych, są realizowane z
            dbałością o detale, co pozwala na stworzenie wyjątkowej i
            klimatycznej narracji.
          </h1>
          <h2>Kluczowe aspekty mojego podejścia do posprodukcji obejmują:</h2>
          <ul className={classes["list"]}>
            <li>
              Staranny dobór i sekwencjonowanie materiału filmowego, aby
              opowieść płynęła naturalnie i wciągała odbiorcę.
            </li>
            <li>
              Regulacja szybkości cięć zgodnie z dynamiką wydarzeń i muzyką, co
              pozwala na budowanie napięcia lub podkreślanie emocjonalnych
              momentów.
            </li>
            <li>
              Dobór muzyki i efektów dźwiękowych, które harmonizują z obrazem i
              wzbogacają narrację.
            </li>
            <li>
              Kolor korekcja, dostosowując tonację i nastrój obrazu do klimatu
              historii oraz preferencji klienta.
            </li>
            <li>
              Przejrzyste struktury folderów, nazwy sekwencji i oznaczenia
              kolorystyczne na osi czasu, ułatwiające zarządzanie projektem i
              współpracę.
            </li>
            <li>
              Szczególna uwaga na jakość audio-wizualną, w tym stabilizację
              obrazu, eliminację pustych klatek, płynne przejścia audio oraz
              redukcję szumów.
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.materials}>
        <h2 className={classes.info}>
          Niestety, nie mogę publicznie udostępniać materiałów wykonanych dla
          klientów. Niemniej jednak, chciałbym zaprezentować dwa teledyski,
          które zostały opublikowane na platformie YouTube.
        </h2>
        <div className={classes["video-box"]}>
          <div className={classes.video}>
            <img src={idaICezary} alt="Ida i Cezary" />
          </div>
          <div className={classes.video}>
            <img src={marzenaISzczepanPhoto} alt="Marzena i Szczepan" />
          </div>
        </div>
      </div>
    </>
  );
}

import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLanguage } from "../store/language/languageContext";
import REFERENCES from "../../data/references";
import HOME_PAGE_CONTENT from "../../data/homePageContent";
import classes from "./HomePage.module.scss";
import Button from "./Button";
import ReferenceBox from "./ReferenceBox";

const contentByLanguage = HOME_PAGE_CONTENT;

const seo = {
  title:
    "Dron Trzebownisko - Profesjonalne Zdjęcia Lotnicze Gminy | Michał Krudysz",
  description:
    "Odkryj niezrównane piękno gminy Trzebownisko z nowej perspektywy dzięki profesjonalnym zdjęciom lotniczym. Michał Krudysz, ekspert w dziedzinie fotografii dronowej, przedstawia unikalne widoki Jasionki, Łąki, Łukawca, Nowej Wsi, Stobiernej, Tajęciny, Terliczki, Trzebowniska, Wólki Podleśnej, Zaczernia i więcej. Dołącz do naszej społeczności i odkrywaj z nami każdy zakątek gminy, dzięki interaktywnej mapie i bogatej galerii zdjęć. Sprawdź również nasze portfolio, które obejmuje zadziwiające fotografie z różnych miejsc Europy i referencje od renomowanych firm, potwierdzające najwyższą jakość usług.",
  keywords:
    "dron trzebownisko, zdjęcia lotnicze, fotografie dronowe, Michał Krudysz, portfolio fotograficzne, gmina Trzebownisko, widoki z drona, odkrywanie gminy, sołectwa Jasionka, Łąka, Łukawiec, Nowa Wieś, Stobierna, Tajęcina, Terliczka, Trzebownisko, Wólka Podleśna, Zaczernie, turystyka, promocja gminy, fotografie Europy",
  robots: "index, follow",
  canonical: "https://drontrzebownisko.pl",
  og: {
    site_name: "Dron Trzebownisko",
    type: "website",
    image: "https://drontrzebownisko.pl/path_to_your_social_media_image.jpg",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    // creator: "@your_twitter_handle",
    title:
      "Dron Trzebownisko - Profesjonalne Zdjęcia Lotnicze Gminy | Michał Krudysz",
    description:
      "Odkryj niezrównane piękno gminy Trzebownisko z nowej perspektywy...",
  },
};

const getRandomIndexes = (length, count) => {
  let indexes = [];
  while (indexes.length < count) {
    let index = Math.floor(Math.random() * length);
    if (!indexes.includes(index)) {
      indexes.push(index);
    }
  }
  return indexes;
};

export default function HomePage() {
  const { language } = useLanguage();

  const [indexes, setIndexes] = useState(
    getRandomIndexes(REFERENCES.length, 3)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexes(getRandomIndexes(REFERENCES.length, 3));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const { greeting, description, buttons } =
    contentByLanguage[language] || contentByLanguage.PL;

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <meta name="robots" content={seo.robots} />
        <link rel="canonical" href={seo.canonical} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.og.image} />
        <meta property="og:type" content={seo.og.type} />
        <meta property="og:site_name" content={seo.og.site_name} />
        <meta property="og:locale" content={seo.og.locale} />
        <meta name="twitter:card" content={seo.twitter.card} />
        <meta name="twitter:title" content={seo.twitter.title} />
        <meta name="twitter:description" content={seo.twitter.description} />
        <meta name="twitter:creator" content={seo.twitter.creator} />
      </Helmet>

      <div className={classes["home-page"]}>
        <section className={classes.section}>
          <div className={classes["left-container"]}>
            <h1 className={classes.h1}>
              <span className={classes["highlighted-text"]}>
                {greeting.split(" ")[0]}
              </span>{" "}
              {greeting.split(" ").slice(1).join(" ")}
            </h1>
            <h2 className={classes.h2}>{description}</h2>
            <div className={classes["button-container"]}>
              <Button>{buttons.portfolio}</Button>
              <Button kind={false}>{buttons.discover}</Button>
            </div>
          </div>
          <div className={classes["right-container"]}>
            {indexes.map((index) => {
              const reference = REFERENCES[index];
              return (
                <div
                  key={reference.id}
                  className={
                    classes[
                      ["first", "second", "third"][indexes.indexOf(index)]
                    ]
                  }
                >
                  <ReferenceBox
                    id={reference.id}
                    logo={reference.logo}
                    companyName={reference.companyName}
                    descriptionPL={reference.descriptionPL}
                    descriptionEN={reference.descriptionEN}
                    language={language}
                  />
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <div className={classes["shadow"]}></div>
    </>
  );
}

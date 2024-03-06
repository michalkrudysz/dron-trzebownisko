import React from "react";
import { Helmet } from "react-helmet";
import classes from "./HomePage.module.scss";
import Button from "./Button";
import ReferenceBox from "./ReferenceBox";

const contentByLanguage = {
  PL: {
    greeting: "Cześć! Nazywam się Michał",
    description:
      "Od 2017 do 2021 roku tworzyłem drontrzebownisko.pl, by z innej perspektywy pokazać piękno naszej Gminy. Zapraszam Cię do wspólnego odkrywania jej zakątków oraz historii mojego projektu.",
    buttons: {
      portfolio: "Portfolio",
      discover: "Odkryj gminę",
    },
  },
  EN: {
    greeting: "Hello! My name is Michał",
    description:
      "From 2017 to 2021, I created drontrzebownisko.pl to show the beauty of our Municipality from a different perspective. I invite you to explore its various places and the history of my project together.",
    buttons: {
      portfolio: "Portfolio",
      discover: "Explore the Municipality",
    },
  },
};

// SEO information
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

export default function HomePage({ language }) {
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
            <div className={classes.first}>
              <ReferenceBox language={language} id={2} />
            </div>
            <div className={classes.second}>
              <ReferenceBox language={language} id={1} />
            </div>
            <div className={classes.third}>
              <ReferenceBox language={language} id={3} />
            </div>
          </div>
        </section>
      </div>
      <div className={classes["shadow"]}></div>
    </>
  );
}

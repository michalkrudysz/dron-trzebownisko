import idaICezary from "../src/assets/portfolio/ida-i-cezary-photo.png";
import marzenaISzczepanPhoto from "../src/assets/portfolio/marzena-i-szczepan-photo.png";

const PORTFOLIO_CONTENT = [
  {
    name: "Portfolio",
    PL: {
      content: `Moja pasja do dokumentowania niezapomnianych chwil, zarówno w
        trakcie podróży, jak i w codziennym życiu, zaowocowała stworzeniem
        obszernej kolekcji. Portfolio to także przestrzeń, w której
        prezentuję moje doświadczenie w tworzeniu relacji z wydarzeń,
        filmów korporacyjnych, spotów czy dokumentacji inwestycji. Dzięki
        współpracy z różnymi firmami, szczególnie przy tworzeniu filmów
        ślubnych, zgromadziłem portfolio montaży filmowych, liczące
        dziesiątki zrealizowanych projektów.`,
    },
    EN: {
      content: `My passion for documenting unforgettable moments, both while traveling and in everyday life, has resulted in the creation of an extensive collection. This portfolio is also a space where I present my experience in creating coverage of events, corporate films, commercials, or investment documentation. Thanks to cooperation with various companies, especially in creating wedding films, I have accumulated a film editing portfolio counting dozens of completed projects.`,
    },
  },
  {
    name: "Category",
    materials: [
      {
        imgUrl: "cyprus-2019-4.png",
        altPL: "test",
        altEN: "test",
      },
    ],
  },
  {
    name: "FilmEditing",
    PL: {
      title: `Postprodukcja wideo`,
      content: `W procesie posprodukcji wideo rolę odgrywa nie tylko materiał
        źródłowy, ale także umiejętność opowiedzenia historii w sposób,
        który najlepiej odpowiada intencjom i oczekiwaniom klienta. Dzięki
        pracy przy użyciu programów z pakietu Adobe, moje projekty filmowe,
        szczególnie te dotyczące uroczystości ślubnych, są realizowane z
        dbałością o detale, co pozwala na stworzenie wyjątkowej i
        klimatycznej narracji.`,
      h2: `Kluczowe aspekty mojego podejścia do postprodukcji obejmują:`,
      liFirst: `Staranny dobór i sekwencjonowanie materiału filmowego, aby
        opowieść płynęła naturalnie i wciągała odbiorcę.`,
      liSecond: `Regulacja szybkości cięć zgodnie z dynamiką wydarzeń i muzyką, co
        pozwala na budowanie napięcia lub podkreślanie emocjonalnych
        momentów.`,
      liThird: `Dobór muzyki i efektów dźwiękowych, które harmonizują z obrazem i
        wzbogacają narrację.`,
      liFourth: `Kolor korekcja, dostosowując tonację i nastrój obrazu do klimatu
        historii oraz preferencji klienta.`,
      liFifth: `Przejrzyste struktury folderów, nazwy sekwencji i oznaczenia
        kolorystyczne na osi czasu, ułatwiające zarządzanie projektem i
        współpracę.`,
      liSixth: `Szczególna uwaga na jakość audio-wizualną, w tym stabilizację
        obrazu, eliminację pustych klatek, płynne przejścia audio oraz
        redukcję szumów.`,
      info: `Niestety, nie mogę publicznie udostępniać materiałów wykonanych dla
        klientów. Niemniej jednak, chciałbym zaprezentować dwa teledyski,
        które zostały opublikowane na platformie YouTube.`,
      video: [
        {
          alt: `Ida i Cezary`,
          src: idaICezary,
        },
        {
          title: `Marzena i Szczepan`,
          src: marzenaISzczepanPhoto,
        },
      ],
    },
    EN: {
      title: `Video post-production`,
      content: `In the video post-production process, not only the source material plays a role but also the ability to tell a story in a way that best meets the intentions and expectations of the client. Thanks to work using Adobe package programs, my film projects, especially those related to wedding ceremonies, are realized with attention to detail, which allows for the creation of a unique and atmospheric narrative.`,
      h2: `Key aspects of my approach to post-production include:`,
      liFirst: `Careful selection and sequencing of film material so that the story flows naturally and engages the viewer.`,
      liSecond: `Adjusting the speed of cuts in accordance with the dynamics of the events and music, which allows for building tension or emphasizing emotional moments.`,
      liThird: `Selection of music and sound effects that harmonize with the image and enrich the narration.`,
      liFourth: `Color correction, adjusting the tone and mood of the image to match the atmosphere of the story and the client's preferences.`,
      liFifth: `Clear folder structures, sequence names, and color coding on the timeline, facilitating project management and collaboration.`,
      liSixth: `Special attention to audio-visual quality, including image stabilization, elimination of blank frames, smooth audio transitions, and noise reduction.`,
      info: `Unfortunately, I cannot publicly share materials created for clients. However, I would like to present two music videos that have been published on the YouTube platform.`,
      video: [
        {
          alt: `Ida i Cezary`,
          src: idaICezary,
        },
        {
          alt: `Marzena i Szczepan`,
          src: marzenaISzczepanPhoto,
        },
      ],
    },
  },
];

export default PORTFOLIO_CONTENT;

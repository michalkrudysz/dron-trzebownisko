import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../store/language/languageContext";
import { usePage } from "../store/page/pageContext";
import REFERENCES from "../../data/references";
import HOME_PAGE_CONTENT from "../../data/homePageContent";
import classes from "./HomePage.module.scss";
import Button from "./Button";
import ReferenceBox from "./ReferenceBox";
import ModalReference from "./ModalReference";
import Loading from "./Loading";

export default function HomePage() {
  const [loadedImages, setLoadedImages] = useState({});
  const [referenceImage, setReferenceImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const modalReferenceRef = useRef();
  const { language } = useLanguage();
  const { changePage } = usePage();

  useEffect(() => {
    const loadImage = (imageSrc) =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.src = imageSrc;
        img.onload = () => resolve({ src: img.src, id: imageSrc });
        img.onerror = (e) => reject(e);
      });

    const loadImagesAsync = (references) => {
      setIsLoading(true);
      const startTime = Date.now();

      const imagePromises = references.flatMap((ref) => [
        loadImage(ref.logo),
        loadImage(ref.referenceImage),
      ]);

      Promise.all(imagePromises)
        .then((images) => {
          const imagesMap = images.reduce((acc, image) => {
            acc[image.id] = image.src;
            return acc;
          }, {});

          const elapsedTime = Date.now() - startTime;
          if (elapsedTime < 1000) {
            return new Promise((resolve) =>
              setTimeout(resolve, 1000 - elapsedTime)
            ).then(() => imagesMap);
          }
          return imagesMap;
        })
        .then((imagesMap) => {
          setLoadedImages(imagesMap);
        })
        .catch((error) => {
          console.error("Error loading images:", error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    loadImagesAsync(REFERENCES);
  }, []);

  const handleModalReference = (imageSrc) => {
    setReferenceImage(loadedImages[imageSrc]);
    if (modalReferenceRef.current) {
      modalReferenceRef.current.openModal();
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  const { greeting, description, buttons } =
    HOME_PAGE_CONTENT[language] || HOME_PAGE_CONTENT.PL;

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

  const indexes = getRandomIndexes(REFERENCES.length, 3);

  return (
    <>
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
              <Button onClick={() => changePage("portfolio")}>
                {buttons.portfolio}
              </Button>
              <Button
                onClick={() => changePage("exploreTheMunicipality")}
                kind={false}
              >
                {buttons.discover}
              </Button>
            </div>
          </div>

          <div className={classes["right-container"]}>
            <ModalReference image={referenceImage} ref={modalReferenceRef} />
            {indexes.map((index) => {
              const reference = REFERENCES[index];
              return (
                <div
                  onClick={() => handleModalReference(reference.referenceImage)}
                  key={reference.id}
                  className={
                    classes[
                      ["first", "second", "third"][indexes.indexOf(index)]
                    ]
                  }
                >
                  <ReferenceBox
                    id={reference.id}
                    logo={loadedImages[reference.logo]}
                    companyName={reference.companyName}
                    descriptionPL={reference.descriptionPL}
                    descriptionEN={reference.descriptionEN}
                  />
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <div className={classes["shadow"]}></div>
      <footer className={classes.footer}>&copy; Michał Krudysz 2024</footer>
    </>
  );
}

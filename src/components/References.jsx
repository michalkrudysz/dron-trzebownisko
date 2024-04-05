import { useState, useRef, useEffect } from "react";
import classes from "./References.module.scss";
import { useLanguage } from "../store/language/languageContext";
import ReferenceBox from "./ReferenceBox";
import REFERENCES from "../../data/references";
import REFERENCES_CONTENT from "../../data/referencesContent";
import ModalReference from "./ModalReference";
import Loading from "./Loading";

export default function References() {
  const [loadedImages, setLoadedImages] = useState({});
  const [referenceImage, setReferenceImage] = useState(null);
  const modalReferenceRef = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const { language } = useLanguage();

  useEffect(() => {
    const loadImage = (imageSrc) =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.src = imageSrc;
        img.onload = () => resolve({ src: img.src, id: imageSrc });
        img.onerror = reject;
      });

    const loadImagesAsync = async (references) => {
      setIsLoading(true);
      const startTime = Date.now();

      try {
        const imagePromises = references.flatMap((ref) => [
          loadImage(ref.logo),
          loadImage(ref.referenceImage),
        ]);

        const images = await Promise.all(imagePromises);
        const elapsedTime = Date.now() - startTime;

        if (elapsedTime < 1000) {
          await new Promise((resolve) =>
            setTimeout(resolve, 1000 - elapsedTime)
          );
        }

        const imagesMap = images.reduce((acc, image) => {
          acc[image.id] = image.src;
          return acc;
        }, {});

        setLoadedImages(imagesMap);
      } catch (error) {
        console.error("Error loading images:", error);
      } finally {
        setIsLoading(false);
      }
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

  const contentByLanguage =
    REFERENCES_CONTENT[language] || REFERENCES_CONTENT.PL;
  const { left, leftInfo, rightDescription } = contentByLanguage;

  return (
    <>
      <div className={classes.headline}>
        <div className={classes.container}>
          <div className={classes.left}>
            <h1>{left}</h1>
            <p>{leftInfo}</p>
          </div>
          <div className={classes.right}>
            <h2>{rightDescription}</h2>
          </div>
        </div>
      </div>
      <ul className={classes.references}>
        <ModalReference image={referenceImage} ref={modalReferenceRef} />
        {REFERENCES.map((reference) => (
          <li
            key={reference.id}
            onClick={() => handleModalReference(reference.referenceImage)}
          >
            <ReferenceBox
              id={reference.id}
              logo={loadedImages[reference.logo]}
              companyName={reference.companyName}
              descriptionPL={reference.descriptionPL}
              descriptionEN={reference.descriptionEN}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

import * as React from "react";
import Loading from "./Loading";
import HomePage from "./HomePage";
import cacheImages from "../utils/imageLoader";
import REFERENCES from "../../data/references";

const HomePageWrapper = () => {
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    async function preloadImages() {
      const imageSrcs = REFERENCES.reduce((acc, ref) => {
        if (ref.logo) acc.push(ref.logo);
        if (ref.referenceImage) acc.push(ref.referenceImage);
        return acc;
      }, []);

      try {
        await cacheImages(imageSrcs);
        setIsReady(true);
      } catch (error) {
        console.error("Problem z załadowaniem obrazków.", error);
      }
    }

    preloadImages();
  }, []);

  if (!isReady) {
    return <Loading />;
  }

  return (
    <React.Suspense fallback={<Loading />}>
      <HomePage />
    </React.Suspense>
  );
};

export default HomePageWrapper;

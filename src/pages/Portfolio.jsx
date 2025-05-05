import classes from "./Portfolio.module.scss";
import SkillBar from "../components/SkillBar";
import Category from "../components/Category";
import FilmEditing from "../components/FilmEditing";
import FilmProductions from "../components/FilmProductions";
import Photos from "../components/Photos";
import PORTFOLIO_CONTENT from "../../data/portfolioContent";
import { useLanguage } from "../store/language/languageContext";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import VideoModal from "../components/VideoModal";

export default function Portfolio() {
  const { language } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);
  const content = PORTFOLIO_CONTENT[0][language]?.content;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <VideoModal />
      <div className={classes["top"]}>
        <div className={classes["portfolio"]}>
          <div className={classes["left"]}>
            <h1 className={classes["text"]}>{content}</h1>
            <div className={classes["skills-box"]}>
              <div className={classes.skills}>
                <SkillBar
                  skill="Adobe Premiere Pro"
                  percentage={95}
                  color="#0455BF"
                />
                <SkillBar
                  skill="Adobe Photoshop"
                  percentage={70}
                  color="#3084F2"
                />
                <SkillBar
                  skill="Adobe Auditiono"
                  percentage={50}
                  color="#5096F2"
                />
                <SkillBar
                  skill="Adobe After Effects"
                  percentage={30}
                  color="#7EB0F2"
                />
              </div>
            </div>
          </div>
          <div className={classes["right"]}>
            <Category materials={PORTFOLIO_CONTENT[1]} />
          </div>
        </div>
      </div>
      <FilmEditing content={PORTFOLIO_CONTENT[2]} />
      <FilmProductions content={PORTFOLIO_CONTENT[3]} />
      <Photos photos={PORTFOLIO_CONTENT[1]} />
    </>
  );
}

import classes from "./Portfolio.module.scss";
import SkillBar from "./SkillBar";
import Category from "./Category";
import FilmEditing from "./FilmEditing";
import FilmProductions from "./FilmProductions";
import Photos from "./Photos";
import PORTFOLIO_CONTENT from "../../data/portfolioContent";
import { useLanguage } from "../store/language/languageContext";

export default function Portfolio() {
  const { language } = useLanguage();

  const { content } = PORTFOLIO_CONTENT[0][language];

  return (
    <>
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

import classes from "./MobileMenu.module.scss";
import Button from "./Button";
import { useLanguage } from "../store/language/languageContext";
import { usePage } from "../store/page/pageContext";
import NAVIGATION_CONTENT from "../../data/navigationContent";

export default function MobileMenu({ setIsMenuOpen }) {
  const { language } = useLanguage();
  const { changePage } = usePage();
  const content = NAVIGATION_CONTENT[language] || NAVIGATION_CONTENT.PL;

  const handleChangePage = (page) => {
    changePage(page);
    setIsMenuOpen(false);
  };

  return (
    <div className={classes["mobile-menu"]}>
      <Button onClick={() => handleChangePage("portfolio")}>
        {content.portfolio}
      </Button>
      <Button onClick={() => handleChangePage("references")}>
        {content.references}
      </Button>
      <Button
        onClick={() => handleChangePage("exploreTheMunicipality")}
        kind={false}
      >
        {content.exploreTheMunicipality}
      </Button>
    </div>
  );
}

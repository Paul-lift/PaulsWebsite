import styles from "./skillsAndLanguages.module.css";

// Import der Icons
import HTMLIcon from "../../assets/icons/HTML_icon.png";
import CSSIcon from "../../assets/icons/CSS_icon.png";
import JSIcon from "../../assets/icons/JS_icon.png";
import JavaIcon from "../../assets/icons/Java_icon.png";
import ReactIcon from "../../assets/icons/React_icon.png";
import AngularIcon from "../../assets/icons/Angular_icon.png";

function SkillsAndLanguages(props: any) {
  return (
    <>
      <div ref={props.refProp}></div>
      <div className={[styles.skillsAndLanguagesWrapper].join(" ")}>
        <h1 className={[styles.header, styles.gradientText].join(" ")}>
          Coding Skills
        </h1>
        <div className={[styles.skillsContainerWrapper].join(" ")}>

          <div className={[styles.skillsContainer, styles.HTMLcontainer].join(" ")}>
            <img src={HTMLIcon} alt="HTML Icon" className={[styles.icon].join(" ")} />
            <p>HTML - Erweiterte Grundkenntnisse</p>
          </div>

          <div className={[styles.skillsContainer, styles.CSScontainer].join(" ")}>
            <img src={CSSIcon} alt="CSS Icon" className={[styles.icon].join(" ")} />
            <p>CSS - Erweiterte Grundkenntnisse</p>
          </div>

          <div className={[styles.skillsContainer, styles.JScontainer].join(" ")}>
            <img src={JSIcon} alt="JavaScript Icon" className={[styles.icon].join(" ")} />
            <p>JavaScript - Erweiterte Grundkenntnisse</p>
          </div>

          <div className={[styles.skillsContainer, styles.javaContainer].join(" ")}>
            <img src={JavaIcon} alt="Java Icon" className={[styles.icon].join(" ")} />
            <p>Java - Grundkenntnisse</p>
          </div>

          <div className={[styles.skillsContainer, styles.reactContainer].join(" ")}>
            <img src={ReactIcon} alt="React Icon" className={[styles.icon].join(" ")} />
            <p>React - Grundkenntnisse</p>
          </div>

          <div className={[styles.skillsContainer, styles.angularContainer].join(" ")}>
            <img src={AngularIcon} alt="Angular Icon" className={[styles.icon].join(" ")} />
            <p>Angular - Grundkenntnisse</p>
          </div>
          
        </div>

        <h1 className={[styles.header, styles.gradientText].join(" ")}>
          Meine Werte & Stärken
        </h1>

        <h1 className={[styles.header, styles.gradientText].join(" ")}>
          Sprachen
        </h1>

        <div className={[styles.languagesWrapper].join(" ")}>
          <div className={[styles.languagesContainer].join(" ")}>
            <p>Deutsch - Muttersprache</p>
          </div>
          <div className={[styles.languagesContainer].join(" ")}>
            <p>Englisch - Fliessend</p>
          </div>
          <div className={[styles.languagesContainer].join(" ")}>
            <p>Französisch - Schulkenntnisse</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillsAndLanguages;

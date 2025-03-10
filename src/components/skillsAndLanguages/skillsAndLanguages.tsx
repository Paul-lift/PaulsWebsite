import styles from "./skillsAndLanguages.module.css";

function skillsAndLanguages(props: any) {
  return (
    <>
      <div ref={props.refProp}></div>
      <div className={[styles.skillsAndLanguagesWrapper].join(" ")}>
        <h1 className={[styles.header, styles.gradientText].join(" ")}>
          Coding Skills
        </h1>
        <div className={[styles.skillsContainerWrapper].join(" ")}>
          <div
            className={[styles.skillsContainer, styles.HTMLcontainer].join(" ")}
          >
            <img
              src="src\assets\icons\HTML_icon.png"
              alt="HTML Icon"
              className={[styles.icon].join(" ")}
            />
            <p>HTML - Erweiterte Grundkenntnisse</p>
          </div>
          <div
            className={[styles.skillsContainer, styles.CSScontainer].join(" ")}
          >
            <img
              src="src\assets\icons\CSS_icon.png"
              alt="CSS Icon"
              className={[styles.icon].join(" ")}
            />

            <p>CSS - Erweiterte Grundkenntnisse</p>
          </div>
          <div
            className={[styles.skillsContainer, styles.JScontainer].join(" ")}
          >
            <img
              src="src\assets\icons\JS_icon.png"
              alt="CSS Icon"
              className={[styles.icon].join(" ")}
            />
            <p>JavaScript - Erweiterte Grundkenntnisse</p>
          </div>
          <div
            className={[styles.skillsContainer, styles.javaContainer].join(" ")}
          >
            <img
              src="src\assets\icons\Java_icon.png"
              alt="CSS Icon"
              className={[styles.icon].join(" ")}
            />
            <p>Java - Grundkenntnisse</p>
          </div>
          <div
            className={[styles.skillsContainer, styles.reactContainer].join(
              " "
            )}
          >
            <img
              src="src\assets\icons\React_icon.png"
              alt="CSS Icon"
              className={[styles.icon].join(" ")}
            />
            <p>React - Grundkenntnisse</p>
          </div>
          <div
            className={[styles.skillsContainer, styles.angularContainer].join(
              " "
            )}
          >
            <img
              src="src\assets\icons\Angular_icon.png"
              alt="CSS Icon"
              className={[styles.icon].join(" ")}
            />
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
export default skillsAndLanguages;

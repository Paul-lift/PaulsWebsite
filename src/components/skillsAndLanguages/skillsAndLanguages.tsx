import styles from "./skillsAndLanguages.module.css";

// Import der Icons
import HTMLIcon from "../../assets/icons/HTML_icon.png";
import CSSIcon from "../../assets/icons/CSS_icon.png";
import JSIcon from "../../assets/icons/JS_icon.png";
import JavaIcon from "../../assets/icons/Java_icon.png";
import ReactIcon from "../../assets/icons/React_icon.png";
import AngularIcon from "../../assets/icons/Angular_icon.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";

function SkillsAndLanguages(props: any) {
  const languagesAndValues = [
    "Deutsch - Muttersprache",
    "Englisch - Fliessend",
    "Französisch - Schulkenntnisse",
    "💡 Kreativ",
    "🚀 Zielstrebig",
    "⚡ Motiviert",
    "🌍 Offen für Neues",
    "💯 Authentisch",
    "🤝 Respektvoll",
    "☀️ Optimistisch",
    "⏱ Effizient",
    "🔍 Detailverliebt",
    "🗣 Kommunikativ",
    "🤝 Teamfähig",
    "🔎 Neugierig",
    "📚 Lernbereit",
    "🌱 Anpassungsfähig",
    "⚡ Schnell lernend",
  ];

  const skillsRef = useRef(null); //SkillsContainer reference
  const languagesRef = useRef(null); //languages reference

  //Blend in effekt for Skills
  useEffect(() => {
    gsap.fromTo(
      skillsRef.current,
      { opacity: 0, y: -40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  //Blend in effekt for languages
  useEffect(() => {
    gsap.fromTo(
      languagesRef.current,
      { opacity: 0, y: -40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: languagesRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <>
    <div id="skillsAndLanguages"></div>
      <div className={[styles.skillsAndLanguagesWrapper].join(" ")}>
        <h1 className={[styles.header, styles.gradientText].join(" ")}>
          Coding Skills
        </h1>
        <div
          ref={skillsRef}
          className={[styles.skillsContainerWrapper].join(" ")}
        >
          <div
            className={[styles.skillsContainer, styles.HTMLcontainer].join(" ")}
          >
            <img
              src={HTMLIcon}
              alt="HTML Icon"
              className={[styles.icon].join(" ")}
            />
            <p>HTML - Erweiterte Grundkenntnisse</p>
          </div>

          <div
            className={[styles.skillsContainer, styles.CSScontainer].join(" ")}
          >
            <img
              src={CSSIcon}
              alt="CSS Icon"
              className={[styles.icon].join(" ")}
            />
            <p>CSS - Erweiterte Grundkenntnisse</p>
          </div>

          <div
            className={[styles.skillsContainer, styles.JScontainer].join(" ")}
          >
            <img
              src={JSIcon}
              alt="JavaScript Icon"
              className={[styles.icon].join(" ")}
            />
            <p>JavaScript - Erweiterte Grundkenntnisse</p>
          </div>

          <div
            className={[styles.skillsContainer, styles.javaContainer].join(" ")}
          >
            <img
              src={JavaIcon}
              alt="Java Icon"
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
              src={ReactIcon}
              alt="React Icon"
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
              src={AngularIcon}
              alt="Angular Icon"
              className={[styles.icon].join(" ")}
            />
            <p>Angular - Grundkenntnisse</p>
          </div>
        </div>

        <h1 className={[styles.header, styles.gradientText].join(" ")}>
          Sprachen und meine Werte
        </h1>

        <div ref={languagesRef} className={[styles.languagesWrapper].join(" ")}>
          {languagesAndValues.map((value, index) => (
            <div key={index} className={[styles.languagesContainer].join(" ")}>
              <p>{value}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SkillsAndLanguages;

import styles from "./Projects.module.css";
import { useEffect,useRef } from "react";
import gsap from "gsap";

function Projects(props: any) {
  let projectsRef  =useRef(null)


    //Blend in effekt 
    useEffect(() => {
      gsap.fromTo(
        projectsRef.current,
        { opacity: 0, y: -40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 60%",
            toggleActions: "play none none none",
          },
        }
      );
    }, []);
  return (
    <>
      <div ref={props.refProp}></div>
      <div ref={projectsRef} className={[styles.projectsWrapper].join(" ")}>
        <h1 className={[styles.gradientText, styles.header].join(" ")}>
          Projekte
        </h1>
        <section className={styles.projectsContainer}>
          <div className={styles.projectContainer}>
            <h2 className={styles.gradientText}>Learning Leader - CodemiX2</h2>
            <p>
              Betreuung und Unterstützung von Erstjahrlernenden in der
              Applikationsentwicklung <br /> (HTML, CSS, JavaScript, TypeScript,
              React, Java, Spring Boot),
              <br /> Vermittlung von Fachwissen und Begleitung bei
              Projektarbeiten.
              <br />
              Projektanbieter: Georgokitsos Dimosthenis
              <br></br>
              03.02.2025-31.07.2025
            </p>
          </div>
          <div className={styles.projectContainer}>
            <h2 className={styles.gradientText}>
              Basissemester - Team Minions
            </h2>
            <p>
              Grundlagen in HTML, CSS, JavaScript und Angular. Erste Erfahurngen
              mit Scrum gesammelt <br />
              Projektanbieter: Fasanella Margherita
              <br />
              12.08.2024-31.01.2025
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Projects;

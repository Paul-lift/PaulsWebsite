import styles from "./Projects.module.css";

function Projects(props: any) {
  return (
    <>
      <div ref={props.refProp}></div>
      <div className={[styles.projectsWrapper].join(" ")}>
        <h1 className={[styles.gradientText, styles.header].join(" ")}>
          Projekte
        </h1>
        <section className={styles.projectsContainer}>
          <div className={styles.projectContainer}>
            <h2 className={styles.gradientText}>Learning Leader - CodemiX2</h2>
            <p>
              Betreuung und Unterstützung von Erstjahrlernenden in der
              Applikationsentwicklung (HTML, CSS, JavaScript, TypeScript, React,
              Java, Spring Boot), Vermittlung von Fachwissen und Begleitung bei
              Projektarbeiten.
              <br></br>
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
              Projektanbieter: Fasanella Margherita<br />
              12.08.2024-31.01.2025
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Projects;

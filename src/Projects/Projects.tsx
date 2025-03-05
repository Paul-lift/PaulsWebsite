import styles from "./Projects.module.css";

function Projects(props: any) {
  return (
    <>
      <div ref={props.refProp}></div>
      <div className={[styles.projectsWrapper].join(" ")}>
        <h1 className={styles.gradientText}>Projekte</h1>
        <section className={styles.projectsContainer}>
          <div className={styles.projectContainer}>
            <h2 className={styles.gradientText}>Titel des Projects</h2>
            <p>
              Beschreibung Beschreibung Beschreibung Beschreibung Beschreibung
              Beschreibung Beschreibung Beschreibung Beschreibung
            </p>
          </div>
          <div className={styles.projectContainer}>
            <h2 className={styles.gradientText}>Titel des Projects</h2>
            <p>
              Beschreibung Beschreibung Beschreibung Beschreibung Beschreibung
              Beschreibung Beschreibung Beschreibung Beschreibung
            </p>
          </div>
          <div className={styles.projectContainer}>
            <h2 className={styles.gradientText}>Titel des Projects</h2>
            <p>
              Beschreibung Beschreibung Beschreibung Beschreibung Beschreibung
              Beschreibung Beschreibung Beschreibung Beschreibung
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Projects;

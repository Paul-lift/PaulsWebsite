import styles from "./Header.module.css";



function Header(props: any) {




  
  return (
    <>
      <nav>
        <div className={styles.navWrapper}>
          <div className={styles.linkWrapper}>
            <a href="#" id="navTitle">Paul Bot</a>
          </div>
          <div className={styles.linkWrapper}>
            <a href="#" onClick={props.scrollToAboutMe }>Über mich </a>
            <a href="#" onClick={props.scrollToProjects }>Projekte </a>
            <a href="#" onClick={props.scrollToSkillsAndLanguages }>Fähigkeiten </a>
            <a href="#" onClick={props.scrollToAboutMe }>Kontakt </a>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Header;

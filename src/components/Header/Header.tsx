import styles from "./Header.module.css";
import { Link } from "react-scroll";

function Header() {
  return (
    <>
      <nav>
        <div className={styles.navWrapper}>
          <div className={styles.linkWrapper}>
            <Link to="top" smooth={true} duration={500}>
              Paul Bot
            </Link>
          </div>
          <div className={styles.linkWrapper}>
            <Link to="aboutMe" smooth={true} duration={500}>
              Über mich
            </Link>
            <Link to="projects" smooth={true} duration={500}>
              Projekte
            </Link>
            <Link to="skillsAndLanguages" smooth={true} duration={500}>
              Fähigkeiten
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              Kontakt
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Header;

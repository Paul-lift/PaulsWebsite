import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <nav>
        <div className={styles.navWrapper}>
          <div className={styles.linkWrapper}>
            <a href="#" id="navTitle">Paul Bot</a>
          </div>
          <div className={styles.linkWrapper}>
            <a href="#">Über mich </a>
            <a href="#">Projekte </a>
            <a href="#">Fähigkeiten </a>
            <a href="#">Kontakt </a>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Header;

import styles from "./Footer.module.css";
import profileIcon from "../../assets/icons/Profile_icon.png";

/**/
function Footer() {
  return (
    <>
      <div className={[styles.footerWrapper].join(" ")}>
        <div
          className={[styles.references, styles.footerInfoContainer].join(" ")}
        >
          <h3>Referenzen</h3>
          <a
            href="https://intranet.swisscom.com/home/profile/i:0e.t%7Cazuread%7Ctgdscjof"
            target="_blank"
            className={[styles.referencePerson].join(" ")}
          >
            <p>Jonas Schweizer - Lernbegleiter</p>
          </a>
          <a
            href="https://intranet.swisscom.com/home/profile/i:0e.t%7Cazuread%7Ctzhfama3"
            target="_blank"
            className={[styles.referencePerson].join(" ")}
          >
            <p>Margherita Fasanella - Projektanbieterin</p>
          </a>
        </div>
        <div className={[styles.contact, styles.footerInfoContainer].join(" ")}>
          <h3>Kontakt</h3>
          <a
            href="https://intranet.swisscom.com/home/profile/i:0e.t%7Cazuread%7Ctaabopaq"
            target="_blank"
            className={[styles.contactContainer].join(" ")}
          >
            <p>Intranet</p>
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;

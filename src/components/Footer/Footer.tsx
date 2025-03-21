import styles from "./Footer.module.css";
import profileIcon from "../../assets/icons/Profile_icon.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
/**/
function Footer() {
  const footerRef = useRef(null);

  //blend in effect für footer
  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: -40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <>
      <div className={[styles.footerWrapper].join(" ")} ref={footerRef}>
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

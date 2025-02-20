import { useEffect, useRef } from "react";
import styles from "./StartPage.module.css";

function StartPage() {
  const texts = [
    "Ich bin Paul",
    "Ich bin Informatiker",
    "Ich bin im ersten Lehrjahr",
  ];
  
  const currentText = useRef(0);
  const currentChar = useRef(0);

  useEffect(() => {
    const startPageDiv = document.querySelector(`.${styles.startPageText}`);
    const textElement = startPageDiv?.querySelector("span");

    if (!textElement) return; // Falls kein <span> gefunden wurde, abbrechen

    function typeWriter() {
      if (currentChar.current <= texts[currentText.current].length) {
        textElement!.textContent = texts[currentText.current].substring(0, currentChar.current);
        currentChar.current++;
        setTimeout(typeWriter, 150); // Schnellere Schreibgeschwindigkeit für bessere Animation
      } else {
        setTimeout(deleteText, 1500); // 1 Sekunde Pause, bevor gelöscht wird
      }
    }

    function deleteText() {
      if (currentChar.current !== 0) {
        currentChar.current--;
        textElement!.textContent = texts[currentText.current].substring(0, currentChar.current);
        setTimeout(deleteText, 100);
      } else {
        currentText.current = (currentText.current + 1) % texts.length; // Geht zyklisch durch das Array
        setTimeout(typeWriter, 300); // Kurze Pause vor neuem Satz
      }
    }

    typeWriter();
  }, []);

  return (
    <>
      <div className={styles.placeHolder}></div>
      <div className={styles.startPageText}>
        <h1 className={styles.startPageTitle}>
          Hallo, <span></span>
        </h1>
        <p>das hier ist ein platzhalter</p>
      </div>
    </>
  );
}

export default StartPage;

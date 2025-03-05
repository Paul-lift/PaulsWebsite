import { useEffect, useRef, useState } from "react";
import styles from "./StartPage.module.css";
import gsap from "gsap";

function StartPage() {
  const texts = [
    "Ich bin Paul",
    "Ich bin Informatiker",
    "Ich bin im ersten Lehrjahr",
  ];

  let [isVisible, setisVisible] = useState(false)

  const currentText = useRef(0);
  const currentChar = useRef(0);

  useEffect(() => {
    const textElement = document.querySelector(`.${styles.startPageText} span`);
    if (!isVisible) return; // Warte bis die Animation durch ist

    if (!textElement) return;

    function typeWriter() {
      if (currentChar.current <= texts[currentText.current].length) {
        textElement!.textContent = texts[currentText.current].substring(
          0,
          currentChar.current
        );
        currentChar.current++;
        setTimeout(typeWriter, 150);
      } else {
        setTimeout(deleteText, 2500);
      }
    }

    function deleteText() {
      if (currentChar.current !== 0) {
        currentChar.current--;
        textElement!.textContent = texts[currentText.current].substring(
          0,
          currentChar.current
        );
        setTimeout(deleteText, 100);
      } else {
        currentText.current = (currentText.current + 1) % texts.length;
        setTimeout(typeWriter, 300);
      }
    }

    typeWriter();
  }, [isVisible]);

  let startPageText = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      startPageText.current,
      { opacity: 0, y: -40 },
      { opacity: 1, y: 0, duration: 0.6, yoyo: true, repeat: 0,onComplete: ()=> setisVisible(true) }
    )
  }, []);

  return (
    <>
      <div className={styles.startPageText} ref={startPageText}>
        <h1 className={styles.startPageTitle}>
          Hallo, <span></span>|
        </h1>
        <p>Entdecke meine Projekte und Fähigkeiten.</p>
      </div>
    </>
  );
}

export default StartPage;
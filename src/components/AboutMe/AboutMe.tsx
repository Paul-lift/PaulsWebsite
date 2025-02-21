import styles from "./AboutMe.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); 

function AboutMe() {
  const aboutMeRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      aboutMeRef.current,
      { opacity: 0, y: -40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutMeRef.current,
          start: "top 10%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className={styles.aboutMe} ref={aboutMeRef}>
      <h1 className={styles.gradientText}>Über Mich</h1>
      <p className={styles.secondaryText}>
        Mein Name ist Paul, ich bin 16 Jahre alt und bin Informatiker im ersten
        Lehrjahr bei der Swisscom. Zuhause bin ich in Birmenstorf im Kanton
        Aargau und besuche die Berufsbildungsschule Winterthur BBW. Ich bin eine
        hilfsbereite und freundliche Person und bin immer offen für neue
        Lernmöglichkeiten und Herausforderungen.
      </p>
    </div>
  );
}

export default AboutMe;

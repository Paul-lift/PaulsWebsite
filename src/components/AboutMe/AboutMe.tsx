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

  const textRef: any = useRef(null);

  useEffect(() => {
    const letters = textRef.current!.querySelectorAll("span");

    letters.forEach((letter: any) => {
      gsap.set(letter, { display: "inline-block" });

      letter.addEventListener("mouseenter", () => {
        gsap.to(letter, {
          y: -7,
          color: "#a05cc7",
          textShadow: "0px 0px 10px #a05cc7",
          duration: 0.3,
          ease: "power3.out",
        });

        letter.addEventListener("mouseleave", () => {
          gsap.to(letter, {
            y: 0,
            color: "#f8f8ff",
            textShadow: "none",
            duration: 0.3,
            ease: "power3.out",
          });
        });
      });
    }, []);

    return () => {
      letters.forEach((letter: any) => {
        letter.removeEventListener("mouseenter", () => {});
        letter.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <div className={styles.aboutMe} ref={aboutMeRef}>
      <h1 className={styles.gradientText}>Über Mich</h1>
      <p className={styles.secondaryText} ref={textRef}>
        {"Mein Name ist Paul, ich bin 16 Jahre alt und bin Informatiker im ersten Lehrjahr bei der Swisscom. Zuhause bin ich in Birmenstorf im Kanton Aargau und besuche die Berufsbildungsschule Winterthur BBW. Ich bin eine hilfsbereite und freundliche Person und bin immer offen für neue Lernmöglichkeiten und Herausforderungen."
          .split("")
          .map((char, index) => (
            <span
              key={index}
              style={{ marginRight: char === " " ? "10px" : "0px" }}
            >
              {char}
            </span>
          ))}
      </p>
      <svg width="300%" height="400" viewBox="0 0 800 400">
      <path
        id="motionPath"
        d="M -85.577 198.915 C -49.193 189.818 -4.892 186.111 32.144 193.279 C 73.153 201.216 103.586 224.611 141.098 239.616 C 174.421 252.945 214.47 262.68 250.052 265.915 C 333.74 273.523 405.513 257.063 486.746 237.111 C 541.508 223.661 597.826 211.705 650.177 190.148 C 676.213 179.427 699.01 162.535 724.066 151.325"
        fill="none"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
    </div>
  );
}

export default AboutMe;

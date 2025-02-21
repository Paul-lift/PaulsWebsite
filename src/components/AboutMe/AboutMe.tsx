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
    const letters = textRef.current!.querySelectorAll(".letter");

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
    <>
      <div className={styles.aboutMe} ref={aboutMeRef}>
        <h1 className={styles.gradientText}>Über Mich</h1>
        <p className={styles.secondaryText} ref={textRef}>
          {"Ich habe mich bereits als kleines Kind gewundert, wie verschiedene Applikationen und technische Geräte funktionieren. Später habe ich zu Hause ab und zu versucht zu programmieren, was mir ebenfalls Spass gemacht hat. Beim Schnuppern hat sich dann herausgestellt, dass ich Informatiker werden will. Meine Ziele sind es, ein sehr gutes Verständnis für das Programmieren aufzubauen, möglichst viele Programmiersprachen zu beherrschen und die Swisscom in eine digitale Zukunft zu führen."
            .split(" ")
            .map((word, wordIndex) => (
              <span
                key={wordIndex}
                className="word" // <- Äußerer Wrapper für jedes Wort
                style={{ display: "inline-block", marginRight: "10px" }}
              >
                {word.split("").map((char, charIndex) => (
                  <span
                    key={charIndex}
                    className="letter" // <- Innerer Wrapper für jedes Zeichen
                    style={{ display: "inline-block" }}
                  >
                    {char}
                  </span>
                ))}
              </span>
            ))}
        </p>
      </div>
    </>
  );
}

export default AboutMe;

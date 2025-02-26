import styles from "./SvgOne.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useEffect, useRef } from "react";

function SvgOne() {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

  const pathRef = useRef<SVGPathElement | null>(null);
  const ballRef = useRef<SVGCircleElement | null>(null);

    const SvgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      SvgRef.current,
      { opacity: 0, y: -40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: SvgRef.current,
          start: "top 10%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  useEffect(() => {
    if (!pathRef.current || !ballRef.current) {
      console.log("pathRef oder ballRef ist null! ❌");
      return;
    }

    console.log("GSAP startet ✅");

    const animation = gsap.to(ballRef.current, {
      motionPath: {
        path: "#motionPath",
        align: "#motionPath",
        alignOrigin: [0.5, 0.5],
        autoRotate: false,
      },
      duration: 5, // Dauer der Animation
      ease: "power1.inOut",
      paused: true, // Startet erst bei ScrollTrigger
    });

    ScrollTrigger.create({
      trigger: pathRef.current,
      start: "top 50%", // Startet, wenn der Pfad zu 70% im Viewport ist
      onEnter: () => animation.play(),
      once: true, // Nur einmal abspielen
    });
  }, []);

  return (
    <div>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 800 400"
        className={styles.svg}
        preserveAspectRatio="none"
        ref={SvgRef}
      >
        <path
          ref={pathRef}
          id="motionPath"
          d="M 0 0 Q 400 0, 675 150 T 1250 200"
          fill="none"
          stroke="white"
          strokeWidth="4"
        />
        <circle ref={ballRef} id="ball" cx="0" cy="0" r="7" fill=" rgba(199, 26, 226, 1)"  style={{ filter: "drop-shadow(0px 0px 10px rgba(199, 26, 226, 1))" }}/>
      </svg>
    </div>
  );
}

export default SvgOne;

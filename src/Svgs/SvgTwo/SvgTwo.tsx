import styles from "./SvgTwo.module.css";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import gsap from "gsap";

function SvgTwo() {

  const pathRef = useRef<SVGPathElement | null>(null);
  const ballRef = useRef<SVGCircleElement | null>(null);
  let [isVisible, setIsVisible] = useState(false);

  const SvgRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

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
          onEnter: () => setIsVisible(true),
        },
      }
    );
  }, []);

  useEffect(() => {
    if (!pathRef.current || !ballRef.current) {
      console.log("pathRef oder ballRef ist null! ❌");
      return;
    }

    const animation = gsap.to(ballRef.current, {
      motionPath: {
        path: "#motionPathTwo",
        align: "#motionPathTwo",
        alignOrigin: [0.5, 0.5],
        autoRotate: false,
      },
      duration: 9,
      ease: "power1.inOut",
      repeat: -1,
      repeatDelay: 0,
      paused: false,
    });

    ScrollTrigger.create({
      trigger: pathRef.current,
      start: "top 0%", // Startet, wenn der Pfad zu 70% im Viewport ist
      onEnter: () => animation.play(),
      once: false, // Nur einmal abspielen
    });
  }, [isVisible]);

  return (
    <>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 800 400"
        className={styles.svg}
        preserveAspectRatio="none"
        ref={SvgRef}
      >
        <path
          id="motionPathTwo"
          ref={pathRef}
          d="M 1300 40 H 400 V 100 H 650 V 175 V 340 H 800"
          fill="none"
          stroke="#a05cc7"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <circle
          ref={ballRef}
          id="ball"
          cx="0"
          cy="0"
          r="5"
          fill=" rgb(26, 209, 218)"
          style={{
            filter: "drop-shadow(0px 0px 10px rgb(30, 227, 204))",
          }}
        />
      </svg>
    </>
  );
}

export default SvgTwo;

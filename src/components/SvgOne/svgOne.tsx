import styles from "./SvgOne.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

function SvgOne() {
  gsap.registerPlugin(ScrollTrigger);

  const pathRef = useRef<SVGPathElement | null>(null);
  const ballRef = useRef<SVGCircleElement | null>(null);

  useEffect(() => {
    if (!pathRef.current || !ballRef.current) {
      console.log("pathRef oder ballRef ist null! ❌");
      return;
    }

    console.log("GSAP startet ✅");

    gsap.to(ballRef.current, {
      scrollTrigger: {
        trigger: pathRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        markers: true
      },
      motionPath: {
        path: "#motionPath",
        align: "motionPath",
        alignOrigin: [0.5, 0.5],
        autoRotate: false,
      },
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
      >
        <path
          ref={pathRef}
          id="motionPath"
          d="M 0 0 Q 400 0, 675 150 T 1250 200"
          fill="none"
          stroke="white"
          strokeWidth="4"
        />
        <circle ref={ballRef} id="ball" cx="0" cy="0" r="10" fill="red" />
      </svg>
    </div>
  );
}

export default SvgOne;

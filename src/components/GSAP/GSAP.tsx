import "./GSAP.modul.css";
import { useRef,useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function GSAP() {
  const boxRef = useRef(null);
  const [count, setCount] = useState(0);

  useGSAP(() => {
    gsap.to(boxRef.current, { x: 500 + count, duration: 3, delay: 1 });
  },{ dependencies: [count], revertOnUpdate: true});


  
  return (
    <>
      <div className="box" ref={boxRef}></div>
      <button onClick={()=>setCount(count + 100)}>afjkgzazi</button>
    </>
  );
}
export default GSAP;

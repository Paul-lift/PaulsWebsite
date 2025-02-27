import { useRef } from "react";
import Header from "./components/Header/Header.tsx";
import StartPage from "./components/StartPage/StartPage.tsx";
import AboutMe from "./components/AboutMe/AboutMe.tsx";
import SvgOne from "./Svgs/SvgOne/svgOne.tsx";
import SvgTwo from "./Svgs/SvgTwo/SvgTwo.tsx";
import Calculator from "./components/Calculator/Calculator.tsx";

function App() {
  const aboutMeRef = useRef<HTMLDivElement | null>(null);

  const scrollToAboutMe = () => {
    aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header scrollToAboutMe={scrollToAboutMe} />
      <StartPage />
      <SvgTwo />
      <SvgOne />
      <AboutMe refProp={aboutMeRef} />
    </>
  );
}

export default App;

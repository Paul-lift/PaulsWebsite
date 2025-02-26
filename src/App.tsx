import { useRef } from "react";
import Header from "./components/Header/Header.tsx";
import StartPage from "./components/StartPage/StartPage.tsx";
import AboutMe from "./components/AboutMe/AboutMe.tsx";
import SvgOne from "./components/SvgOne/svgOne.tsx";

function App() {
  const aboutMeRef = useRef<HTMLDivElement | null>(null);

  const scrollToAboutMe = () => {
    aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header scrollToAboutMe={scrollToAboutMe} />
      <StartPage />
      <SvgOne />
      <AboutMe refProp={aboutMeRef}>
        <SvgOne />
      </AboutMe>
    </>
  );
}

export default App;

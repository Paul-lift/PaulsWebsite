import { useRef } from "react";
import Header from "./components/Header/Header.tsx";
import StartPage from "./components/StartPage/StartPage.tsx";
import AboutMe from "./components/AboutMe/AboutMe.tsx";
import SvgOne from "./Svgs/SvgOne/svgOne.tsx";
import SvgTwo from "./Svgs/SvgTwo/SvgTwo.tsx";
import Projects from "./Projects/Projects.tsx";
import SkillsAndLanguages from "./components/skillsAndLanguages/skillsAndLanguages.tsx";
import Calculator from "./components/Calculator/Calculator.tsx";

function App() {
  const aboutMeRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const skillsAndLanguagesRef = useRef<HTMLDivElement | null>(null);

  const scrollToAboutMe = () => {
    aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSkillsAndLanguages = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header
        scrollToAboutMe={scrollToAboutMe}
        scrollToProjects={scrollToProjects}
        scrollToSkillsAndLanguages={scrollToSkillsAndLanguages}
      />
      <StartPage />
      <SvgTwo />
      <SvgOne />
      <AboutMe refProp={aboutMeRef} />
      <Projects refProp={projectsRef} />
      <SkillsAndLanguages refProp={skillsAndLanguagesRef} />
    </>
  );
}

export default App;

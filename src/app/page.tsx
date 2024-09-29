import Image from "next/image";
import Sidenav from './components/Sidenav'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import TechSkills from './components/TechSkills'
import Experience from './components/Experience'
import Projects from './components/Projects'

export default function Home() {
  return (
    <>
    <Sidenav/>
    <Hero/>
    <AboutMe/>
    <TechSkills/>
    <Experience/>
    <Projects/>
    </>
  );
}

import Image from "next/image";
import Sidenav from './components/Sidenav'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import TechSkills from './components/TechSkills'

export default function Home() {
  return (
    <>
    <Sidenav/>
    <Hero/>
    <AboutMe/>
    <TechSkills/>
    </>
  );
}

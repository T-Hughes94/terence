"use client";
import { useState } from 'react';
import Link from 'next/link';
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineProject,
  AiOutlineRead,
  AiOutlineCoffee,
  AiOutlineCode,
} from 'react-icons/ai';
import { GrProjects } from 'react-icons/gr';

const Sidenav = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className="text-white">
      {/* Hamburger Menu for Mobile */}
      {!nav && (
        <AiOutlineMenu
          onClick={toggleNav}
          className="fixed top-4 right-4 z-[99] md:hidden text-4xl cursor-pointer text-white"
          aria-label="Open navigation menu"
        />
      )}

      {/* Fullscreen Mobile Navigation */}
      {nav && (
        <div className="fixed inset-0 w-full h-full bg-black/90 flex flex-col justify-center items-center z-50 transition-all duration-300 ease-in-out">
          {/* Close Button */}
          <button
            onClick={closeNav}
            className="absolute top-6 right-6 text-4xl cursor-pointer text-white"
            aria-label="Close navigation menu"
          >
            ✕
          </button>

          {/* Mobile Navigation Links */}
          <nav className="flex flex-col items-center space-y-8 text-2xl">
            <Link href="#main" onClick={closeNav} className="text-white hover:text-blue-400 transition-colors duration-300 flex items-center">
              <AiOutlineHome size={30} className="mr-3" />
              <span>Home</span>
            </Link>

            <Link href="#about" onClick={closeNav} className="text-white hover:text-blue-400 transition-colors duration-300 flex items-center">
              <AiOutlineCoffee size={30} className="mr-3" />
              <span>About</span>
            </Link>

            <Link href="#technical" onClick={closeNav} className="text-white hover:text-blue-400 transition-colors duration-300 flex items-center">
              <AiOutlineCode size={30} className="mr-3" />
              <span>Technical Skills</span>
            </Link>

            <Link href="#experience" onClick={closeNav} className="text-white hover:text-blue-400 transition-colors duration-300 flex items-center">
              <GrProjects size={30} className="mr-3" />
              <span>Experience</span>
            </Link>

            <Link href="#projects" onClick={closeNav} className="text-white hover:text-blue-400 transition-colors duration-300 flex items-center">
              <AiOutlineProject size={30} className="mr-3" />
              <span>Projects</span>
            </Link>

            <Link href="#education" onClick={closeNav} className="text-white hover:text-blue-400 transition-colors duration-300 flex items-center">
              <AiOutlineRead size={30} className="mr-3" />
              <span>Education</span>
            </Link>

            <Link href="mailto:terencehughes450@gmail.com?subject=Contact from Website" onClick={closeNav} className="text-white hover:text-blue-400 transition-colors duration-300 flex items-center">
              <AiOutlineMail size={30} className="mr-3" />
              <span>Contact</span>
            </Link>
          </nav>
        </div>
      )}

      {/* Desktop Navigation (Icons Only) */}
      <div className="hidden md:block fixed top-[25%] left-4 z-10">
        <div className="flex flex-col items-start">
          <Link href="#main" passHref>
            <div
              className="rounded-full shadow-lg bg-purple-600 shadow-purple-700 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
              aria-label="Navigate to home section"
            >
              <AiOutlineHome size={24} />
            </div>
          </Link>

          <Link href="#about" passHref>
            <div
              className="rounded-full shadow-lg bg-purple-600 shadow-blue-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
              aria-label="Navigate to about section"
            >
              <AiOutlineCoffee size={24} />
            </div>
          </Link>

          <Link href="#technical" passHref>
            <div
              className="rounded-full shadow-lg bg-purple-600 shadow-green-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
              aria-label="Navigate to technical skills section"
            >
              <AiOutlineCode size={24} />
            </div>
          </Link>

          <Link href="#experience" passHref>
            <div
              className="rounded-full shadow-lg bg-purple-600 shadow-yellow-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
              aria-label="Navigate to experience section"
            >
              <GrProjects size={24} />
            </div>
          </Link>

          <Link href="#projects" passHref>
            <div
              className="rounded-full shadow-lg bg-purple-600 shadow-red-700 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
              aria-label="Navigate to projects section"
            >
              <AiOutlineProject size={24} />
            </div>
          </Link>

          <Link href="#education" passHref>
            <div
              className="rounded-full shadow-lg bg-purple-600 border-gray-100 shadow-orange-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
              aria-label="Navigate to education section"
            >
              <AiOutlineRead size={24} />
            </div>
          </Link>

          <Link href="mailto:terencehughes450@gmail.com?subject=Contact from Website" passHref>
            <div
              className="rounded-full shadow-lg bg-purple-600 shadow-pink-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
              aria-label="Open email to contact"
            >
              <AiOutlineMail size={24} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;










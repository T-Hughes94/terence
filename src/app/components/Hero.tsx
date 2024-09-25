"use client";
import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { FC } from 'react';

const Hero: FC = () => {
  return (
    <div id="hero" className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-fixed bg-cover bg-center" style={{ backgroundImage: `url('/coolpic.webp')` }} />

      {/* Content Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-white/50 flex justify-center items-center">
        <div className="max-w-[700px] text-center">
          {/* Name */}
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">Terence Hughes</h1>

          {/* Type Animation */}
          <h2 className="justify-center flex sm:text-3xl text-2xl pt-4 text-gray-800">
            <TypeAnimation
              sequence={[
                'Developer 💻',
                1000,
                'Foodie 🌮',
                1000,
                'Nature Lover 🌿',
                1000,
              ]}
              wrapper="div"
              cursor={true}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
              repeat={Infinity}
            />
          </h2>

          {/* Social Icons */}
          <div className="flex justify-center space-x-16 pt-8">
            <Link href="https://www.linkedin.com/" passHref>
              <FaLinkedinIn size={50} className="text-gray-800 hover:text-blue-600 cursor-pointer" />
            </Link>
            <Link href="https://github.com/" passHref>
              <FaGithub size={50} className="text-gray-800 hover:text-purple-700 cursor-pointer" />
            </Link>
            <Link href="mailto:your.email@example.com" passHref>
              <AiOutlineMail size={50} className="text-gray-800 hover:text-red-500 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;



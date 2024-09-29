// Footer.tsx (Next.js Component)
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="w-full bg-black py-16 relative">
      {/* Parallax Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-fixed bg-cover bg-center " style={{ backgroundImage: `url('/coolpic.webp')` }}></div>

      <div className="relative z-10 max-w-[1040px] mx-auto md:pl-20 p-4 text-center">
        {/* Copyright Info */}
        <p className="text-purple-800 mb-4">
          &copy; 2024 Terence Hughes. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6">
          <Link href="https://www.linkedin.com/in/terence-hughes-27204128a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn size={30} className="text-gray-300 hover:text-blue-600 cursor-pointer transition-colors duration-300" />
          </Link>
          <Link href="https://github.com/T-Hughes94" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} className="text-gray-300 hover:text-white cursor-pointer transition-colors duration-300" />
          </Link>
          <Link href="mailto:terencehughes450@gmail.com" target="_blank" rel="noopener noreferrer">
            <AiOutlineMail size={30} className="text-gray-300 hover:text-red-500 cursor-pointer transition-colors duration-300" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


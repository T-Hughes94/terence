"use client"
import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div id="hero" className={styles.hero}>
      {/* Background Image with Parallax Effect */}
      <div
        className={styles.heroBackground}
        style={{ backgroundImage: `url('/coolpic.webp')` }}
      />

      {/* Content Overlay */}
      <div className={styles.heroContent}>
        <div className="max-w-[700px]">
          <h1 className={styles.heroName}>Terence Hughes</h1>
          <h2 className={styles.heroSubtitle}>
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
              repeat={Infinity}
            />
          </h2>

          {/* Social Icons */}
          <div className="flex justify-center space-x-16 pt-8">
            <Link href="https://www.linkedin.com/" passHref>
              <FaLinkedinIn size={50} className={styles.socialIcon} />
            </Link>
            <Link href="https://github.com/" passHref>
              <FaGithub size={50} className={styles.socialIcon} />
            </Link>
            <Link href="mailto:your.email@example.com" passHref>
              <AiOutlineMail size={50} className={styles.socialIcon} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;






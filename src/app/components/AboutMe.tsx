import Image from 'next/image';
import Link from 'next/link'; 
import styles from './AboutMe.module.css'; // Importing modular CSS

const AboutMe = () => {
  return (
    <div id="about" className={styles.aboutContainer}>
      <div className="max-w-[1040px] mx-auto md:pl-20 p-4 text-center">
        <h1 className={styles.aboutTitle}>About Me</h1>

        {/* Profile Picture with Modern Styling */}
        <div className={styles.profilePicture}>
          <Image
            src="/propic.jpg" 
            alt="Profile Picture"
            width={200}
            height={200}
            className={styles.profileImage} 
          />
        </div>

        {/* Introduction */}
        <p className="text-gray-100 text-3xl my-4">
          Hi, I'm Terence Hughes, a passionate developer currently based in New York with a love for creating innovative solutions.
        </p>

        {/* Additional Information */}
        <p className="text-gray-200 text-xl my-4">
          I enjoy building applications that solve real-world problems and exploring new technologies. My experience as a chef in the hospitality industry has taught me valuable leadership skills and how to effectively communicate with team members. I also enjoy nature, spending time with family, and music.
        </p>

        {/* Download Resume Button with Pulsing Shadow */}
        <div className="mt-8">
          <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <span className={`${styles.resumeButton} relative`}>
              My Resume
              <span className={styles.pulsingShadow} aria-hidden="true"></span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;















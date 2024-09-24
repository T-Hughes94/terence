import Image from 'next/image';
import Link from 'next/link';

const AboutMe = () => {
  return (
    <div id="about" className="about-container">
      <div className="max-w-[1040px] mx-auto md:pl-20 p-4 text-center">
        <h1 className="about-title">About Me</h1>

        {/* Profile Picture with Modern Styling */}
        <div className="profile-picture">
          <Image
            src="/propic.jpg"
            alt="Profile Picture"
            width={200}
            height={200}
            priority
            className="object-cover" 
          />
        </div>

        {/* Introduction */}
        <p className="text-gray-300 text-xl my-4">
          Hi, I'm Terence Hughes, a passionate developer currently based in New York with a love for creating innovative solutions.
        </p>

        {/* Additional Information */}
        <p className="text-gray-400 text-lg my-4">
          I enjoy building applications that solve real-world problems and exploring new technologies. My experience as a chef in the hospitality industry has taught me valuable leadership skills and how to effectively communicate with team members. I also enjoy nature, spending time with family, and music.
        </p>

        {/* Download Resume Button with Pulsing Shadow */}
        <div className="mt-8">
          <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <span className="resume-button">
              My Resume
              <span className="pulsing-shadow" aria-hidden="true"></span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;












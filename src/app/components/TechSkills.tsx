// TechSkills.tsx (Next.js Component)
import Image from 'next/image';
import Link from 'next/link';

const techSkillsData = [
  { name: 'JavaScript', image: '/js-logo.png', link: 'https://www.javascript.com' },
  { name: 'Python', image: '/python-logo.png', link: 'https://www.python.org' },
  { name: 'React', image: '/react-logo.png', link: 'https://reactjs.org' },
  { name: 'Next', image: '/next.png', link: 'https://nextjs.org/docs/' }, // Positioned for center placement
  { name: 'SQL', image: '/sql-logo.png', link: 'https://www.freecodecamp.org/news/sql-and-databases-full-course/' },
  { name: 'HTML', image: '/html-logo.png', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'CSS', image: '/css-logo.png', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'SQLAlchemy', image: '/sqla-logo.png', link: 'https://www.sqlalchemy.org/' },
  { name: 'Tailwind', image: '/tlwnd-logo.png', link: 'https://tailwindcss.com/' },
  { name: 'Flask', image: '/flask-logo.png', link: 'https://flask.palletsprojects.com/en/3.0.x/' },
];

const TechSkills = () => {
  return (
    <div id="technical" className="w-full bg-black py-16">
      <div className="max-w-[1040px] mx-auto md:pl-20 p-4 text-center">
        <h1 className="text-4xl font-bold text-[#94c2d2]">Technical Skills</h1>
        <p className="text-gray-100 text-xl my-4">
          Languages and Frameworks I have used. Click on the links for tutorials & documentation.
        </p>
        
        {/* Grid layout for skills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
          {techSkillsData.map((skill, index) => (
            <div
              key={index}
              className={`flex flex-col items-center ${skill.name === 'Flask' ? 'sm:col-start-2' : ''}`}
            >
              {/* Skill Icon */}
              <Image
                src={skill.image}
                alt={skill.name}
                width={64}
                height={64}
                className="w-16 h-16 object-contain rounded-full mb-4" // Added bottom margin
              />

              {/* Link to documentation */}
              <Link href={skill.link} target="_blank" rel="noopener noreferrer">
                <span className="mt-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:scale-110 ease-in duration-100 hover:bg-purple-700 transition duration-300">
                  {skill.name}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechSkills;




// Import necessary modules
interface ExperienceItemProps {
    year: string;
    title: string;
    company: string;
    duration: string;
    details: string;
  }
  
  const ExperienceItem: React.FC<ExperienceItemProps> = ({ year, title, company, duration, details }) => {
    return (
      <ol className="flex flex-col md:flex-row relative border-l border-stone-200 ml-4">
        <li className="mb-8">
          <div className="absolute w-4 h-4 bg-stone-200 rounded-full mt-1.5 -left-2 border-black" />
          <div className="ml-6">
            <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
              <span className="inline-block px-2 py-1 font-semibold text-white bg-[#94c2d2] rounded-md">{year}</span>
              <span className="text-lg font-semibold text-[#94c2d2]">{title}</span>
              <span className="my-1 text-sm font-normal leading-none text-gray-400">{company}</span>
              <span className="my-1 text-sm font-normal leading-none text-gray-400">{duration}</span>
            </p>
            <p className="mt-2 text-base text-stone-300">{details}</p>
          </div>
        </li>
      </ol>
    );
  };
  
  export default ExperienceItem;
  
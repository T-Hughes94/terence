// Education.tsx (Next.js Component)
import Image from 'next/image';

const Education: React.FC = () => {
  return (
    <div id="education" className="w-full bg-black py-16">
      <div className="max-w-[1040px] mx-auto md:pl-20 p-4 text-center">
        <h1 className="text-4xl font-bold text-[#94c2d2]">Education</h1>
        
        <div className="flex flex-col items-center mt-8">
          {/* Certificate Photo */}
          <Image
            src="/certificate.jpg" // Correct path and casing
            alt="Certificate"
            width={600} // Set appropriate width
            height={400} // Set appropriate height
            className="rounded-lg shadow-lg transition-transform transform hover:scale-110 duration-200 ease-in-out"
          />
          
          {/* Education Details */}
          <p className="text-center text-gray-300 mt-4">
            Certificate of Completion <br /> 
            Flatiron School, Denver, 2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;



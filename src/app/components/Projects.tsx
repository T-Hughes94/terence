import Image from 'next/image';
import ProjectItem from './ProjectItem';

import toonRaterImg from '/public/2.png';
import pocketChefImg from '/public/pocketChef.png';

const Projects = () => {
  return (
    <div id="projects" className="w-full bg-black py-16">
      <div className="max-w-[1040px] mx-auto md:pl-20 p-4">
        <h1 className="text-4xl font-bold text-[#94c2d2] text-center">Projects</h1>
        <p className="text-gray-300 text-center py-8">
          A showcase of some of my favorite projects. Click on the links to view the demo and source code.
        </p>
        {/* Grid layout for projects */}
        <div className="grid sm:grid-cols-2 gap-10 mt-8">
          <ProjectItem 
            img={pocketChefImg} 
            title="Pocket Chef" 
            demoLink="https://www.loom.com/share/abaaddc84a8e45d491d0fe74f05b2b76"
            githubLink="https://github.com/T-Hughes94/python-p4-project-template/tree/Testing"
          />
          <ProjectItem 
            img={toonRaterImg} 
            title="Toon Rater" 
            demoLink="https://www.loom.com/share/269cbaeaefc94ab0858f9f9af09ac168"
            githubLink="https://github.com/T-Hughes94/Toon-Rater1"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

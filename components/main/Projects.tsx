import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard  
          title="Website 1"
          description="I am not sure if I can show actual projects, so I will write this description here for now. In a real website, I would have a description of the project here."
        />
        <ProjectCard
          title="Website 2"
          description="I am not sure if I can show actual projects, so I will write this description here for now. In a real website, I would have a description of the project here."
        />
        <ProjectCard
          title="Website 3"
          description="I am not sure if I can show actual projects, so I will write this description here for now. In a real website, I would have a description of the project here."
        />
      </div>
    </div>
  );
};

export default Projects;

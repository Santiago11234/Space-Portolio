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
          title="Google"
          image="/google.webp"
          description="A comprehensive search engine that revolutionized the way we access information online. It provides a vast array of services, including search, maps, email, and more, making it a central hub for digital services."
        />
        <ProjectCard
          title="ChatGPT"
          image="/chatgpt.webp"
          description="An advanced AI language model that can generate human-like text based on the input it receives. It's capable of engaging in conversations, answering questions, and even writing content."
        />
        <ProjectCard
          title="Microsoft"
          image="/microsoft.avif"
          description="A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services."
        />
      </div>
    </div>
  );
};

export default Projects;

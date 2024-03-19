import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  image: string;
  description: string;
}


const ProjectCard = ({  title, image, description }: Props) => {
  return (
    <div className="card transform transition duration-500 hover:scale-110 bg-gray-800 rounded-xl overflow-hidden shadow-lg z-[200]">
      <div className="mx-auto my-4 flex items-center justify-center rounded h-[220px] relative">
        <Image
          src={image}
          alt={"image"}
          fill={true}
          style={{ objectFit: 'contain', width: '100%', height: '100%' }}
          className="rounded-t-xl absolute"
        />
      </div>
      <div className="p-4 flex justify-between">
        <div>
          <h2 className="text-lg text-white font-bold">{title}</h2>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

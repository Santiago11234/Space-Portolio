import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#123456]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#home"
          className="h-auto w-auto flex flex-row items-center"
        >
          
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            My Name
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
  <div className="flex items-center justify-between w-full h-auto mr-[15px] px-[20px] py-[10px] rounded-lg text-gray-200">
    <a href="#home" className="cursor-pointer hover:underline">
      Home
    </a>
    <a href="#about-me" className="cursor-pointer hover:underline">
      About Me
    </a>
    <a href="#projects" className="cursor-pointer hover:underline">
      Projects
    </a>
  </div>
</div>

     
      </div>
    </div>
  );
};

export default Navbar;

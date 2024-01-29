"use client";

import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

const HeroContent = () => {
 
  const [windowWidth, setWindowWidth] = useState(0);

useEffect(() => {
  setWindowWidth(window.innerWidth);
  window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
  return () => window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
}, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center py-20 m-auto text-start">
       

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Building 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            Websites Ever
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Space Themed Personal Website With Super Cool Information About Me And What I Have Built Along With Cool Animations
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          onClick={ () => { window.location.href = "#about-me"}}
        >
            See What I&apos;ve Done
        </motion.a>
      </div>

      {windowWidth > 1111 && (
  <motion.div className="w-full h-full flex justify-center items-center">
    <video
      autoPlay
      muted
      loop
      className="absolute top-4 left-0 min-w-full min-h-full z-[-1] opacity-40"
    >
      <source src="/4.mp4" type="video/webm" />
    </video>
  </motion.div>
)}
    </motion.div>
  );
};

export default HeroContent;

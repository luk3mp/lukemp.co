import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 1.8, 1.8, 2.5, 1],
        opacity: [1, 1, 0.5, 0.5, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      {/* Centered Navigation Links 
      <div className="absolute border-4 border-[#F7AB0A] rounded-full h-[200px] w-[200px] mt-36 animate-slow-ping" />
      <div className="rounded-full border border-[#333333] h-[200px] w-[200px] absolute mt-36" />
      <div className="rounded-full border border-[#333333] h-[350px] w-[350px] absolute mt-36" />
      <div className="rounded-full border-4 border-[#F7AB0A] opacity-20 h-[450px] w-[450px] absolute mt-36 animate-pulse" />
      <div className="rounded-full border border-[#333333] h-[550px] w-[550px] absolute mt-36" />
*/}
      <div className="absolute border-4 border-[#F7AB0A] rounded-full h-[200px] w-[200px] mt-36 animate-slow-ping" />
      <div className="rounded-full border-4 border-[#333333] opacity-20 h-[450px] w-[450px] absolute mt-36 animate-pulse" />
    </motion.div>
  );
}

export default BackgroundCircles;

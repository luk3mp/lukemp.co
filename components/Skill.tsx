import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

function Skill({ skill, directionLeft }: Props) {
  const getStars = (progress: number) => {
    if (skill.progress >= 90) return "★★★★★";
    if (skill.progress >= 70) return "★★★★☆";
    return "★★★☆☆";
  };
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        src={urlFor(skill?.image).url()}
        className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-1xl font-bold text-black opacity-100">
            {skill?.title}
          </p>
          <p className="text-1xl font-bold text-black opacity-100">
            {getStars(skill.progress)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;

import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] bg-[#292929] pt-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden snap-center">
      {experience?.companyImage && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative w-32 h-32 xl:w-[200px] xl:h-[200px] rounded-full object-cover"
        >
          <Image
            src={urlFor(experience.companyImage).url()}
            alt={`${experience.company} logo`}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </motion.div>
      )}

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies?.map((technology, index) =>
            technology.image ? (
              <div
                key={technology._id || index}
                className="relative h-10 w-10 rounded-full"
              >
                <Image
                  src={urlFor(technology.image).url()}
                  alt={technology.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            ) : null
          )}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {experience.dateStarted
            ? new Date(experience.dateStarted).toDateString()
            : "Start Date Unknown"}{" "}
          -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : experience.dateEnded
            ? new Date(experience.dateEnded).toDateString()
            : "End Date Unknown"}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          {experience.points?.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

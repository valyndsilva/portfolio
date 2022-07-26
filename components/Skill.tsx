import React from "react";
import { Technology } from "../types/typings";
import { urlFor } from "../lib/sanity";

interface Props {
  skill: Technology;
}

export default function Skill({ skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer justify-center items-center mb-5">
      <img
        alt={skill?.title}
        src={urlFor(skill?.image.asset._ref).url()}
        className="rounded-xl border  dark:border-gray-500 object-contain w-28 h-28 md:w-32 md:h-32 xl:w-36 xl:h-36 filter group-hover:grayscale transition duration-300 ease-in-out shadow-md"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-teal-300 w-28 h-28 md:w-32 md:h-32 xl:w-36 xl:h-36 rounded-xl z-0">
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-xs font-bold text-black opacity-100">
            {skill?.title}
          </p>
          <p className="text-xl font-bold text-black opacity-100">
            {skill?.proficiency}%
          </p>
        </div>
      </div>
    </div>
  );
}

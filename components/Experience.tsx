import React, { useEffect } from "react";
import { IExperience } from "../types/typings";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {
  experience: IExperience;
  experienceRef: any;
};

export default function Experience({ experience, experienceRef }: Props) {
  

  return (
    <section className="section" id="experience" ref={experienceRef}>
      <div className="w-[70vw] md:w-[75vw] mx-auto pt-12">
        <motion.div
          initial={{
            x: -400,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{ once: false }}
          className="text-center mb-12"
        >
          <h1 className="font-inter font-semibold dark:text-slate-300 text-5xl mb-4">
            {experience.title}
          </h1>
          <p className="font-firacode text-md dark:text-slate-400 xl:w-2/4 lg:w-3/4 mx-auto">
            {experience.description}
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-teal-400 inline-flex"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{
            x: 400,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{ once: false }}
          className="mx-auto rounded flex  relative items-center space-x-5 p-10  text-left md:flex-row max-w-full w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory  z-20 scrollbar-thin scrollbar-track-slate-500/20 scrollbar-thumb-teal-400/80"
        >
          {experience.companyList
            ?.slice(0)
            .reverse()
            .map((item) => (
              <ExperienceCard key={item._id} item={item} />
            ))}
        </motion.div>
      </div>
    </section>
  );
}

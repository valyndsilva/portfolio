import React from "react";
import { ISkills } from "../types/typings";
import { motion } from "framer-motion";
import Skill from "./Skill";

interface Props {
  skills: ISkills;
  /* eslint-disable */
  skillsRef: any;
}

export default function skills({ skills, skillsRef }: Props) {
  return (
    <section className="section " id="skills" ref={skillsRef}>
      <div className="w-[70vw] md:w-[75vw] mx-auto pt-12 ">
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
          className="text-center mb-12"
        >
          <h1 className="font-inter font-semibold dark:text-slate-300 text-5xl mb-4">
            {skills?.title}
          </h1>
          <p className="font-firacode text-md dark:text-slate-400 xl:w-2/4 lg:w-3/4 mx-auto">
            {skills?.description}
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-teal-400 inline-flex"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 ">
          {/* {skills?.technologies?.map((skill, index) => (
            <Skill key={skill._id} skill={skill} />
          ))} */}
          {skills?.technologies
            ?.slice(0, skills.technologies.length / 2)
            .map((skill) => (
              <Skill key={skill._id} skill={skill} />
            ))}

          {skills?.technologies
            ?.slice(skills.technologies.length / 2, skills.technologies.length)
            .map((skill) => (
              <Skill key={skill._id} skill={skill} directionLeft />
            ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Timeline from "./Timeline";
import { IEducation } from "../types/typings";
import { motion } from "framer-motion";

interface Props {
  education: IEducation;
  /* eslint-disable */
  educationRef: any;
}

export default function Education({ education, educationRef }: Props) {
  return (
    <section className="section" id="education" ref={educationRef}>
      <div className="w-[70vw] md:w-[75vw] mx-auto pt-12">
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
            {education.title}
          </h1>
          <p className="font-firacode text-md dark:text-slate-400 xl:w-2/4 lg:w-3/4 mx-auto">
            {education.description}
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-teal-400 inline-flex"></div>
          </div>
        </motion.div>

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
          className="relative container mx-auto px-6 flex flex-col space-y-8"
        >
          <div className="absolute z-0 w-[1px] h-full md:bg-teal-400 shadow-md inset-0  md:mx-auto md:right-0 md:left-0"></div>

          {education.courseList.map((item, index) => (
            <Timeline item={item} key={item._id} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

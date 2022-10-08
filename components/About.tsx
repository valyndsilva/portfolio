import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Image from "next/image";
import { IAbout } from "../types/typings";
import { motion } from "framer-motion";
import { urlFor } from "../lib/sanity";

interface Props {
  about: IAbout;
  /* eslint-disable */
  aboutRef: any;
}

export default function About({ about, aboutRef }: Props) {
  return (
    <section className="section text-left" id="about" ref={aboutRef}>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center w-[70vw] md:w-[80vw] mx-auto pt-12">
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
        >
          <h5 className="text-lg font-firacode font-light pb-5 dark:text-teal-400 tracking-[4px]">
            {about.intro}
          </h5>
          <h2 className="text-5xl font-inter font-semibold dark:text-slate-300 mb-2">
            {about.name}
          </h2>
          <span className="font-light text-sm font-firacode  dark:text-slate-400">
            {about.phonetics}
          </span>
          <p className=" text-sm font-firacode dark:text-slate-400 my-4">
            {about.description}
          </p>
          <p className="font-light text-sm font-firacode dark:text-slate-400 mb-5">
            {about.skillsIntro}
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-3  gap-5 text-sm font-firacode dark:text-slate-400 justify-between mb-5">
            {about.skillsList?.map((skill, index) => (
              <li className="flex" key={index}>
                <BsFillCheckCircleFill className="w-5 h-5 mr-2 text-teal-400" />
                {skill}
              </li>
            ))}
          </ul>
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
          className="relative h-[50vh] lg:h-[80vh]"
        >
          <Image
            src={urlFor(about.image.asset._ref).url()}
            alt="avatar"
            layout="fill"
            objectFit="contain"
            className="rounded-full "
          />
        </motion.div>
      </div>
    </section>
  );
}

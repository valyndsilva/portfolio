import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
function About({ aboutInfo, aboutRef }) {
  return (
    <section className="section text-left " id="about" ref={aboutRef}>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center w-[70vw] md:w-[80vw] mx-auto pt-12">
        <div className="">
          <Fade direction="left" duration={1200}>
            <h5 className="text-lg font-firacode font-light pb-5 dark:text-teal-400">
              {aboutInfo[0].intro}
            </h5>
            <h2 className="text-5xl font-inter font-semibold dark:text-slate-300 mb-2">
              {aboutInfo[0].name}
            </h2>
            <span className="font-light text-sm font-firacode  dark:text-slate-400">
            {aboutInfo[0].phonetics}
            </span>
            <p className=" text-sm font-firacode dark:text-slate-400 my-4">
            {aboutInfo[0].description}
            </p>
            <p className="font-light text-sm font-firacode dark:text-slate-400 mb-5">
            {aboutInfo[0].skillsIntro}
            </p>
            <ul className="text-sm font-firacode dark:text-slate-400 flex justify-between mb-5">
              <div className="space-y-2">
                <li className="flex">
                  <BsFillCheckCircleFill className="w-5 h-5 mr-2 text-teal-400" />
                  {aboutInfo[0].skill1}
                </li>
                <li className="flex">
                  <BsFillCheckCircleFill className="w-5 h-5 mr-2 text-teal-400" />
                  {aboutInfo[0].skill2}
                </li>
                <li className="flex">
                  <BsFillCheckCircleFill className="w-5 h-5 mr-2 text-teal-400" />
                  {aboutInfo[0].skill3}
                </li>
              </div>
              <div className="space-y-2">
                <li className="flex">
                  <BsFillCheckCircleFill className="w-5 h-5 mr-2 text-teal-400" />
                  {aboutInfo[0].skill4}
                </li>
                <li className="flex">
                  <BsFillCheckCircleFill className="w-5 h-5 mr-2 text-teal-400" />
                  {aboutInfo[0].skill5}
                </li>
                <li className="flex">
                  <BsFillCheckCircleFill className="w-5 h-5 mr-2 text-teal-400" />
                  {aboutInfo[0].skill6}
                </li>
              </div>
            </ul>
          </Fade>
        </div>

        <div>
          <Fade direction="right" duration={2200}>
            <div className="relative h-[50vh] lg:h-[80vh]">
              <Image
                src="/images/profile-transparent.png"
                alt="avatar"
                layout="fill"
                objectFit="contain"
                className="rounded-full "
              />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default About;

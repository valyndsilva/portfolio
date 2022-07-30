import React from "react";
import Timeline from "./Timeline";
import { Fade } from "react-awesome-reveal";
function Education({ educationInfo, educationRef }) {
  return (
    <section className="section flex-col" id="education" ref={educationRef}>
      <div className="w-[70vw] md:w-[75vw] mx-auto pt-12">
        <Fade direction="down" duration={1000}>
          <div className="text-center mb-12">
            <h1 className="font-inter font-semibold dark:text-slate-300 text-5xl mb-4">
              {educationInfo[0].title}
            </h1>
            <p className="font-firacode text-md dark:text-slate-400 xl:w-2/4 lg:w-3/4 mx-auto">
              {educationInfo[0].description}
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-teal-400 inline-flex"></div>
            </div>
          </div>
        </Fade>
        <Fade direction="up" duration={2200}>
          <div className="relative container mx-auto px-6 flex flex-col space-y-8">
            <div className="absolute z-0 w-[1px] h-full md:bg-teal-400 shadow-md inset-0  md:mx-auto md:right-0 md:left-0"></div>
            {educationInfo[0].course.map((item, index) => (
              <Timeline
                title={item.title}
                startEndDate={item.startEndDate}
                institution={item.institution}
                index={index}
              />
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default Education;

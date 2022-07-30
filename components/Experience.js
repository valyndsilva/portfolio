import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { Fade } from "react-awesome-reveal";
import exp from "constants";

function Experience({ experienceInfo, experienceRef }) {
  return (
    <section className="section flex-col" id="experience" ref={experienceRef}>
      <div className="w-[70vw] md:w-[75vw] mx-auto pt-12">
        <Fade direction="right" duration={1000}>
          <div className="text-center mb-12">
            <h1 className="font-inter font-semibold dark:text-slate-300 text-5xl mb-4">
              {experienceInfo[0].title}
            </h1>
            <p className="font-firacode text-md dark:text-slate-400 xl:w-2/4 lg:w-3/4 mx-auto">
              {experienceInfo[0].description}
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-teal-400 inline-flex"></div>
            </div>
          </div>
        </Fade>

        <Fade direction="left" duration={2200}>
          <div
            id="accordion-collapse"
            data-accordion="collapse"
            className="w-3/4 mx-auto rounded"
          >
            {/* If you don't want to reverse the original array, you can make a shallow copy of it then map of the reversed array */}
            {experienceInfo[0].experience
              ?.slice(0)
              .reverse()
              .map((item) => (
                <div key={item.jobId}>
                  <h2 id={`accordion-collapse-heading-${item.jobId}`}>
                    <button
                      type="button"
                      className="flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                      data-accordion-target={`#accordion-collapse-body-${item.jobId}`}
                      aria-expanded="true"
                      aria-controls={`accordion-collapse-body-${item.jobId}`}
                    >
                      <h5 className="text-left font-semibold text-md dark:text-slate-400 font-inter">
                        {item.jobTitle}
                        <span className="text-teal-400">@ {item.company}</span>
                      </h5>
                      <h6 className=" text-xs dark:text-slate-400 mt-3 mb-5 text-left font-firacode">
                        {item.startEndDate}
                      </h6>
                      <BiChevronDown className="w-5 h-5 text-slate-400" />
                    </button>
                  </h2>
                  <div
                    id={`accordion-collapse-body-${item.jobId}`}
                    className=""
                    aria-labelledby={`accordion-collapse-heading-${item.jobId}`}
                  >
                    <div className="p-5 font-light border border-b-0 border-slate-200 dark:border-slate-700">
                      <ul className="text-left dark:text-slate-400 text-sm space-y-3  font-firacode">
                        <li className="flex">
                          <VscDebugBreakpointLog className="w-4 h-4 text-teal-400 mr-4" />{" "}
                          {item.description1}
                        </li>
                        <li className="flex">
                          <VscDebugBreakpointLog className="w-4 h-4 text-teal-400 mr-4" />{" "}
                          {item.description2}{" "}
                        </li>
                        <li className="flex">
                          <VscDebugBreakpointLog className="w-4 h-4 text-teal-400 mr-4" />{" "}
                          {item.description3}
                        </li>
                        <li className="flex">
                          <VscDebugBreakpointLog className="w-4 h-4 text-teal-400 mr-4" />{" "}
                          {item.description4}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default Experience;

import React from "react";
import { BsCodeSlash } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";
import { SiBrandfolder } from "react-icons/si";
import { Fade } from "react-awesome-reveal";
function Services({ servicesRef }) {
  return (
    <section className="section flex-col" id="services" ref={servicesRef}>
      <div className="w-[70vw] md:w-[75vw] mx-auto pt-12">
      <Fade direction="down" duration={1000}>
          <div className="text-center mb-12">
            <h1 className="font-inter font-semibold dark:text-slate-300 text-5xl mb-4">
              What Do I Do?
            </h1>
            <p className="font-firacode text-md dark:text-slate-400 xl:w-2/4 lg:w-3/4 mx-auto">
              Blue bottle crucifix vinyl post-ironic four dollar toast
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-teal-400 inline-flex"></div>
            </div>
          </div>
        </Fade>

        <Fade direction="up" duration={1000}>
          <div className="flex flex-wrap justify-center items-center md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 md:w-40 md:h-40 inline-flex items-center justify-center rounded-full shadow-md border dark:border-none dark:bg-slate-700 mb-5 flex-shrink-0">
                <MdOutlineDesignServices className="w-8 h-8 text-teal-400" />
              </div>
              <div className="flex-grow">
                <h2 className="dark:text-slate-300 text-lg font-inter font-semibold mb-3">
                  UI / UX Design
                </h2>
                <p className="leading-relaxed text-base dark:text-slate-400">
                  I value simple content structure, clean design patterns, and
                  thoughtful interactions.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 md:w-40 md:h-40 inline-flex items-center justify-center rounded-full shadow-md border dark:border-none dark:bg-slate-700 mb-5 flex-shrink-0">
                <BsCodeSlash className="w-8 h-8 text-teal-400" />
              </div>
              <div className="flex-grow">
                <h2 className="dark:text-slate-300 text-lg font-inter font-semibold mb-3  ">
                  Front-End Developement
                </h2>
                <p className="leading-relaxed text-base dark:text-slate-400">
                  I like to code things from scratch, and enjoy bringing ideas
                  to life in the browser.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 md:w-40 md:h-40 inline-flex items-center justify-center rounded-full shadow-md border dark:border-none dark:bg-slate-700 mb-5 flex-shrink-0">
                <SiBrandfolder className="w-8 h-8 text-teal-400" />
              </div>
              <div className="flex-grow">
                <h2 className="dark:text-slate-300 text-lg font-inter font-semibold mb-3">
                  Branding
                </h2>
                <p className="leading-relaxed text-base dark:text-slate-400">
                  I like to code things from scratch, and enjoy bringing ideas
                  to life in the browser.
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default Services;

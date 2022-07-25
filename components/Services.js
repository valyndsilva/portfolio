import React from "react";
import { BsCodeSlash } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";
import { BiChat } from "react-icons/bi";
import { SiBrandfolder } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";

function Services({ servicesRef }) {
  return (
    <section className="section" id="services" ref={servicesRef}>
      <div class="px-5 mx-auto ">
        <div class="text-center mb-20">
          <h1 class="font-inter font-semibold dark:text-slate-300 text-5xl mb-4">
            What Do I Do?
          </h1>
          <p class="font-firacode text-md dark:text-slate-400 xl:w-2/4 lg:w-3/4 mx-auto">
            Blue bottle crucifix vinyl post-ironic four dollar toast
          </p>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-teal-400 inline-flex"></div>
          </div>
        </div>
        <div class="flex flex-wrap justify-center items-center md:space-y-0 space-y-6">
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div class="w-40 h-40 inline-flex items-center justify-center rounded-full shadow-md dark:bg-slate-700 mb-5 flex-shrink-0">
              <MdOutlineDesignServices className="w-8 h-8 text-teal-400" />
            </div>
            <div class="flex-grow">
              <h2 class="dark:text-slate-300 text-lg font-inter font-semibold mb-3">
                UI / UX Design
              </h2>
              <p class="leading-relaxed text-base dark:text-slate-400">
                I value simple content structure, clean design patterns, and
                thoughtful interactions.
              </p>
            </div>
          </div>
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div class="w-40 h-40 inline-flex items-center justify-center rounded-full shadow-md dark:bg-slate-700 mb-5 flex-shrink-0">
              <BsCodeSlash className="w-8 h-8 text-teal-400" />
            </div>
            <div class="flex-grow">
              <h2 class="dark:text-slate-300 text-lg font-inter font-semibold mb-3">
                Front-End Developement
              </h2>
              <p class="leading-relaxed text-base dark:text-slate-400">
                I like to code things from scratch, and enjoy bringing ideas to
                life in the browser.
              </p>
            </div>
          </div>
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div class="w-40 h-40 inline-flex items-center justify-center rounded-full shadow-md dark:bg-slate-700 mb-5 flex-shrink-0">
              <SiBrandfolder className="w-8 h-8 text-teal-400" />
            </div>
            <div class="flex-grow">
              <h2 class="dark:text-slate-300 text-lg font-inter font-semibold mb-3">
                Branding
              </h2>
              <p class="leading-relaxed text-base dark:text-slate-400">
                I like to code things from scratch, and enjoy bringing ideas to
                life in the browser.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

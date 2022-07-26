import React from "react";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import Fade from "react-reveal/Fade";

function Experience({ experienceRef }) {
  return (
    <section className="section flex-col" id="experience" ref={experienceRef}>
      <div className="w-[70vw] md:w-[75vw] mx-auto pt-12">
        <Fade right duration={1200}>
          <div className="text-center mb-12">
            <h1 className="font-inter font-semibold dark:text-slate-300 text-5xl mb-4">
              Where I've Worked?
            </h1>
            <p className="font-firacode text-md dark:text-slate-400 xl:w-2/4 lg:w-3/4 mx-auto">
              Blue bottle crucifix vinyl post-ironic four dollar toast
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-teal-400 inline-flex"></div>
            </div>
          </div>
        </Fade>

        <Fade left duration={2200}>
          <div
            id="accordion-collapse"
            data-accordion="collapse"
            className="w-3/4 mx-auto rounded"
          >
            <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium text-left text-slate-500 border border-b-0 border-slate-200 focus:ring-4 focus:ring-slate-200 dark:focus:ring-slate-800 dark:border-slate-700 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-t-xl "
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-1"
              >
                <h5 className="text-left font-semibold text-md dark:text-slate-400 font-inter">
                  Remote React Developer{" "}
                  <span className="text-teal-400"> @ Freelancer</span>
                </h5>
                <h6 className=" text-xs dark:text-slate-400 mt-3 mb-5 text-left font-firacode">
                  March 2018 - Present
                </h6>
                <svg
                  data-accordion-icon=""
                  class="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-1"
              class="hidden"
              aria-labelledby="accordion-collapse-heading-1"
            >
              <div class="p-5 font-light border border-b-0 border-slate-200 dark:border-slate-700">
                <ul className="text-left dark:text-slate-400 text-sm space-y-3  font-firacode">
                  <li className="flex">
                    <VscDebugBreakpointLog className="w-4 h-4 text-teal-400 mr-4" />{" "}
                    Create, develop and manage content for the web shops.
                  </li>
                  <li className="flex">
                    <VscDebugBreakpointLog className="w-4 h-4 text-teal-400 mr-4" />{" "}
                    Maintain a consistent look and feel throughout the website.
                  </li>
                  <li className="flex">
                    <VscDebugBreakpointLog className="w-4 h-4 text-teal-400 mr-4" />{" "}
                    Copy, edit and proofread all web content.
                  </li>
                  <li className="flex">
                    <VscDebugBreakpointLog className="w-4 h-4 text-teal-400 mr-4" />{" "}
                    Convert leads into profitable customers, using email and
                    chat support.
                  </li>
                </ul>
              </div>
            </div>
            <h2 id="accordion-collapse-heading-2">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium text-left text-slate-500 border border-b-0 border-slate-200 focus:ring-4 focus:ring-slate-200 dark:focus:ring-slate-800 dark:border-slate-700 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                data-accordion-target="#accordion-collapse-body-2"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-2"
              >
                <h5 className="text-left font-semibold text-md dark:text-slate-400 font-inter">
                  Front-End Developer{" "}
                  <span className="text-teal-400"> @ Phase Eight</span>
                </h5>
                <h6 className=" text-xs dark:text-slate-400 mt-3 mb-5 text-left font-firacode">
                  April 2015 - March 2018
                </h6>
                <svg
                  data-accordion-icon=""
                  class="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-2"
              class="hidden"
              aria-labelledby="accordion-collapse-heading-2"
            >
              <div class="p-5 font-light border border-b-0 border-slate-200 dark:border-slate-700">
                <ul className="text-left dark:text-slate-400 text-sm space-y-3  font-firacode">
                  <li className="flex">
                    <VscDebugBreakpointLog className="w-4 h-4 text-teal-400 mr-4" />{" "}
                    Assist the Head of Web Development to implement various
                    projects across the website.
                  </li>
                  <li className="flex">
                    <VscDebugBreakpointLog className="w-4 h-4 text-teal-400 mr-4" />{" "}
                    logging and assisting resolution of all web support cases.
                  </li>
                  <li className="flex">
                    <VscDebugBreakpointLog className="w-4 h-4 text-teal-400 mr-4" />{" "}
                    Developing new and existing systems as and when required.
                  </li>
                  <li className="flex">
                    <VscDebugBreakpointLog className="w-4 h-4 text-teal-400 mr-4" />{" "}
                    Convert leads into profitable customers, using email and
                    chat support.
                  </li>
                </ul>
              </div>
            </div>
            <h2 id="accordion-collapse-heading-3">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium text-left text-slate-500 border border-slate-200 focus:ring-4 focus:ring-slate-200 dark:focus:ring-slate-800 dark:border-slate-700 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                data-accordion-target="#accordion-collapse-body-3"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-3"
              >
                <h5 className="text-left font-semibold text-md dark:text-slate-400 font-inter">
                  Front-End Developer
                  <span className="text-teal-400"> @ Blowfish Ltd</span>
                </h5>
                <h6 className=" text-xs dark:text-slate-400 mt-3 mb-5 text-left  font-firacode">
                  Nov 2014 - March 2015
                </h6>
                <svg
                  data-accordion-icon=""
                  class="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-3"
              class="hidden"
              aria-labelledby="accordion-collapse-heading-3"
            >
              <div class="p-5 font-light border border-t-0 border-slate-200 dark:border-slate-700">
                <ul className="text-left dark:text-slate-400 text-sm space-y-3  font-firacode">
                  <li className="flex">
                    <VscDebugBreakpointLog className="w-4 h-4 text-teal-400 mr-4" />{" "}
                    Update website media, products & hyperlinks in a timely
                    manner.
                  </li>
                  <li className="flex">
                    <VscDebugBreakpointLog className="w-4 h-4 text-teal-400 mr-4" />{" "}
                    Maintain a consistent look and feel throughout the website.
                  </li>
                  <li className="flex">
                    <VscDebugBreakpointLog className="w-4 h-4 text-teal-400 mr-4" />{" "}
                    Revamped UI for customer-facing e-commerce site with
                    200,000+ unique visitors/month.
                  </li>
                  <li className="flex">
                    <VscDebugBreakpointLog className="w-4 h-4 text-teal-400 mr-4" />{" "}
                    Worked with agencies to build traffic & sales via the
                    website.
                  </li>
                </ul>
              </div>
            </div>
            <h2 id="accordion-collapse-heading-4">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium text-left text-slate-500 border border-slate-200 focus:ring-4 focus:ring-slate-200 dark:focus:ring-slate-800 dark:border-slate-700 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                data-accordion-target="#accordion-collapse-body-4"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-4"
              >
                <h5 className="text-left font-semibold text-md dark:text-slate-400 font-inter">
                  Web Developer Intern{" "}
                  <span className="text-teal-400">
                    {" "}
                    @ Vicapri Global Services Ltd
                  </span>
                </h5>
                <h6 className=" text-xs dark:text-slate-400 mt-3 mb-5 text-left  font-firacode">
                  July 2014 - October 2014
                </h6>
                <svg
                  data-accordion-icon=""
                  class="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-4"
              class="hidden"
              aria-labelledby="accordion-collapse-heading-4"
            >
              <div class="p-5 font-light border border-t-0 border-slate-200 dark:border-slate-700">
                <ul className="text-left dark:text-slate-400 text-sm space-y-3  font-firacode">
                  <li className="flex">
                    <VscDebugBreakpointLog className="w-4 h-4 text-teal-400 mr-4" />{" "}
                    Test the website and identify any technical problems.
                  </li>
                  <li className="flex">
                    <VscDebugBreakpointLog className="w-4 h-4 text-teal-400 mr-4" />{" "}
                    Maintain a consistent look and feel throughout the website.
                  </li>
                  <li className="flex">
                    <VscDebugBreakpointLog className="w-4 h-4 text-teal-400 mr-4" />{" "}
                    Implement changes and publish pages via CMS across the
                    website.
                  </li>
                </ul>
              </div>
            </div>
            <h2 id="accordion-collapse-heading-5">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium text-left text-slate-500 border border-slate-200 focus:ring-4 focus:ring-slate-200 dark:focus:ring-slate-800 dark:border-slate-700 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border-t-0 rounded-b-xl "
                data-accordion-target="#accordion-collapse-body-5"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-5"
              >
                <h5 className="text-left font-semibold text-md dark:text-slate-400  font-inter">
                  Web Content Management Intern
                  <span className="text-teal-400"> @ Rack Suppliers Ltd</span>
                </h5>
                <h6 className=" text-xs dark:text-slate-400 mt-3 mb-5 text-left  font-firacode">
                  Sept 2013 - June 2014
                </h6>
                <svg
                  data-accordion-icon=""
                  class="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-5"
              class="hidden"
              aria-labelledby="accordion-collapse-heading-5"
            >
              <div class="p-5 font-light border border-t-0 border-slate-200 dark:border-slate-700">
                <ul className="text-left dark:text-slate-400 text-sm space-y-3  font-firacode">
                  <li className="flex">
                    <VscDebugBreakpointLog className="w-4 h-4 text-teal-400 mr-4" />{" "}
                    Create, develop and manage content for the web shops.
                  </li>
                  <li className="flex">
                    <VscDebugBreakpointLog className="w-4 h-4 text-teal-400 mr-4" />{" "}
                    Maintain a consistent look and feel throughout the website.
                  </li>
                  <li className="flex">
                    <VscDebugBreakpointLog className="w-4 h-4 text-teal-400 mr-4" />{" "}
                    Copy, edit and proofread all web content.
                  </li>
                  <li className="flex">
                    <VscDebugBreakpointLog className="w-4 h-4 text-teal-400 mr-4" />{" "}
                    Convert leads into profitable customers, using email and
                    chat support.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default Experience;

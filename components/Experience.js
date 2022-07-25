import React from "react";
import { Tab } from "@headlessui/react";
import { VscDebugBreakpointLog } from "react-icons/vsc";
function Experience({ experienceRef }) {
  return (
    <section className="section" id="experience" ref={experienceRef}>
      <div class="text-center mb-20">
        <h1 class="font-inter font-semibold dark:text-slate-300 text-5xl mb-4">
          Where I've Worked?
        </h1>
        <p class="font-firacode text-md dark:text-slate-400 xl:w-2/4 lg:w-3/4 mx-auto">
          Blue bottle crucifix vinyl post-ironic four dollar toast
        </p>
        <div class="flex mt-6 justify-center">
          <div class="w-16 h-1 rounded-full bg-teal-400 inline-flex"></div>
        </div>
      </div>
      <Tab.Group vertical>
        <div className="grid grid-col-1 lg:grid-cols-3  mt-8 h-fit dark:text-slate-400">
          <Tab.List className="flex lg:flex-col  cols-span-1">
            <Tab
              className={({ selected }) =>
                selected
                  ? "p-5 text-teal-400 border border-teal-400 outline-none "
                  : "p-5 dark:border-slate-700 border active:scale-95 transition ease-in duration-150"
              }
            >
              Valyn Silva
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "p-5 text-teal-400 border border-teal-400 outline-none "
                  : "p-5 dark:border-slate-700 border active:scale-95 transition ease-in duration-150"
              }
            >
              Phase Eight
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "p-5 text-teal-400 border border-teal-400 outline-none "
                  : "p-5 dark:border-slate-700 border active:scale-95 transition ease-in duration-150"
              }
            >
              Blowfish Limited
            </Tab>

            <Tab
              className={({ selected }) =>
                selected
                  ? "p-5 text-teal-400 border border-teal-400 outline-none "
                  : "p-5 dark:border-slate-700 border active:scale-95 transition ease-in duration-150"
              }
            >
              Vicapri Global Services Ltd
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "p-5 text-teal-400 border border-teal-400 outline-none "
                  : "p-5 dark:border-slate-700 border active:scale-95 transition ease-in duration-150"
              }
            >
              Rack Suppliers Ltd
            </Tab>
          </Tab.List>
          <Tab.Panels className="col-span-2 dark:border-slate-700 border p-10">
            <Tab.Panel className="justify-center font-firacode flex flex-col text-left w-full">
              <h5 className="text-left font-semibold text-md dark:text-slate-400 ">
                Remote React Developer{" "}
                <span className="text-teal-400"> @ Freelancer</span>
              </h5>
              <h6 className=" text-xs dark:text-slate-400 mt-3 mb-5 text-left">
                March 2018 - Present
              </h6>
              <ul className="text-left dark:text-slate-400 text-sm space-y-3">
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
                  Convert leads into profitable customers, using email and chat
                  support.
                </li>
              </ul>
            </Tab.Panel>
            <Tab.Panel className="justify-center font-firacode flex flex-col text-left w-full">
              <h5 className="text-left font-semibold text-md dark:text-slate-400 ">
                Front-End Developer{" "}
                <span className="text-teal-400"> @ Phase Eight</span>
              </h5>
              <h6 className=" text-xs dark:text-slate-400 mt-3 mb-5 text-left">
                April 2015 - March 2018
              </h6>
              <ul className="text-left dark:text-slate-400 text-sm space-y-3">
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
                  Convert leads into profitable customers, using email and chat
                  support.
                </li>
              </ul>
            </Tab.Panel>
            <Tab.Panel className="justify-center font-firacode flex flex-col text-left w-full">
              <h5 className="text-left font-semibold text-md dark:text-slate-400 ">
                Front-End Developer
                <span className="text-teal-400"> @ Blowfish Ltd</span>
              </h5>
              <h6 className=" text-xs dark:text-slate-400 mt-3 mb-5 text-left">
                Nov 2014 - March 2015
              </h6>
              <ul className="text-left dark:text-slate-400 text-sm space-y-3">
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
                  Revamped UI for customer-facing e-commerce site with 200,000+
                  unique visitors/month.
                </li>
                <li className="flex">
                  <VscDebugBreakpointLog className="w-4 h-4 text-teal-400 mr-4" />{" "}
                  Worked with agencies to build traffic & sales via the website.
                </li>
              </ul>
            </Tab.Panel>
            <Tab.Panel className="justify-center font-firacode flex flex-col text-left w-full">
              <h5 className="text-left font-semibold text-md dark:text-slate-400 ">
                Web Developer Intern{" "}
                <span className="text-teal-400">
                  {" "}
                  @ Vicapri Global Services Ltd
                </span>
              </h5>
              <h6 className=" text-xs dark:text-slate-400 mt-3 mb-5 text-left">
                July 2014 - October 2014
              </h6>
              <ul className="text-left dark:text-slate-400 text-sm space-y-3">
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
            </Tab.Panel>
            <Tab.Panel className="flex flex-col justify-center align-center font-firacode  text-left">
              <h5 className="text-left font-semibold text-md dark:text-slate-400 ">
                E-Commerce Web Content Management Intern
                <span className="text-teal-400"> @ Rack Suppliers Ltd</span>
              </h5>
              <h6 className=" text-xs dark:text-slate-400 mt-3 mb-5 text-left">
                Sept 2013 - June 2014
              </h6>
              <ul className="text-left dark:text-slate-400 text-sm space-y-3">
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
                  Convert leads into profitable customers, using email and chat
                  support.
                </li>
              </ul>
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
    </section>
  );
}

export default Experience;

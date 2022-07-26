import React from "react";
import Image from "next/image";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BiLink } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import Fade from "react-reveal/Fade";
function Portfolio({ portfolioRef }) {
  return (
    <section className="section flex-col" id="portfolio" ref={portfolioRef}>
      <div className="w-[70vw] md:w-[75vw] mx-auto pt-12">
        <Fade right duration={1200}>
          <div className="text-center mb-12">
            <h1 className="font-inter font-semibold dark:text-slate-300 text-5xl mb-4">
              Some Things I've Built
            </h1>
            <p className="font-firacode text-md dark:text-slate-400 xl:w-2/4 lg:w-3/4 mx-auto">
              Blue bottle crucifix vinyl post-ironic four dollar toast
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-teal-400 inline-flex"></div>
            </div>
          </div>
        </Fade>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left ">
          <Fade left duration={2200}>
            <div className="relative hidden lg:inline-flex md:w-[35vw] h-[35vh]">
              <Image
                src="/images/projects.png"
                alt="avatar"
                layout="fill"
                objectFit="contain"
                className="rounded-lg "
              />
            </div>
          </Fade>
          <Fade right duration={3200}>
            <div>
              <h2 className="text-4xl font-inter font-semibold dark:text-slate-300 mb-2">
                Amazon Redesign
              </h2>

              <p className=" text-sm font-firacode dark:text-slate-400 my-4">
                Amazon redesign with a modern UI, complete E-Commerce
                functionality including Payment Processing (Stripe API) and User
                Authentication (Firebase).
              </p>

              <p className="font-light text-sm font-firacode dark:text-slate-400 mb-5">
                Tech Stack:
              </p>
              <ul className="text-sm font-firacode dark:text-slate-400 flex justify-between mb-10">
                <div className="space-y-2">
                  <li className="flex">
                    <BsFillCheckCircleFill className="w-5 h-5 mr-2 text-teal-400" />
                    ReactJS
                  </li>
                  <li className="flex">
                    <BsFillCheckCircleFill className="w-5 h-5 mr-2 text-teal-400" />
                    React Router
                  </li>
                  <li className="flex">
                    <BsFillCheckCircleFill className="w-5 h-5 mr-2 text-teal-400" />
                    Framer Motion
                  </li>
                </div>
                <div className="space-y-2">
                  <li className="flex">
                    <BsFillCheckCircleFill className="w-5 h-5 mr-2 text-teal-400" />
                    Redux / Context API / Recoil
                  </li>
                  <li className="flex">
                    <BsFillCheckCircleFill className="w-5 h-5 mr-2 text-teal-400" />
                    Firebase
                  </li>
                  <li className="flex">
                    <BsFillCheckCircleFill className="w-5 h-5 mr-2 text-teal-400" />
                    Stripe API
                  </li>
                </div>
              </ul>
              <div className="flex space-x-8">
                <button className="flex border space-x-4 font-light text-sm font-firacode  shadow-md dark:border-teal-400 dark:text-teal-400 px-4 py-3 rounded-full">
                  <FiGithub className="w-5 h-5" />
                  <p>Github Repo</p>
                </button>
                <button className="flex border space-x-4 font-light text-sm font-firacode  shadow-md dark:border-teal-400 dark:text-teal-400 px-4 py-3 rounded-full">
                  <BiLink className="w-5 h-5" />
                  <p>Live Demo</p>
                </button>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

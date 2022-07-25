import React from "react";
import Image from "next/image";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BiLink } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";

function Portfolio({ portfolioRef }) {
  return (
    <section
      className="section w-[80vw] mt-5 z-20"
      id="portfolio"
      ref={portfolioRef}
    >
      <h2 className="text-left text-4xl font-semibold font-inter dark:text-slate-300 mb-20">
        <span className="text-teal-400 text-4xl font-firacode font-light mr-2">
          02.
        </span>
        Some Things I've Built
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left ">
        <div className="relative hidden lg:inline-flex md:w-[35vw] h-[35vh]">
          <Image
            src="/images/projects.png"
            alt="avatar"
            layout="fill"
            objectFit="contain"
            className="rounded-lg "
          />
        </div>
        <div>
          <h2 className="text-4xl font-inter font-semibold dark:text-slate-300 mb-2">
            Amazon Redesign
          </h2>

          <p className=" text-sm font-firacode dark:text-slate-400 my-4">
            Amazon redesign with a modern UI, complete E-Commerce functionality
            including Payment Processing (Stripe API) and User Authentication
            (Firebase).
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
      </div>
    </section>
  );
}

export default Portfolio;

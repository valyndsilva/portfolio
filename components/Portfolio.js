import React from "react";
import Image from "next/image";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BiLink } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { Fade } from "react-awesome-reveal";
import { urlFor } from "../lib/sanity";
import Link from "next/link";
function Portfolio({ portfolioInfo, portfolioRef }) {
  return (
    <section className="section flex-col" id="portfolio" ref={portfolioRef}>
      <div className="w-[70vw] md:w-[75vw] mx-auto pt-12">
        <Fade direction="right" duration={1000}>
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

        {portfolioInfo.map((item, index) => (
          <div
            id="portfolio-item"
            // className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left"
            className={`${
              index % 2 == 0 ? "flex-row" : "flex-row-reverse"
            } flex space-x-8 text-left mb-20 items-center`}
            key={index}
          >
            <Fade
              direction={`${index % 2 == 0 ? "left" : "right"}`}
              duration={2200}
            >
              <div
                className={`${
                  index % 2 == 0 ? "ml-0" : "ml-10"
                } relative hidden lg:inline-flex md:w-[35vw] h-[35vh]`}
              >
                <img
                  src={urlFor(item.imgUrl)}
                  alt="avatar"
                  // layout="fill"
                  // objectFit="contain"
                  className="rounded-lg "
                />
              </div>
            </Fade>
            <Fade
              direction={`${index % 2 == 0 ? "right" : "left"}`}
              duration={3200}
            >
              <div className="">
                <h2 className="text-4xl font-inter font-semibold dark:text-slate-300 mb-2">
                  {item.title}
                </h2>

                <p className=" text-sm font-firacode dark:text-slate-400 my-4">
                  {item.description}
                </p>

                <p className="font-light text-sm font-firacode dark:text-slate-400 mb-5">
                  Tech Stack:
                </p>
                <ul className="text-sm font-firacode dark:text-slate-400 flex justify-between mb-10">
                  <div className="space-y-2">
                    {item?.skill1 && (
                      <li className="flex">
                        <BsFillCheckCircleFill className="w-5 h-5 mr-2 text-teal-400" />
                        {item.skill1}
                      </li>
                    )}
                    {item?.skill3 && (
                      <li className="flex">
                        <BsFillCheckCircleFill className="w-5 h-5 mr-2 text-teal-400" />
                        {item.skill3}
                      </li>
                    )}
                    {item?.skill5 && (
                      <li className="flex">
                        <BsFillCheckCircleFill className="w-5 h-5 mr-2 text-teal-400" />
                        {item.skill5}
                      </li>
                    )}
                    {item?.skill7 && (
                      <li className="flex">
                        <BsFillCheckCircleFill className="w-5 h-5 mr-2 text-teal-400" />
                        {item.skill7}
                      </li>
                    )}
                  </div>
                  <div className="space-y-2">
                    {item?.skill2 && (
                      <li className="flex">
                        <BsFillCheckCircleFill className="w-5 h-5 mr-2 text-teal-400" />
                        {item.skill2}
                      </li>
                    )}
                    {item?.skill4 && (
                      <li className="flex">
                        <BsFillCheckCircleFill className="w-5 h-5 mr-2 text-teal-400" />
                        {item.skill4}
                      </li>
                    )}
                    {item?.skill6 && (
                      <li className="flex">
                        <BsFillCheckCircleFill className="w-5 h-5 mr-2 text-teal-400" />
                        {item.skill6}
                      </li>
                    )}

                    {item?.skill8 && (
                      <li className="flex">
                        <BsFillCheckCircleFill className="w-5 h-5 mr-2 text-teal-400" />
                        {item.skill8}
                      </li>
                    )}
                  </div>
                </ul>
                <div className="flex space-x-8">
                  <Link href={item.githubLink}>
                    <button className="flex border space-x-4 font-light text-sm font-firacode  shadow-md dark:border-teal-400 dark:text-teal-400 px-4 py-3 rounded-full">
                      <FiGithub className="w-5 h-5" />
                      <p>Github Repo</p>
                    </button>
                  </Link>
                  <Link href={item.demoLink}>
                    <button className="flex border space-x-4 font-light text-sm font-firacode  shadow-md dark:border-teal-400 dark:text-teal-400 px-4 py-3 rounded-full">
                      <BiLink className="w-5 h-5" />
                      <p>Live Demo</p>
                    </button>
                  </Link>
                </div>
              </div>
            </Fade>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;

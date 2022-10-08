import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BiLink } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { urlFor } from "../lib/sanity";
import { IPortfolio } from "../types/typings";
import { motion } from "framer-motion";

interface Props {
  portfolio: IPortfolio;
  /* eslint-disable */
  portfolioRef: any;
}

export default function Portfolio({ portfolio, portfolioRef }: Props) {
  return (
    <article className="section" id="portfolio" ref={portfolioRef}>
      <div className="w-[75vw] mx-auto pt-12 relative">
        <motion.div
          initial={{
            x: -400,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{ once: false }}
          className="text-center mb-12"
        >
          <h1 className="font-inter font-semibold dark:text-slate-300 text-5xl mb-4">
            {portfolio.title}
          </h1>
          <p className="font-firacode text-md dark:text-slate-400 xl:w-2/4 lg:w-3/4 mx-auto">
            {portfolio.description}
          </p>

          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-teal-400 inline-flex"></div>
          </div>
        </motion.div>

        <div className="relative opacity-40 hover:opacity-100 lg:opacity-100 cursor-pointer transition-opacity duration-200  group">
          <div className="absolute -inset-0.5 bg-teal-400 opacity-0 rounded-lg blur-sm group-hover:opacity-100 group-hover:duration-200 transition duration-1000 lg:hidden"></div>

          <motion.div
            initial={{
              // x: 400,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{
              // x: 0,
              opacity: 1,
            }}
            viewport={{ once: false }}
            className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-slate-500/20 scrollbar-thumb-teal-400/80 cursor-pointer"
          >
            {portfolio.projectList?.map((item, index) => (
              <div
                className="w-full h-fit flex-shrink-0 snap-center items-center justify-center   rounded-lg"
                key={item._id}
              >
                <div className="w-full flex-row lg:flex p-8 lg:p-0 bg-teal-50 shadow-md  lg:bg-transparent dark:bg-slate-800 rounded-lg lg:dark:bg-transparent lg:rounded-xs z-0">
                  <motion.div
                    initial={{
                      y: -300,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 1.2,
                    }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                    }}
                    viewport={{ once: false }}
                    className="relative lg:w-[30vw] h-[20vh] md:h-[30vh] lg:h-[45vh] lg:ml-4 "
                  >
                    <Image
                      src={urlFor(item?.image?.asset._ref).url()}
                      alt="avatar"
                      layout="fill"
                      objectFit="contain"
                      className="rounded-lg "
                    />
                  </motion.div>
                  <motion.div
                    initial={{
                      // x: 400,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 1.2,
                    }}
                    whileInView={{
                      // x: 0,
                      opacity: 1,
                    }}
                    viewport={{ once: false }}
                    className="justify-center items-center flex flex-col lg:mr-4 lg:w-[40vw] relative"
                  >
                    <div>
                      <h2 className="text-4xl font-inter font-semibold mt-4 dark:text-slate-300 mb-2">
                        {item.title}
                      </h2>
                    </div>
                    <p className="w-[50vw] lg:w-[35vw] text-sm font-firacode dark:text-slate-400 mt-4 mb-10">
                      {item.description}
                    </p>

                    <p className="font-bold text-md  dark:text-slate-300 mb-4">
                      Tech Stack:
                    </p>

                    <div className="items-center space-y-2">
                      <ul className="text-sm font-firacode dark:text-slate-400 mb-10 grid grid-cols-2 gap-6 ">
                        {item?.skills.length > 0 &&
                          item.skills.map((project, index) => (
                            <li key={index} className="flex">
                              <BsFillCheckCircleFill className="w-5 h-5 mr-2 text-teal-400" />
                              {project}
                            </li>
                          ))}
                      </ul>
                    </div>
                    <div className="flex space-x-8">
                      <Link href={item.githubLink}>
                        <button className="flex border space-x-4 font-light text-sm font-firacode  shadow-md dark:border-teal-400 dark:text-teal-400 hover:border-teal-400 dark:hover:bg-slate-600 px-4 py-3 rounded-full ">
                          <FiGithub className="w-5 h-5" />
                          <p>Github Repo</p>
                        </button>
                      </Link>
                      <Link href={item.demoLink}>
                        <button className="flex border space-x-4 font-light text-sm font-firacode  shadow-md dark:border-teal-400 dark:text-teal-400 hover:border-teal-400 dark:hover:bg-slate-600 px-4 py-3 rounded-full ">
                          <BiLink className="w-5 h-5" />
                          <p>Live Demo</p>
                        </button>
                      </Link>
                    </div>
                    <span className="ml-5 text-lg font-light mt-8 lg:my-10 space-x-2">
                      <span> Project:</span>
                      <span className="underline items-center justify-center decoration-4 decoration-teal-400/80 font-bold">
                        {index + 1}
                      </span>
                      <span> of </span>
                      <span>{portfolio.projectList.length}</span>
                    </span>
                  </motion.div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="md:w-full md:absolute md:bg-teal-400/10 left-0  lg:top-[30%] lg:h-[30vh] lg:-skew-y-12"></div>
      </div>
    </article>
  );
}

import React, { Suspense } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Image from "next/image";
function About({ aboutRef }) {
  return (
    <section
      className="section grid grid-cols-1 lg:grid-cols-2 text-left"
      id="about"
      ref={aboutRef}
    >
      <div className="">
        <h5 className="text-lg font-firacode font-light pb-5 dark:text-teal-400">
          Hi, my name is
        </h5>
        <h2 className="text-5xl font-inter font-semibold dark:text-slate-300 mb-2">
          Valyn Silva.
        </h2>
        <span className="font-light text-sm font-firacode  dark:text-slate-400">
          (n.) /vaelihn sill-vah/
        </span>
        <p className=" text-sm font-firacode dark:text-slate-400 my-4">
          I’m a front-end developer specialized in building (and occasionally
          designing) exceptional UI / UX experiences for humans. I've been
          coding for nearly 7 years, enjoy creating things that live on the
          internet and love learning new technologies. I currently work remotely
          with a selected freelance client base being open for new
          opportunities.
        </p>
        <p className="font-light text-sm font-firacode dark:text-slate-400 mb-5">
          My preferred weapons of choice:
        </p>
        <ul className="text-sm font-firacode dark:text-slate-400 flex justify-between mb-5">
          <div className="space-y-2">
            <li className="flex">
              <BsFillCheckCircleFill className="w-5 h-5 mr-2 text-teal-400" />
              ReactJS / NextJS
            </li>
            <li className="flex">
              <BsFillCheckCircleFill className="w-5 h-5 mr-2 text-teal-400" />
              Tailwind CSS
            </li>
          </div>
          <div className="space-y-2">
            <li className="flex">
              <BsFillCheckCircleFill className="w-5 h-5 mr-2 text-teal-400" />
              Redux / Context API / Recoil
            </li>
            <li className="flex">
              <BsFillCheckCircleFill className="w-5 h-5 mr-2 text-teal-400" />
              Firebase / Supabase
            </li>
          </div>
        </ul>
      </div>
      <div className="relative h-[50vh] lg:h-[80vh]">
        <Image
          src="/images/profile-transparent.png"
          alt="avatar"
          layout="fill"
          objectFit="contain"
          className="rounded-full "
        />
      </div>
    </section>
  );
}

export default About;

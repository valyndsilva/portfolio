import React from "react";
import { Course } from "../types/typings";
type Props = {
  item: Course;
  index: number;
};
function Timeline({ item, index }: Props) {
  return (
    <div className="relative z-10">
      <div className="w-16 h-16 rounded-full shadow-md text-center absolute left-[50%] top-5 ml-[-2rem] items-center justify-center border-2 border-teal-400 bg-slate-100 dark:bg-slate-700 mb-5 flex-shrink-0 hidden md:inline-flex">
        <span className="text-teal-400">{index + 1}</span>
      </div>
      <div
        className={`${
          index % 2 == 0
            ? "timeline-container timeline-container-left"
            : "timeline-container"
        }`}
      >
        <div
          className={`${
            index % 2 == 0
              ? "timeline-pointer timeline-pointer-left  "
              : "timeline-pointer"
          }hidden md:inline-flex`}
          aria-hidden="true"
        ></div>
        <div className="relative group  opacity-70 dark:opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200">
          <div className="absolute -inset-0.5 bg-teal-400 opacity-0 rounded-lg blur-sm group-hover:opacity-100 group-hover:duration-200 transition duration-1000 "></div>

          <div className="bg-teal-50 border dark:border-none dark:bg-slate-800 rounded-md shadow-md  p-6 text-left relative">
            <h3 className="font-inter font-semibold text-md dark:text-slate-300">
              {item.title}
            </h3>
            <h3 className="font-inter font-semibold text-sm text-teal-500 dark:text-teal-400">
              <span>@ </span>
              {item.institution}
            </h3>
            <span className="font-firacode font-light text-sm dark:text-slate-400">
              {new Date(item.startDate).getFullYear()} -{" "}
              {new Date(item.endDate).getFullYear()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;

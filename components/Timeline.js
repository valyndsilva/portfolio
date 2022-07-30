import React from "react";

function Timeline({ title, startEndDate, institution, index }) {
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
        <div className=" bg-slate-50 border dark:border-none dark:bg-slate-800 p-6 rounded-md shadow-md">
          <div className="text-left">
            <h3 className="font-inter font-semibold text-md dark:text-slate-300">
              {title}
            </h3>
            <h3 className="font-inter font-semibold text-sm text-teal-500 dark:text-teal-400">
              <span>@ </span>
              {institution}
            </h3>
            <span className="font-firacode font-light text-sm dark:text-slate-400">
              {startEndDate}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;

import React from "react";
import { FaSuitcase } from "react-icons/fa";

function TimelineLeft({
  jobTitle,
  jobDate,
  companyName,
  jobDescription,
  itemNumber,
}) {
  return (
    <div className="relative z-10">
      <div className="w-16 h-16 rounded-full shadow-md text-center absolute left-[50%] top-5 ml-[-2rem] inline-flex items-center justify-center border-2 border-teal-400 bg-slate-200 dark:bg-slate-700 mb-5 flex-shrink-0">
        {/* <FaSuitcase className="w-5 h-5 text-teal-400" /> */}
        <span className="text-teal-400">{itemNumber}</span>
      </div>
      <div className="timeline-container timeline-container-left">
        <div
          className="timeline-pointer timeline-pointer-left"
          aria-hidden="true"
        ></div>
        <div className="bg-slate-200 dark:bg-slate-800 p-6 rounded-md shadow-md">
          <div className="text-left">
            <h3 className="font-inter font-semibold text-md dark:text-slate-300">
              {jobTitle}
            </h3>
            <h3 className="font-inter font-semibold text-sm text-teal-500 dark:text-teal-400">
              <span>@ </span>
              {companyName}
            </h3>
            <span className="font-firacode font-light text-sm dark:text-slate-400">
              {jobDate}
            </span>
            {/* <p className="font-firacode font-light text-md dark:text-slate-400 mt-4">
              {jobDescription}
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimelineLeft;

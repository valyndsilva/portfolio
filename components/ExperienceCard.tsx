import React from "react";
import { BsDot } from "react-icons/bs";
import { Company } from "../types/typings";

interface Props {
  item: Company;
}
export default function ExperienceCard({ item }: Props) {
  const start = item.startDate;
  const end = item.endDate;
  const formattedStart = new Date(start).toLocaleString("en-us", {
    month: "short",
    year: "numeric",
  });
  const formattedEnd = new Date(end).toLocaleString("en-us", {
    month: "short",
    year: "numeric",
  });
  const working = item.isCurrentlyWorkingHere;

  return (
    <article className="flex flex-col items-center opacity-70 hover:opacity-100 dark:opacity-40 dark:hover:opacity-100 cursor-pointer transition-opacity duration-200 flex-shrink-0 snap-center relative group z-10">
      <div className="absolute -inset-0.5 bg-teal-400 opacity-0 rounded-lg blur-sm group-hover:opacity-100 group-hover:duration-200 transition duration-1000"></div>

      <div
        className="bg-teal-50 dark:bg-slate-800  shadow-md  relative rounded-lg space-y-7 p-10 h-fit lg:h-[52vh] w-[65vw] xl:w-[40vw] justify-center flex flex-col"
        key={item.jobId}
      >
        <div className="px-0">
          <h4 className="text-left font-light text-2xl dark:text-slate-400 font-inter mt-2">
            {item.jobTitle}
          </h4>
          <p className="text-teal-400 mt-1">@ {item.company}</p>
          <h6 className=" dark:text-slate-400 mt-4 text-left font-firacode">
            {formattedStart} to {working ? "Present" : formattedEnd}
          </h6>
        </div>

        <ul className="list-disc space-y-3 text-left dark:text-slate-400 text-sm font-firacode">
          {item.points?.map((point, index) => (
            <li key={index} className="flex">
              <BsDot className="w-4 h-4 mr-2 text-teal-400" /> {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

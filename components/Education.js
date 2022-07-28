import React from "react";
import Timeline from "./Timeline";
import TimelineLeft from "./TimelineLeft";
import { Fade } from "react-awesome-reveal";
function Education({ educationRef }) {
  return (
    <section className="section flex-col" id="education" ref={educationRef}>
      <div className="w-[70vw] md:w-[75vw] mx-auto pt-12">
        <Fade direction="down" duration={1000}>
          <div className="text-center mb-12">
            <h1 className="font-inter font-semibold dark:text-slate-300 text-5xl mb-4">
              What I've Studied?
            </h1>
            <p className="font-firacode text-md dark:text-slate-400 xl:w-2/4 lg:w-3/4 mx-auto">
              Blue bottle crucifix vinyl post-ironic four dollar toast
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-teal-400 inline-flex"></div>
            </div>
          </div>
        </Fade>
        <Fade direction="up" duration={2200}>
          <div className="relative container mx-auto px-6 flex flex-col space-y-8">
            <div className="absolute z-0 w-[1px] h-full md:bg-teal-400 shadow-md inset-0  md:mx-auto md:right-0 md:left-0"></div>

            <Timeline
              jobTitle="Web Development and Database Management"
              jobDate="2013 - 2014"
              itemNumber={3}
              companyName="London Academy Of IT"
              // jobDescription="lorem ipsum dolor sit amet, consect"
            />

            <TimelineLeft
              jobTitle="Electronics & Telecommunication Engineering"
              jobDate="2008 - 2012"
              itemNumber={2}
              companyName="Padre Conceicao College of Engineering"
              // jobDescription="lorem ipsum dolor sit amet, consect"
            />
            <Timeline
              jobTitle="Mathematics and Computer Science"
              jobDate="2006 - 2008"
              itemNumber={1}
              companyName="Carmel Higher Secondary School"
              // jobDescription="lorem ipsum dolor sit amet, consect"
            />
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default Education;

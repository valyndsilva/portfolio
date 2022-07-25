import React from "react";
import Timeline from "./Timeline";
import TimelineLeft from "./TimelineLeft";
function Experience({ experienceRef }) {
  return (
    <section className="section" id="experience" ref={experienceRef}>
      <div class="text-center mb-5">
        <h1 class="font-inter font-semibold dark:text-slate-300 text-5xl mb-4">
          Where I've Worked?
        </h1>
        <p class="font-firacode text-md dark:text-slate-400 xl:w-2/4 lg:w-3/4 mx-auto">
          Blue bottle crucifix vinyl post-ironic four dollar toast
        </p>
        <div class="flex mt-6 justify-center">
          <div class="w-16 h-1 rounded-full bg-teal-400 inline-flex"></div>
        </div>
      </div>

      <div class="relative container mx-auto px-6 flex flex-col space-y-8">
        <div class="absolute z-0 w-[1px] h-full md:bg-teal-400 shadow-md inset-0  md:mx-auto md:right-0 md:left-0"></div>
        <Timeline
          jobTitle="Remote React Developer"
          jobDate="March 2018 - Present"
          itemNumber={5}
          companyName="Freelancer"
          // jobDescription="lorem ipsum dolor sit amet, consect"
        />
        <TimelineLeft
          jobTitle="Front-End Developer"
          jobDate="April 2015 - March 2018"
          itemNumber={4}
          companyName="Phase Eight"
          // jobDescription="lorem ipsum dolor sit amet, consect"
        />
        <Timeline
          jobTitle="Front-End Developer"
          jobDate="Nov 2014 - March 2015"
          itemNumber={3}
          companyName="Blowfish Ltd"
          // jobDescription="lorem ipsum dolor sit amet, consect"
        />
        <TimelineLeft
          jobTitle=" Web Developer Intern"
          jobDate="July 2014 - October 2014"
          itemNumber={2}
          companyName="Vicapri Global Services Ltd"
          // jobDescription="lorem ipsum dolor sit amet, consect"
        />
        <Timeline
          jobTitle="E-Commerce Web Content Management Intern"
          jobDate="Sept 2013 - June 2014"
          itemNumber={1}
          companyName="Rack Suppliers Ltd"
          // jobDescription="lorem ipsum dolor sit amet, consect"
        />
      </div>
    </section>
  );
}

export default Experience;

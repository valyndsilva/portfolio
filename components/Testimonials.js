import React from "react";
import SliderComp from "./SliderComp";
import { Fade } from "react-awesome-reveal";

function Testimonials({ testimonialsInfo, testimonialsRef }) {
  return (
    <section
      className="section flex-col"
      id="testimonials"
      ref={testimonialsRef}
    >
      <div className="w-[70vw] md:w-[75vw] mx-auto pt-12">
        <Fade direction="down" duration={1000}>
          <div className="text-center">
            <h1 className="font-inter font-semibold dark:text-slate-300 text-5xl mb-4">
              {testimonialsInfo[0].title}
            </h1>
            <p className="font-firacode text-md dark:text-slate-400 xl:w-2/4 lg:w-3/4 mx-auto">
              {testimonialsInfo[0].description}
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-teal-400 inline-flex"></div>
            </div>
          </div>
        </Fade>
        <Fade direction="up" duration={2000}>
          <SliderComp testimonialsInfo={testimonialsInfo[0].testimonial} />
        </Fade>
      </div>
    </section>
  );
}

export default Testimonials;

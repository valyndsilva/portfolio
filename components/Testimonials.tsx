import React from "react";
import SliderComp from "./SliderComp";
import { ITestimonials } from "../types/typings";
import { motion } from "framer-motion";

type Props = {
  testimonials: ITestimonials;
  testimonialsRef: any;
};

export default function Testimonials({ testimonials, testimonialsRef }: Props) {

  return (
    <section className="section" id="testimonials" ref={testimonialsRef}>
      <div className="w-[70vw] md:w-[75vw] mx-auto pt-12">
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
          className="text-center"
        >
          <h1 className="font-inter font-semibold dark:text-slate-300 text-5xl mb-4">
            {testimonials.title}
          </h1>
          <p className="font-firacode text-md dark:text-slate-400 xl:w-2/4 lg:w-3/4 mx-auto">
            {testimonials.description}
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-teal-400 inline-flex"></div>
          </div>
        </motion.div>
        <motion.div
          initial={{
            x: 400,
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
          className="mt-14"
        >
          <SliderComp testimonials={testimonials} />
        </motion.div>
      </div>
    </section>
  );
}

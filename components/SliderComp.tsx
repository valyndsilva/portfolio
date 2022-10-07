import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { ITestimonials } from "../types/typings";

type Props = {
  testimonials: ITestimonials;
};

function SliderComp({ testimonials }: Props) {
  return (
    <Swiper
      className="pt-10 pb-10 "
      modules={[Navigation, Pagination, Autoplay]}
      loop={true}
      autoplay={{ delay: 5000 }}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {testimonials?.testimonialList?.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div className="relative group opacity-70 hover:opacity-100 dark:opacity-40 dark:hover:opacity-100 flex flex-col w-[68vw] md:w-2/3 mx-auto  font-firacode m-10 cursor-pointer">
            <div className="absolute -inset-0.5 bg-teal-400 opacity-0 rounded-lg blur-sm group-hover:opacity-100 group-hover:duration-200 transition duration-1000 "></div>
            <div className="relative bg-teal-50  dark:bg-slate-800  shadow-md  items-center text-center p-10 rounded-lg h-[52vh] justify-center flex flex-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block w-8 h-8 dark:text-slate-400 mb-8"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed text-md dark:text-slate-400">
                {testimonial.description}
              </p>
              <span className="inline-block h-1 w-10 rounded bg-teal-400 mt-8 mb-6"></span>
              <h2 className="text-teal-400 font-medium title-font tracking-wider text-sm uppercase">
                {testimonial.name}
              </h2>
              <p className="dark:text-slate-400 mb-10 md:mb-0">
                {testimonial.company}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SliderComp;

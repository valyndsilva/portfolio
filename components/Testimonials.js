import React from "react";
import SliderComp from "./SliderComp";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";
import "swiper/css/autoplay";

function Testimonials({ testimonialsRef }) {
  return (
    <section
      className="section w-[80vw] mt-5 z-20 text-gray-600 body-font"
      id="testimonials"
      ref={testimonialsRef}
    >
      <h2 className="text-left text-4xl font-semibold font-inter dark:text-slate-300">
        <span className="text-teal-400 text-4xl font-firacode font-light mr-2">
          03.
        </span>
        What Clients Say About Working With Me
      </h2>
      <Swiper
        className="pt-24 pb-10"
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        autoplay={{ delay: 5000 }}
        spaceBetween={50}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="flex flex-col  w-full md:w-2/3 mx-auto justify-center items-center text-center p-10 dark:bg-slate-800 rounded-lg font-firacode">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 dark:text-slate-400 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-md dark:text-slate-400">
              “I have had the privilege of working with Valyn where she has
              demonstrated how professional and passionate she is as a web
              developer. She has shown a clear understanding of everything
              involved as well as being clearly integrated with the team. Her
              hard work and passion, always pursuing perfection, will make Valyn
              a true asset for your company.”
            </p>
            <span className="inline-block h-1 w-10 rounded bg-teal-400 mt-8 mb-6"></span>
            <h2 className="text-teal-400 font-medium title-font tracking-wider text-sm">
              SERGIO ORTEGA ORTIZ
            </h2>
            <p className="dark:text-slate-400">Aptos Digital</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col w-full md:w-2/3 mx-auto  justify-center items-center text-center  p-10 dark:bg-slate-800 rounded-lg font-firacode">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 dark:text-slate-400 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-md dark:text-slate-400 ">
              “Valyn is fantastic to work with. She is a customer focused,
              intelligent, detail oriented and precise Front-End Developer with
              very good communication skills. Always takes care of the job,
              works hard and really enjoys team-working and is always a pleasure
              to work with.”
            </p>
            <span className="inline-block h-1 w-10 rounded bg-teal-400 mt-8 mb-6"></span>
            <h2 className="text-teal-400 font-medium title-font tracking-wider text-sm">
              MEHDI REHMATI
            </h2>
            <p className="dark:text-slate-400">BT Fresca</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col w-full md:w-2/3 mx-auto  justify-center items-center text-center  p-10 dark:bg-slate-800 rounded-lg font-firacode">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 dark:text-slate-400 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-md dark:text-slate-400 ">
              “Valyn is fantastic to work with. She is a customer focused,
              intelligent, detail oriented and precise Front-End Developer with
              very good communication skills. Always takes care of the job,
              works hard and really enjoys team-working and is always a pleasure
              to work with.”
            </p>
            <span className="inline-block h-1 w-10 rounded bg-teal-400 mt-8 mb-6"></span>
            <h2 className="text-teal-400 font-medium title-font tracking-wider text-sm">
              RAMIT MONGA
            </h2>
            <p className="dark:text-slate-400">Blowfish Ltd</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col w-full md:w-2/3 mx-auto justify-center items-center text-center  p-10 dark:bg-slate-800 rounded-lg font-firacode">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 dark:text-slate-400 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-md dark:text-slate-400 ">
              “Valyn is fantastic to work with. She is a customer focused,
              intelligent, detail oriented and precise Front-End Developer with
              very good communication skills. Always takes care of the job,
              works hard and really enjoys team-working and is always a pleasure
              to work with.”
            </p>
            <span className="inline-block h-1 w-10 rounded bg-teal-400 mt-8 mb-6"></span>
            <h2 className="text-teal-400 font-medium title-font tracking-wider text-sm">
              REZA SADEGHI
            </h2>
            <p className="dark:text-slate-400">Rack Suppliers Ltd</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Testimonials;

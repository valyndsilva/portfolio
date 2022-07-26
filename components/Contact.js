import React from "react";
import { BiPaperPlane } from "react-icons/bi";
import Fade from "react-reveal/Fade";

function Contact({ contactRef }) {
  return (
    <section className="section flex-col" id="contact" ref={contactRef}>
      <div className="w-[70vw] md:w-[75vw] mx-auto pt-12">
        <Fade right duration={1000}>
          <div className="text-center items-center justify-center mx-auto mb-12">
            <h1 className="font-inter font-semibold dark:text-slate-300 text-5xl mb-4">
              Get In Touch?
            </h1>
            <p className="font-firacode text-md dark:text-slate-400 w-1/2 mx-auto">
              Have an idea or a concept that really excites you? <br />
              Let's turn that idea into reality.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-teal-400 inline-flex"></div>
            </div>
          </div>
        </Fade>
        <div className="flex space-x-4">
          <Fade left duration={2200}>
            <form className="flex flex-wrap -m-2 md:w-1/2 mx-auto">
              <div className="p-2 w-full md:w-1/2">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    className="w-full dark:bg-slate-900 bg-opacity-50 rounded-lg border dark:border-slate-300   text-base outline-none dark:text-slate-400 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full md:w-1/2">
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email address"
                    className="w-full dark:bg-slate-900 bg-opacity-50 rounded-lg border dark:border-slate-300   text-base outline-none dark:text-slate-400 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    className="w-full dark:bg-slate-900 bg-opacity-50 rounded-lg border dark:border-slate-300   text-base outline-none dark:text-slate-400 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 mx-auto">
                <button className="flex border items-center justify-center text-center space-x-4 font-light text-sm font-firacode  shadow-md dark:border-teal-400 dark:text-teal-400 px-4 py-3 rounded-full">
                  <BiPaperPlane className="w-5 h-5" />
                  <p>Send Message</p>
                </button>
              </div>
            </form>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default Contact;

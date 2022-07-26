import React, { useState, useRef } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiPaperPlane } from "react-icons/bi";
import Fade from "react-reveal/Fade";
import { sendContactForm } from "../services";
function Contact({ contactRef }) {
  const [message, setMessage] = useState("");
  const formRef = useRef();
  const submitContact = async (e) => {
    e.preventDefault();
    console.log(e);
    const res = await sendContactForm({
      name: e.target[0].value,
      email: e.target[1].value,
      comment: e.target[2].value,
    });
    if (res == 0) {
      setMessage("Thank you for your valuable comment!");
      // formRef.current.reset();
      document.getElementById("contact-form").reset();
    } else {
      setMessage("Something went wrong! Please try again");
    }
  };

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
        <div className="flex flex-col space-y-5 space-x-4 items-center">
          {message && (
            <div className="flex justify-center border p-4 rounded-lg">
              {message}
              <span
                onClick={() => setMessage("")}
                className="ml-4 items-center justify-center cursor-pointer"
              >
                <AiFillCloseCircle className="w-5 h-5 text-teal-400"></AiFillCloseCircle>
              </span>
            </div>
          )}
          <Fade left duration={2200}>
            <form
              id="contact-form"
              ref={formRef}
              onSubmit={submitContact}
              className="flex flex-wrap -m-2 md:w-1/2 mx-auto"
            >
              <div className="p-2 w-full md:w-1/2">
                <div className="relative">
                  <input
                    required
                    placeholder="Name*"
                    type={"text"}
                    minLength={3}
                    maxLength={25}
                    id="name"
                    name="name"
                    className="w-full dark:bg-slate-900 bg-opacity-50 rounded-lg border dark:border-slate-300   text-base outline-none dark:text-slate-400 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full md:w-1/2">
                <div className="relative">
                  <input
                    required
                    placeholder="Email Address*"
                    type={"email"}
                    id="email"
                    name="email"
                    className="w-full dark:bg-slate-900 bg-opacity-50 rounded-lg border dark:border-slate-300   text-base outline-none dark:text-slate-400 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <textarea
                    required
                    placeholder="Message"
                    id="message"
                    name="message"
                    className="w-full dark:bg-slate-900 bg-opacity-50 rounded-lg border dark:border-slate-300   text-base outline-none dark:text-slate-400 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 mx-auto">
                <button
                  type="submit"
                  className="flex border items-center justify-center text-center space-x-4 font-light text-sm font-firacode  shadow-md dark:border-teal-400 dark:text-teal-400 px-4 py-3 rounded-full"
                >
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

import React, { useState, useRef } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiPaperPlane } from "react-icons/bi";
import { sendContactForm } from "../services";
import { IContact } from "../types/typings";
import { motion } from "framer-motion";

interface Props {
  contact: IContact;
  /* eslint-disable */
  contactRef: any;
}

export default function Contact({ contact, contactRef }: Props) {
  const [message, setMessage] = useState("");
  const formRef = useRef(null);

  const submitContact = async (e: any) => {
    e.preventDefault();
    console.log(e);
    const res = await sendContactForm({
      name: e.target[0].value,
      email: e.target[1].value,
      subject: e.target[2].value,
      comment: e.target[3].value,
    });
    if (res === 0) {
      setMessage("Thank you for your valuable comment!");
      // formRef.current?.reset();
      // document.getElementById("contact-form").reset();
      const resetButton = () => {
        (document.getElementById("contact-form") as HTMLFormElement).reset();
      };
      resetButton();
    } else {
      setMessage("Something went wrong! Please try again later...");
    }
  };

  return (
    <section className="section" id="contact" ref={contactRef}>
      <div className="w-[70vw] md:w-[75vw] mx-auto pt-12">
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
          className="text-center items-center justify-center mx-auto mb-12"
        >
          <h1 className="font-inter font-semibold dark:text-slate-300 text-5xl mb-4">
            {contact.title}
          </h1>
          <p className="font-firacode text-md dark:text-slate-400 w-1/2 mx-auto">
            {contact.description}
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-teal-400 inline-flex"></div>
          </div>
        </motion.div>

        <div className="flex flex-col space-y-5 space-x-4 items-center">
          {message.length > 0 && (
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

          <motion.form
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
            id="contact-form"
            ref={formRef}
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onSubmit={submitContact}
            className="flex flex-wrap -m-2 md:w-1/2 mx-auto"
          >
            <div className="p-2 w-full md:w-1/2">
              <div className="relative">
                <input
                  required
                  placeholder={contact.namePlaceholder}
                  type={"text"}
                  minLength={3}
                  maxLength={25}
                  id="name"
                  name="name"
                  className="w-full bg-teal-50 dark:bg-slate-900 bg-opacity-50 rounded-lg border text-base outline-none dark:text-slate-400 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out hover:border-teal-400 focus-visible:border-teal-400"
                />
              </div>
            </div>
            <div className="p-2 w-full md:w-1/2">
              <div className="relative">
                <input
                  required
                  placeholder={contact.emailPlaceholder}
                  type={"email"}
                  id="email"
                  name="email"
                  className="w-full bg-teal-50 dark:bg-slate-900 bg-opacity-50 rounded-lg border text-base outline-none dark:text-slate-400 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out hover:border-teal-400 focus-visible:border-teal-400"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <input
                  required
                  placeholder={contact.subjectPlaceholder}
                  type={"text"}
                  id="subject"
                  name="subject"
                  className="w-full bg-teal-50 dark:bg-slate-900 bg-opacity-50 rounded-lg border text-base outline-none dark:text-slate-400 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out hover:border-teal-400 focus-visible:border-teal-400"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <textarea
                  required
                  placeholder={contact.messagePlaceholder}
                  id="message"
                  name="message"
                  className="w-full bg-teal-50 dark:bg-slate-900 bg-opacity-50 rounded-lg border text-base outline-none dark:text-slate-400 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out hover:border-teal-400 focus-visible:border-teal-400"
                ></textarea>
              </div>
            </div>
            <div className="p-2 mx-auto">
              <button
                type="submit"
                className="flex border items-center justify-center text-center space-x-4 font-light text-sm font-firacode  shadow-md dark:border-teal-400 dark:text-teal-400 hover:border-teal-400 dark:hover:bg-slate-600 px-4 py-3 rounded-full"
              >
                <BiPaperPlane className="w-5 h-5" />
                <p>Send Message</p>
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

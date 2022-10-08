import Link from "next/link";
import React from "react";
import { useTheme } from "next-themes";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail, BiBook } from "react-icons/bi";
import { AiOutlineHome, AiOutlineUser, AiOutlineMessage } from "react-icons/ai";
import { MdOutlineMiscellaneousServices, MdWorkOutline } from "react-icons/md";
import { motion } from "framer-motion";

interface Props {
  /* eslint-disable */
  scrollTo: any;
  heroRef: any;
  aboutRef: any;
  skillsRef: any;
  experienceRef: any;
  educationRef: any;
  portfolioRef: any;
  testimonialsRef: any;
  contactRef: any;
  heroIsVisible: boolean;
  aboutIsVisible: boolean;
  skillsIsVisible: boolean;
  experienceIsVisible: boolean;
  educationIsVisible: boolean;
  portfolioIsVisible: boolean;
  testimonialsIsVisible: boolean;
  contactIsVisible: boolean;
  footerIsVisible: boolean;
}

function Nav({
  scrollTo,
  heroIsVisible,
  aboutIsVisible,
  skillsIsVisible,
  experienceIsVisible,
  educationIsVisible,
  portfolioIsVisible,
  testimonialsIsVisible,
  contactIsVisible,
  footerIsVisible,
  heroRef,
  aboutRef,
  skillsRef,
  experienceRef,
  educationRef,
  portfolioRef,
  testimonialsRef,
  contactRef,
}: Props) {
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <BsFillSunFill
          className="h-6 w-6 cursor-pointer"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <BsFillMoonStarsFill
          className="h-5 w-5 cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <nav className="fixed bottom-4  z-30 shadow-xl bg-slate-300 dark:bg-slate-600 px-5 py-3 rounded-full opacity-50 hover:opacity-100 transition ease-in duration-100">
      <motion.div
        initial={{
          y: -300,
          opacity: 0,
        }}
        transition={{
          duration: 3,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: false }}
        className="flex space-x-4 "
      >
        <Link href="#hero">
          <a>
            <AiOutlineHome
              className={` ${
                heroIsVisible === true && aboutIsVisible === false
                  ? "selected"
                  : ""
              } 
               w-6 h-6 cursor-pointer`}
              onClick={() => {
                scrollTo(heroRef?.current);
              }}
            />
          </a>
        </Link>
        <Link href="#about">
          <a>
            <AiOutlineUser
              className={`${
                (heroIsVisible === true &&
                  aboutIsVisible === true &&
                  skillsIsVisible === false) ||
                (heroIsVisible === false &&
                  aboutIsVisible === true &&
                  skillsIsVisible === false)
                  ? "selected"
                  : ""
              } 
                w-6 h-6 cursor-pointer`}
              onClick={() => {
                scrollTo(aboutRef?.current);
              }}
            />
          </a>
        </Link>

        <Link href="#skills">
          <a>
            <MdOutlineMiscellaneousServices
              className={` ${
                (aboutIsVisible === true &&
                  skillsIsVisible === true &&
                  experienceIsVisible === false) ||
                (aboutIsVisible === false &&
                  skillsIsVisible === true &&
                  experienceIsVisible === false)
                  ? "selected"
                  : ""
              }  w-6 h-6 cursor-pointer`}
              onClick={() => {
                scrollTo(skillsRef?.current);
              }}
            />
          </a>
        </Link>

        <Link href="#experience">
          <a>
            <MdWorkOutline
              className={` ${
                (skillsIsVisible === true &&
                  experienceIsVisible === true &&
                  educationIsVisible === false) ||
                (skillsIsVisible === false &&
                  experienceIsVisible === true &&
                  educationIsVisible === false)
                  ? "selected"
                  : ""
              }  w-6 h-6 cursor-pointer`}
              onClick={() => {
                scrollTo(experienceRef?.current);
              }}
            />
          </a>
        </Link>
        <Link href="#education">
          <a>
            <BiBook
              className={` ${
                (experienceIsVisible === true &&
                  educationIsVisible === true &&
                  portfolioIsVisible === false) ||
                (experienceIsVisible === false &&
                  educationIsVisible === true &&
                  portfolioIsVisible === false)
                  ? "selected"
                  : ""
              }  w-6 h-6 cursor-pointer`}
              onClick={() => {
                scrollTo(educationRef?.current);
              }}
            />
          </a>
        </Link>
        <Link href="#portfolio">
          <a>
            <RiServiceLine
              className={` ${
                (educationIsVisible === true &&
                  portfolioIsVisible === true &&
                  testimonialsIsVisible === false) ||
                (educationIsVisible === false &&
                  portfolioIsVisible === true &&
                  testimonialsIsVisible === false)
                  ? "selected"
                  : ""
              } w-6 h-6 cursor-pointer`}
              onClick={() => {
                scrollTo(portfolioRef?.current);
              }}
            />
          </a>
        </Link>
        <Link href="#testimonials">
          <a>
            <BiMessageSquareDetail
              className={` ${
                (portfolioIsVisible === true &&
                  testimonialsIsVisible === true &&
                  contactIsVisible === false) ||
                (portfolioIsVisible === false &&
                  testimonialsIsVisible === true &&
                  contactIsVisible === false)
                  ? "selected"
                  : ""
              }  w-6 h-6 cursor-pointer`}
              onClick={() => {
                scrollTo(testimonialsRef?.current);
              }}
            />
          </a>
        </Link>
        <Link href="#contact">
          <a>
            <AiOutlineMessage
              className={` ${
                (testimonialsIsVisible === true &&
                  contactIsVisible === true &&
                  footerIsVisible === false) ||
                (testimonialsIsVisible === false &&
                  contactIsVisible === true &&
                  footerIsVisible === false) ||
                (testimonialsIsVisible === false &&
                  contactIsVisible === true &&
                  footerIsVisible === true)
                  ? "selected"
                  : ""
              } w-6 h-6 cursor-pointer`}
              onClick={() => {
                scrollTo(contactRef?.current);
              }}
            />
          </a>
        </Link>
        {renderThemeChanger()}
      </motion.div>
    </nav>
  );
}

export default Nav;

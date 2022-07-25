import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { AiOutlineHome, AiOutlineUser, AiOutlineMessage } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
function Nav({
  clickedNav,
  setClickedNav,
  visibleSection,
  selected,
  hero,
  about,
  experience,
  portfolio,
  testimonials,
  contact,
  heroRef,
  aboutRef,
  experienceRef,
  portfolioRef,
  testimonialsRef,
  contactRef,
}) {
  const { systemTheme, theme, setTheme } = useTheme();

  // To fix hydration UI mismatch issues, we need to wait until the component has mounted.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  //   useEffect(() => {
  //     setMounted(true);
  //   }, []);
  //   if (!mounted) return null;

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <BsFillSunFill className="h-6 w-6" onClick={() => setTheme("light")} />
      );
    } else {
      return (
        <BsFillMoonStarsFill
          className="h-6 w-6 cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <nav className="fixed bottom-8 z-30 shadow-xl bg-slate-300 dark:bg-slate-600 px-5 py-3 rounded-full opacity-30 hover:opacity-100 transition ease-in duration-100">
      <div className="flex space-x-4 ">
        <Link href="#hero">
          <a>
            <AiOutlineHome
              className={` ${visibleSection === hero && "selected"} 
               w-6 h-6 cursor-pointer`}
              onClick={() => {
                setClickedNav("hero");
                scrollTo(heroRef.current);
              }}
            />
          </a>
        </Link>
        <Link href="#about">
          <a>
            <AiOutlineUser
              className={`${visibleSection === about && "selected"} 
                w-6 h-6 cursor-pointer`}
              onClick={() => {
                setClickedNav("about");
                scrollTo(aboutRef.current);
              }}
            />
          </a>
        </Link>

        <Link href="#experience">
          <a>
            <MdWorkOutline
              className={` ${
                visibleSection === experience && "selected"
              }  w-6 h-6 cursor-pointer`}
              onClick={() => {
                setClickedNav("experience");
                scrollTo(experienceRef.current);
              }}
            />
          </a>
        </Link>
        <a href="#portfolio">
          <RiServiceLine
            className={` ${
              visibleSection === portfolio && "selected"
            } w-6 h-6 cursor-pointer`}
            onClick={() => {
              setClickedNav("portfolio");
              scrollTo(portfolioRef.current);
            }}
          />
        </a>
        <Link href="#testimonials">
          <a>
            <BiMessageSquareDetail
              className={` ${
                visibleSection === testimonials && selected
              }  w-6 h-6 cursor-pointer`}
              onClick={() => {
                setClickedNav("testimonials");
                scrollTo(testimonialsRef.current);
              }}
            />
          </a>
        </Link>
        <Link href="#contact">
          <a>
            <AiOutlineMessage
              className={` ${
                visibleSection === contact && "selected"
              } w-6 h-6 cursor-pointer`}
              onClick={() => {
                setClickedNav("contact");
                scrollTo(contactRef.current);
              }}
            />
          </a>
        </Link>
        {renderThemeChanger()}
      </div>
    </nav>
  );
}

export default Nav;

export async function getStaticProps(context) {}

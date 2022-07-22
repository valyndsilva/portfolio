import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { MdOutlineWork } from "react-icons/md";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
function Nav() {
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
        <BsFillSunFill className="h-5 w-5" onClick={() => setTheme("light")} />
      );
    } else {
      return (
        <BsFillMoonStarsFill
          className="h-5 w-5"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <nav className="fixed bottom-8 z-20 shadow-xl bg-slate-300 dark:bg-slate-600 px-5 py-3 rounded-full opacity-30 hover:opacity-100">
      <div className="flex space-x-4 ">
        <Link href="#">
          <AiOutlineHome className="w-5 h-5 cursor-pointer" />
        </Link>
        <Link href="#about">
          <AiOutlineUser className="w-5 h-5 cursor-pointer" />
        </Link>
        <Link href="#experience">
          <MdOutlineWork className="w-5 h-5 cursor-pointer" />
        </Link>
        <Link href="#portfolio">
          <RiServiceLine className="w-5 h-5 cursor-pointer" />
        </Link>
        <Link href="#contact">
          <BiMessageSquareDetail className="w-5 h-5 cursor-pointer" />
        </Link>
        {renderThemeChanger()}
      </div>
    </nav>
  );
}

export default Nav;

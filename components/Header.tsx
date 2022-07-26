import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import Logo from "./Logo";
// import CV from "../assets/CV.pdf";

const Header = () => {
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
    <header className="h-16  p-5  shadow-md dark:bg-slate-900 flex items-center justify-between">
      <Logo />
      {/* <ul className="flex gap-4">
        {navigations.map((nav, index) => (
          <Link key={index} href={nav.path}>
            <a className="font-semibold text-gray-400 hover:text-gray-500">
              {nav.label}
            </a>
          </Link>
        ))}
      </ul> */}
      {/* <a href={CV} download>Resume</a> */}
      {renderThemeChanger()}
    </header>
  );
};

export default Header;

import Link from "next/link";
import React from "react";
import Social from "./Social";
import { Fade } from "react-awesome-reveal";
function SideNav() {
  return (
    <nav className="fixed bottom-0  mb-4 z-10">
      <Fade direction="up" duration={3200}>
      <div className="flex w-[90vw] items-center justify-between">
        <Social />
        <div className="verticalLine verticalMode flex tracking-widest after:bg-black dark:text-slate-400 after:dark:bg-slate-400">
          <Link href="#">
            <span className="cursor-pointer hover:dark:text-teal-400 hover:-translate-y-0.5 transition duration-100 ease-in;">
              hello@valynsilva.com
            </span>
          </Link>
        </div>
      </div>
      </Fade>
    </nav>
  );
}

export default SideNav;

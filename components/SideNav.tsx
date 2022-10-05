import Link from "next/link";
import React from "react";
import Social from "./Social";
import { motion } from "framer-motion";

function SideNav() {
  return (
    <nav className="fixed bottom-0  mb-4">
      <motion.div
        initial={{
          y: -300,
          opacity: 0,
        }}
        transition={{
          duration: 3.2,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: false }}
        className="flex w-[90vw] items-center justify-between"
      >
        <Social />
        <div className="verticalLine verticalMode flex tracking-widest after:bg-black dark:text-slate-400 after:dark:bg-slate-400">
          <Link href="#">
            <span className="cursor-pointer hover:dark:text-teal-400 hover:-translate-y-0.5 transition duration-100 ease-in;">
              hello@valynsilva.com
            </span>
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}

export default SideNav;

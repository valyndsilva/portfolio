import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-slate-300 dark:border-slate-700 rounded-full h-[350px] w-[350px] md:h-[400px] md:w-[400px] mt-40  animate-[ping_1s_ease-in-out_infinite]" />
      <div className="absolute border  border-slate-300 dark:border-slate-700 rounded-full h-[350px] w-[350px] md:h-[400px] md:w-[400px] mt-40" />
      <div className="absolute border  border-slate-300 dark:border-slate-700 rounded-full h-[415px] w-[415px] md:h-[600px] md:w-[600px] mt-40" />

      <div className="absolute border  border-teal-500 dark:border-teal-400 rounded-full h-[475px] w-[475px] md:h-[750px] md:w-[750px] mt-40 animate-pulse opacity-20" />
      <div />
    </motion.div>
  );
}

import React from "react";
import { IHero } from "../types/typings";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
interface Props {
  hero: IHero;
  heroRef: any;
}

export default function Hero({ hero, heroRef }: Props) {
  // console.log(hero);
  const [text] = useTypewriter({
    words: [hero.jobTitle[0], hero.jobTitle[1], hero.jobTitle[2]],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section className="section" id="hero" ref={heroRef}>
      <BackgroundCircles />
      <motion.h1
        initial={{
          x: -500,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 2,
        }}
        className="text-6xl md:text-7xl font-bold"
      >
        <span className="dark:text-teal-400 font-satisfy">{hero.name}</span>
      </motion.h1>

      <motion.h3
        initial={{
          x: -500,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 2.2,
        }}
        className="text-2xl my-3 dark:text-slate-400 font-firacode"
      >
        {text}
        <Cursor cursorColor="teal" />
      </motion.h3>
    </section>
  );
}

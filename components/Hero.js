import React from "react";
import { Fade } from "react-awesome-reveal";
function Hero({ heroInfo, heroRef }) {
  console.log(heroInfo);
  return (
    <section className="section flex-col" id="hero" ref={heroRef}>
      <Fade direction="left" duration={1000}>
        <h1 className="text-7xl font-bold">
          <span className="dark:text-teal-400 font-satisfy">
            {heroInfo[0].name}
          </span>
        </h1>
      </Fade>
      <Fade direction="left" duration={2200}>
        <h3 className="text-2xl my-3 dark:text-slate-400 font-firacode">
          {heroInfo[0].jobTitle}
        </h3>
      </Fade>
    </section>
  );
}

export default Hero;

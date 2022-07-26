import React from "react";
import Fade from "react-reveal/Fade";
function Hero({ heroRef }) {
  return (
    <section className="section flex-col" id="hero" ref={heroRef}>
      <Fade duration={1000}>
        <h1 className="text-7xl font-bold">
          <span className="dark:text-teal-400 font-satisfy">Valyn Silva</span>
        </h1>
      </Fade>
      <Fade left duration={2200}>
        <h3 className="text-2xl my-3 dark:text-slate-400 font-firacode">
          UI/UX Designer | Front-End Developer
        </h3>
      </Fade>
    </section>
  );
}

export default Hero;

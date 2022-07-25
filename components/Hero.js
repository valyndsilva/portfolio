import React from "react";

function Hero({ heroRef }) {
  return (
    <section className="section flex flex-col" id="hero" ref={heroRef}>
      <h1 className="text-7xl font-bold">
        <span className="dark:text-teal-400 font-satisfy">Valyn Silva</span>
      </h1>
      <h3 className="text-2xl my-3 dark:text-slate-400 font-firacode">
        UI/UX Designer | Front-End Developer
      </h3>
    </section>
  );
}

export default Hero;

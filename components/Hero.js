import Fade from "react-reveal/Fade";

const Hero = () => {
  return (
    <Fade bottom duration={2800}>
      <section className="flex flex-col min-h-screen justify-center">
        <h1 className="text-7xl font-bold">
          <span className="dark:text-teal-400 font-satisfy">Valyn Silva</span>
        </h1>
        <h3 className="text-2xl my-3 dark:text-slate-400 font-firacode">
          UI/UX Designer | Front-End Developer
        </h3>
      </section>
    </Fade>
  );
};

export default Hero;

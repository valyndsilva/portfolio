import ToggleButton from "../components/ToggleButton";

const Hero = () => {
  return (
    <section className="mt-16">
      <h1 className="text-7xl font-bold">
        Hi I'm <span className="dark:text-purple-600">Valyn</span>
      </h1>
      <h3 className="text-4xl my-3">I am Web Designer</h3>
      <p className="text-gray-700 mb-8">UI/UX Designer & Front-End Developer</p>
      <ToggleButton className="bg-purple-600 text-white px-6">
        Hire Me!
      </ToggleButton>
    </section>
  );
};

export default Hero;

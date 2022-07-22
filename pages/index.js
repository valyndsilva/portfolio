import {
  About,
  Contact,
  Experience,
  Hero,
  Nav,
  Portfolio,
  Services,
  SideNav,
  Testimonials,
} from "../components";
const Home = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center py-2 px-20 text-center bg-teal-50 dark:bg-slate-900">
      <Hero />
      <SideNav />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;

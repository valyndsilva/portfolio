import { useEffect, useRef, useState } from "react";
import {
  Hero,
  About,
  Services,
  Experience,
  Portfolio,
  Testimonials,
  Contact,
  Nav,
  SideNav,
} from "../components";

const getDimensions = (ele) => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const scrollTo = (ele) => {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const Home = () => {
  const [visibleSection, setVisibleSection] = useState();
  const [clickedNav, setClickedNav] = useState();

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = [
    { section: "hero", ref: heroRef },
    { section: "about", ref: aboutRef },
    { section: "experience", ref: experienceRef },
    { section: "services", ref: servicesRef },
    { section: "portfolio", ref: portfolioRef },
    { section: "testimonials", ref: testimonialsRef },
    { section: "contact", ref: contactRef },
  ];

  const handleScroll = () => {
    const { height: headerHeight } = getDimensions(heroRef.current);
    const scrollPosition = window.scrollY + headerHeight;

    const selected = sectionRefs.find(({ section, ref }) => {
      const ele = ref.current;

      if (ele) {
        const { offsetBottom, offsetTop } = getDimensions(ele);
        return scrollPosition > offsetTop && scrollPosition < offsetBottom;
      }
    });

    if (
      (selected && selected.section !== visibleSection) ||
      (selected && selected.section === visibleSection)
    ) {
      // console.log(selected.section);
      setVisibleSection(selected.section);
    } else if (
      (clickedNav && clickedNav !== visibleSection) ||
      (clickedNav && clickedNav === visibleSection)
    ) {
      // console.log(clickedNav);
      setVisibleSection(clickedNav);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection, clickedNav]);
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center py-2 px-20 text-center bg-teal-50 dark:bg-slate-900">
      <Hero heroRef={heroRef} />
      <SideNav />
      <Nav
        clickedNav={clickedNav}
        setClickedNav={setClickedNav}
        scrollTo={scrollTo}
        visibleSection={visibleSection}
        hero="hero"
        about="about"
        experience="experience"
        services="services"
        portfolio="portfolio"
        testimonials="testimonials"
        contact="contact"
        selected="selected"
        heroRef={heroRef}
        aboutRef={aboutRef}
        experienceRef={experienceRef}
        servicesRef={servicesRef}
        portfolioRef={portfolioRef}
        testimonialsRef={testimonialsRef}
        contactRef={contactRef}
      />
      <About aboutRef={aboutRef} />
      <Services servicesRef={servicesRef} />
      <Experience experienceRef={experienceRef} />
      <Portfolio portfolioRef={portfolioRef} />
      <Testimonials testimonialsRef={testimonialsRef} />
      <Contact contactRef={contactRef} />
    </div>
  );
};

export default Home;

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
  Footer,
  Education,
} from "../components";
import { sanityClient } from "../lib/sanity.server";
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

const Home = ({ testimonialsInfo, portfolioInfo }) => {
  console.log(testimonialsInfo);
  console.log(portfolioInfo);
  const [visibleSection, setVisibleSection] = useState();
  const [clickedNav, setClickedNav] = useState();

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const portfolioRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = [
    { section: "hero", ref: heroRef },
    { section: "about", ref: aboutRef },
    { section: "services", ref: servicesRef },
    { section: "experience", ref: experienceRef },
    { section: "education", ref: educationRef },
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
    <div className="flex flex-col w-full items-center justify-center px-20 text-center bg-teal-50 dark:bg-slate-900">
      <SideNav />
      <Nav
        clickedNav={clickedNav}
        setClickedNav={setClickedNav}
        scrollTo={scrollTo}
        visibleSection={visibleSection}
        hero="hero"
        about="about"
        education="education"
        experience="experience"
        services="services"
        portfolio="portfolio"
        testimonials="testimonials"
        contact="contact"
        selected="selected"
        heroRef={heroRef}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        experienceRef={experienceRef}
        educationRef={educationRef}
        portfolioRef={portfolioRef}
        testimonialsRef={testimonialsRef}
        contactRef={contactRef}
      />

      <Hero heroRef={heroRef} />

      <About aboutRef={aboutRef} />

      <Services servicesRef={servicesRef} />

      <Experience experienceRef={experienceRef} />

      <Education educationRef={educationRef} />

      <Portfolio portfolioInfo={portfolioInfo} portfolioRef={portfolioRef} />

      <Testimonials
        testimonialsInfo={testimonialsInfo}
        testimonialsRef={testimonialsRef}
      />

      <Contact contactRef={contactRef} />

      <Footer />
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  //This is where the Server pre-builds the pages and changes the homepage route to SSR route
  const testimonialsQuery = `*[_type == "testimonials"]{
    description,
   name,
 company,
  }`;
  console.log(testimonialsQuery);

  const testimonialsInfo = await sanityClient.fetch(testimonialsQuery); // Fetch Posts from Sanity
  console.log(testimonialsInfo);

  const portfolioQuery = `*[_type == "portfolio"]{
    title,
    description,
    imgUrl,
   skill1,
   skill2,
   skill3,
   skill4,
   skill5,
   skill7,
   skill8,
   skill8,
 demoLink,
 githubLink,

  }`;
  console.log(portfolioQuery);

  const portfolioInfo = await sanityClient.fetch(portfolioQuery);
  return {
    // props:{} will be passed to the page component as props
    props: {
      testimonialsInfo,
      portfolioInfo,
    },
  };
};

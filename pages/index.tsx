import React from "react";
import type { GetStaticProps } from "next";
import {
  Hero,
  About,
  Skills,
  Experience,
  Education,
  Portfolio,
  Testimonials,
  Contact,
  Nav,
  SideNav,
  Footer,
} from "../components";
import {
  IHero,
  IAbout,
  ISkills,
  IExperience,
  IEducation,
  IPortfolio,
  ITestimonials,
  IContact,
} from "../types/typings";

import {
  fetchHero,
  fetchAbout,
  fetchSkills,
  fetchExperience,
  fetchEducation,
  fetchPortfolio,
  fetchTestimonials,
  fetchContact,
} from "../utils";

import { useInView } from "react-intersection-observer";

interface Props {
  hero: IHero;
  about: IAbout;
  skills: ISkills;
  experience: IExperience;
  education: IEducation;
  portfolio: IPortfolio;
  testimonials: ITestimonials;
  contact: IContact;
}

function Home({
  hero,
  about,
  skills,
  experience,
  education,
  portfolio,
  testimonials,
  contact,
}: Props) {
  // console.log({ hero });
  // console.log({ about });
  // console.log({ skills });
  // console.log({ education });
  // console.log({ testimonials });
  // console.log({ portfolio });
  // console.log({ experience });
  // console.log({ contact });

  // https://www.codedaily.io/tutorials/Sticky-Header-with-Highlighting-Sections-on-Scroll

  // Click To Scroll
  const scrollTo = (ref: {
    scrollIntoView: (arg0: { behavior: string; block: string }) => void;
  }) => {
    ref?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // https://spacejelly.dev/posts/how-to-trigger-a-function-when-scrolling-to-an-element-in-react-intersection-observer/

  const { ref: heroRef, inView: heroIsVisible } = useInView({ threshold: 0 });
  console.log("hero", heroIsVisible);

  const { ref: aboutRef, inView: aboutIsVisible } = useInView({ threshold: 0 });
  console.log("about", aboutIsVisible);

  const { ref: skillsRef, inView: skillsIsVisible } = useInView({
    threshold: 0,
  });
  console.log("skills", skillsIsVisible);

  const { ref: experienceRef, inView: experienceIsVisible } = useInView({
    threshold: 0,
  });
  console.log("experience", experienceIsVisible);

  const { ref: educationRef, inView: educationIsVisible } = useInView({
    threshold: 0,
  });
  console.log("education", educationIsVisible);

  const { ref: portfolioRef, inView: portfolioIsVisible } = useInView({
    threshold: 0,
  });
  console.log("portfolio", portfolioIsVisible);

  const { ref: testimonialsRef, inView: testimonialsIsVisible } = useInView({
    threshold: 0,
  });
  console.log("testimonials", testimonialsIsVisible);

  const { ref: contactRef, inView: contactIsVisible } = useInView({
    threshold: 0,
  });
  console.log("contact", contactIsVisible);

  const { ref: footerRef, inView: footerIsVisible } = useInView({
    threshold: 0,
  });
  console.log("footer", footerIsVisible);

  return (
    <div className="flex flex-col w-full items-center justify-center px-20 text-center bg-teal-50 dark:bg-slate-900 snap-y snap-mandatory">
      <SideNav />
      <Nav
        scrollTo={scrollTo}
        heroIsVisible={heroIsVisible}
        aboutIsVisible={aboutIsVisible}
        skillsIsVisible={skillsIsVisible}
        experienceIsVisible={experienceIsVisible}
        educationIsVisible={educationIsVisible}
        portfolioIsVisible={portfolioIsVisible}
        testimonialsIsVisible={testimonialsIsVisible}
        contactIsVisible={contactIsVisible}
        footerIsVisible={footerIsVisible}
        heroRef={heroRef}
        aboutRef={aboutRef}
        educationRef={educationRef}
        experienceRef={experienceRef}
        skillsRef={skillsRef}
        portfolioRef={portfolioRef}
        testimonialsRef={testimonialsRef}
        contactRef={contactRef}
      />

      <Hero hero={hero} heroRef={heroRef} />
      <About about={about} aboutRef={aboutRef} />
      <Skills skills={skills} skillsRef={skillsRef} />
      <Experience experience={experience} experienceRef={experienceRef} />
      <Education education={education} educationRef={educationRef} />
      <Portfolio portfolio={portfolio} portfolioRef={portfolioRef} />
      <Testimonials
        testimonials={testimonials}
        testimonialsRef={testimonialsRef}
      />
      <Contact contact={contact} contactRef={contactRef} />
      <Footer footerRef={footerRef} />
    </div>
  );
}

export default Home;

// Incremental static regeneration
export const getStaticProps: GetStaticProps<Props> = async () => {
  const hero: IHero = await fetchHero();
  const about: IAbout = await fetchAbout();
  const skills: ISkills = await fetchSkills();
  const experience: IExperience = await fetchExperience();
  const education: IEducation = await fetchEducation();
  const portfolio: IPortfolio = await fetchPortfolio();
  const testimonials: ITestimonials = await fetchTestimonials();
  const contact: IContact = await fetchContact();

  return {
    props: {
      hero,
      about,
      skills,
      experience,
      education,
      portfolio,
      testimonials,
      contact,
    },
    // NextJS attempts to revalidate the page when a request comes in every 10 seconds
    revalidate: 60,
  };
};

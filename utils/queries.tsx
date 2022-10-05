import { groq } from "next-sanity";

export const heroQuery = () => {
  // const query = groq`*[_type == "hero"]{
  //       name,
  //       jobTitle
  //     }`;
  const query = groq`*[_type == "hero"][0]`;

  return query;
};

export const aboutQuery = () => {
  const query = groq`*[_type == "about"][0]`;

  return query;
};

export const skillsQuery = () => {
  const query = groq`*[_type == "skills"][0]{
        ...,
        technologies[]->,
      }`;

  return query;
};

export const experienceQuery = () => {
  const query = groq`*[_type == "experience"][0]{
    ...,
    companyList[]->,
  }`;

  return query;
};

export const educationQuery = () => {
  const query = groq`*[_type == "education"][0]{
        ...,
        courseList[]->,
      }`;

  return query;
};

export const portfolioQuery = () => {
  const query = groq`*[_type == "portfolio"][0]{
    ...,
    projectList[]->,
    }`;

  return query;
};

export const testimonialsQuery = () => {
  const query = groq`*[_type == "testimonials"][0]{
        ...,
        testimonialList[]->,
      }`;

  return query;
};

export const contactQuery = () => {
  const query = groq`*[_type == "contact"][0]`;

  return query;
};

// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import hero from "./hero";
import about from "./about";
import technology from "./technology";
import skills from "./skills";
import company from "./company";
import experience from "./experience";
import course from "./course";
import education from "./education";
import project from "./project";
import portfolio from "./portfolio";
import testimonial from "./testimonial";
import testimonials from "./testimonials";
import contact from "./contact";


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    hero,
    about,
    technology,
    skills,
    company,
    experience,
    course,
    education,
    portfolio,
    project,
    testimonials,
    testimonial,
    contact,
  ]),
});

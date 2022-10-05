export default {
  name: "testimonials",
  title: "Testimonials",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "testimonialList",
      title: "Testimonial List",
      type: "array",
      of: [{ type: "reference", to: [{ type: "testimonial" }] }],
    },
  ],
};

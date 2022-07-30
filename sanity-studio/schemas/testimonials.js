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
      name: "testimonial",
      title: "Testimonial",
      type: "array",
      of: [{ type: "testimonial" }],
    },
  ],
};

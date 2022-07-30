export default {
  name: "experiences",
  title: "Experiences",
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
      name: "experience",
      title: "Experience",
      type: "array",
      of: [{ type: "experience" }],
    },
  ],
};

export default {
  name: "education",
  title: "Education",
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
      name: "course",
      title: "Course",
      type: "array",
      of: [{ type: "course" }],
    },
  ],
};

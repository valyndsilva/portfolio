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
      name: "courseList",
      title: "Course List",
      type: "array",
      of: [{ type:"reference", to:[{type: "course"}] }],
    },
  ],
};

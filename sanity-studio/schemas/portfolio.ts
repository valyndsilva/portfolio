export default {
  name: "portfolio",
  title: "Portfolio",
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
      name: "projectList",
      title: "Project List",
      type: "array",
      of: [{ type: "reference", to: [{ type: "project" }] }],
    },
  ],
};

export default {
  name: "experience",
  title: "Experience",
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
      name: "companyList",
      title: "Company List",
      type: "array",
      of: [{ type: "reference", to: [{ type: "company" }] }],
    },
  ],
};

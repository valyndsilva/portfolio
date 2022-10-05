export default {
  name: "hero",
  title: "Hero",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "jobTitle",
      title: "Job Title",
      description: "Add a maximum of 3 job titles",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};

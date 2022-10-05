export default {
  name: "company",
  title: "Company",
  type: "document",
  fields: [
    {
      name: "jobId",
      title: "Job ID",
      type: "number",
    },
    {
      name: "jobTitle",
      title: "Job Title",
      type: "string",
    },

    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "date",
    },
    {
      name: "endDate",
      title: "End Date",
      type: "date",
    },
    {
      name: "isCurrentlyWorkingHere",
      title: "Currently Working Here?",
      type: "boolean",
    },
    {
      name: "points",
      title: "Points",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};

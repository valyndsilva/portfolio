import BsCodeSlash from "react-icons/bs";

export default {
  name: "services",
  title: "Services",
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
      name: "service",
      title: "Service",
      type: "array",
      of: [{ type: "service" }],
    },
  ],
};

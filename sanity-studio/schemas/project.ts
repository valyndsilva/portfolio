export default {
  name: "project",
  title: "Project",
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
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "techStack",
      title: "Tech Stack Used",
      type: "array",
      of: [{ type: "reference", to: [{ type: "technology" }] }],
    },
    {
      name: "demoLink",
      title: "Demo Link",
      type: "string",
    },
    {
      name: "githubLink",
      title: "Github Link",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};

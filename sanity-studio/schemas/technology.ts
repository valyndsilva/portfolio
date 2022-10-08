export default {
  name: "technology",
  title: "Technology",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "proficiency",
      title: "Proficiency",
      type: "number",
      validation: (Rule: any) => Rule.min(0).max(100),
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

export default {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "intro",
      title: "Intro",
      type: "string",
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "phonetics",
      title: "Phonetics",
      type: "string",
    },

    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "skillsIntro",
      title: "Skills Intro",
      type: "string",
    },
    {
      name: "skillsList",
      title: "Skills List",
      type: "array",
      of: [{ type: "string" }],
    },

    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: "true",
      },
    },
  ],
};

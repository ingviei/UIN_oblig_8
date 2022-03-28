export default {
  type: "document",
  name: "actor",
  title: "Actor",
  fields: [
    {
      type: "string",
      name: "fullname",
      title: "Full name",
    },
    {
      type: "slug",
      name: "slug",
      title: "Slug",
      options: {
        source: "fullname",
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};

export default {
  type: "document",
  name: "movie",
  title: "Movie",
  fields: [
    { type: "string", name: "movie", title: "Title" },
    {
      type: "reference",
      name: "actor",
      title: "Actor",
      to: [{ type: "actor" }],
    },

    {
      type: "slug",
      name: "slug",
      title: "Slug",
      options: {
        source: "movie",
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "movie",
    },
  },
};

import perfectionist from "eslint-plugin-perfectionist";

export default [
  {
    plugins: {
      perfectionist,
    },
    rules: {
      "perfectionist/sort-imports": [
        "error",
        {
          type: "alphabetical",
          order: "asc",
        },
      ],
      "perfectionist/sort-named-imports": [
        "error",
        {
          type: "alphabetical",
          order: "asc",
        },
      ],
      "perfectionist/sort-objects": [
        "error",
        {
          type: "alphabetical",
          order: "asc",
        },
      ],
    },
  },
];

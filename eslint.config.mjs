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
          order: "asc",
          type: "alphabetical",
        },
      ],
      "perfectionist/sort-named-imports": [
        "error",
        {
          order: "asc",
          type: "alphabetical",
        },
      ],
      "perfectionist/sort-objects": [
        "error",
        {
          order: "asc",
          type: "alphabetical",
        },
      ],
    },
  },
];

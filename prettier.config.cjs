module.exports = {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        singleAttributePerLine: false,
        astroAllowShorthand: true,
        astroSortAttributes: "none",
      },
    },
  ],
  printWidth: 130
}

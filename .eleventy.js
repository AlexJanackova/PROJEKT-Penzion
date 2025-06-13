module.exports = function (eleventyConfig) {
  // Výchozí výstupní složka: _site (nebo dist, záleží na configu)

  // Zkopírovat složku images/ do výstupu
  eleventyConfig.addPassthroughCopy("images");

  // Zkopírovat složku css/ do výstupu
  eleventyConfig.addPassthroughCopy("css");

  return {
    // Povolené formáty šablon
    templateFormats: ["njk", "html", "md", "liquid"],

    // Šablonovací engine
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};

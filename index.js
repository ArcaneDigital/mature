const filter = require("./filter.js");
const page = require("page-content");
module.exports = {
  checkURL: async (url, options = {}) => {
    const data = await page.parseFromURL(url);
    if (!data) throw new Error("No valid HTML");
    return filter(data, options);
  },
  checkHTML: async (html, options = {}) => {
    const data = page.parseFromHTML(html);
    if (!data) throw new Error("No valid HTML");
    return filter(data, options);
  },
  checkText: async (text, options = {}) => {
    const data = {
      links: [],
      paragraphs: [
        text
          .replace(/[\u0021-\u002F;]/g, "")
          .replace(/[\u2000-\u27F0;]/g, "")
          .replace(/[\u0080-\u00BF;]/g, "")
          .toLowerCase()
      ],
      headers: { H1: [] }
    };
    if (!data) throw new Error("Text is required");
    return filter(data, options);
  }
};

const keyword_extractor = require("keyword-extractor");
var words = require("fs")
  .readFileSync(__dirname + "/words.txt")
  .toString()
  .split("\n");

var threshold = {
  unique: 4,
  percent: 0.05
};
module.exports = (data, options) => {
  if (options.threshold) threshold = options.threshold;
  if (options.filter) words = options.filter;
  const copy = data.links
    .map(link => link.text)
    .concat(data.paragraphs)
    .concat(data.headers.H1.join(" "))
    .join(" ");

  let text = copy.split(" ");

  if (options.removeStop)
    text = keyword_extractor.extract(copy, {
      language: "english",
      remove_digits: true,
      return_changed_case: true,
      remove_duplicates: false
    });

  const total = text.filter(word => {
    const bad = words.indexOf(word);
    if (bad != -1) {
      return word;
    }
  });

  const percent = total.length / text.length;
  const unique = [...new Set(total)];

  return {
    mature:
      unique.length > threshold.unique || percent > threshold.percent
        ? true
        : false,
    total: total.length,
    unique: unique.length,
    percent: percent ? percent.toFixed(5) : null
  };
};

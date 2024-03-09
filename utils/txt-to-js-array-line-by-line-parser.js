const TXTtoJSArrayLineByLineParser = (txt) => {
  console.log(txt);
  const lines = txt.split("\n");
  const array = lines.map((line) => {
    return line.trim();
  });
  return array;
};

module.exports = TXTtoJSArrayLineByLineParser;

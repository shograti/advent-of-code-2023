const fs = require("fs").promises;
const path = require("path");
const TXTtoJSArrayLineByLineParser = require("../utils/txt-to-js-array-line-by-line-parser.js");

const numbersInString = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

async function createCalibrationDocumentArray() {
  const inputPath = path.join(__dirname, "./input.txt");
  const input = await fs.readFile(inputPath, "utf8");
  return TXTtoJSArrayLineByLineParser(input);
}

async function main() {
  let sumOfCalibrationValues = 0;
  const calibrationDocumentArray = await createCalibrationDocumentArray();
  await calibrationDocumentArray.map((line) => {
    const splittedLine = line.split("");
    const arrayOfNumbers = [];
    for (i = 0; i < splittedLine.length; i++) {
      if (numbersInString.includes(splittedLine[i])) {
        arrayOfNumbers.push(splittedLine[i]);
      }
    }
    if (arrayOfNumbers.length > 1) {
      sumOfCalibrationValues += Number(
        arrayOfNumbers[0] + arrayOfNumbers[arrayOfNumbers.length - 1],
      );
    } else {
      sumOfCalibrationValues += Number(arrayOfNumbers[0] + arrayOfNumbers[0] );
    }
  });
  console.log(sumOfCalibrationValues);
}

main();

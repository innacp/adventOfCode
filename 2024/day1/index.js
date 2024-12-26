import { readFile } from "../../utils/file.js";

async function main() {
  const lines = await readFile("./input.txt");
  const columns = [[], []]; // 1st element of splittedNumbers | 2nd

  for (let line of lines) {
    //80421   40193

    let splittedNumbers = line.split("   "); //zaminyty spacy

    columns[0].push(parseInt(splittedNumbers[0]));
    columns[1].push(parseInt(splittedNumbers[1]));
  }

  columns[0].sort((a, b) => a - b);
  columns[1].sort((a, b) => a - b);

  let totalDistance = 0;

  for (let index = 0; index < columns[0].length; index++) {
    totalDistance += Math.abs(columns[0][index] - columns[1][index]);
  }
}

main();

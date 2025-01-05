import { readFile } from "../../utils/file.js";

async function main() {
  const lines = await readFile("./input.txt");
  const columns = [[], []]; // 1st element of splittedNumbers | 2nd

  for (let line of lines) {
    let splittedNumbers = line.split(/\s+/);

    columns[0].push(parseInt(splittedNumbers[0]));
    columns[1].push(parseInt(splittedNumbers[1]));
  }

  columns[0].sort((a, b) => a - b);
  columns[1].sort((a, b) => a - b);

  let totalDistance = 0;

  for (let index = 0; index < columns[0].length; index++) {
    totalDistance += Math.abs(columns[0][index] - columns[1][index]);
  }

  const leftList = columns[0];
  const rightList = columns[1];

  function calculateSimilarityScore(leftList, rightList) {
    const countMap = new Map();

    rightList.forEach((num) => {
      countMap.set(num, (countMap.get(num) || 0) + 1);
    });

    console.log(countMap);

    let totalScore = 0;
    leftList.forEach((num) => {
      const count = countMap.get(num) || 0;
      totalScore += num * count;
    });

    return totalScore;
  }

  const similarityScore = calculateSimilarityScore(leftList, rightList);

  console.log(similarityScore);
}
main();

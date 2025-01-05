import { readFile } from "../../utils/file.js";

async function main() {
  const lines = await readFile("./input.txt");
  const columns = [[], []]; // 1st element of splittedNumbers | 2nd

  for (let line of lines) {
    //80421   40193

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

  // for (let index = 0; index < columns[0].length; index++) {
  //   if (columns[0][index] === columns[1][index]) {
  //     console.log(columns[1][index]);
  //   }
  // }

  // const countOccurrences = (arr1, arr2) => {
  //   const firstColumn = columns[0];
  //   const secondColumn = columns[1];
  //   const counts = arr1.reduce((acc, el) => {
  //     acc[el] = arr2.filter((item) => item === el).length;
  //     return acc;
  //   }, {});
  //   return counts;
  // };
  // console.log(countOccurrences(firstColumn, secondColumn));

  // const firstColumn = columns[0];
  // const secondColumn = columns[1];

  // const frequencyMap = secondColumn.reduce((acc, num) => {
  //   const key = Number(num);
  //   acc[key] = (acc[key] || 0) + 1;
  //   return acc;
  // }, {});
  // console.log("frequency map", frequencyMap);

  // const totalSimilarityScore =
  //   ((score, num) => {
  //     const count = frequencyMap[num] || 0;
  //     return score + num * count;
  //   },
  //   0);
  // console.log(totalSimilarityScore);

  const leftList = columns[0];
  const rightList = columns[1];

  function calculateSimilarityScore(leftList, rightList) {
    // Create a map to count occurrences in the right list
    const countMap = new Map();

    // Count occurrences of each number in the right list
    rightList.forEach((num) => {
      countMap.set(num, (countMap.get(num) || 0) + 1);
    });

    console.log(countMap);

    // Calculate the total similarity score
    let totalScore = 0;
    leftList.forEach((num) => {
      const count = countMap.get(num) || 0; // Get the count from the map
      totalScore += num * count; // Multiply and add to the total score
    });

    return totalScore;
  }

  // Example usage
  const similarityScore = calculateSimilarityScore(leftList, rightList);

  console.log(similarityScore); // Output: 14
}
main();

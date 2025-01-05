import { readFile } from "../../utils/file.js";

async function main() {
  const lines = await readFile("./input.txt");

  const matrix = lines.map((line) =>
    line.split(" ").map((string) => parseInt(string))
  );

  let safeArrays = 0;

  matrix.forEach((array) => {
    let isSafe = true;

    let ascending = true;
    let descending = true;

    // let remainder = 0;

    //   for (let i = 1; i < array.length && (ascending || descending); i++) {
    //     ascending = ascending && array[i] >= array[i - 1];
    //     descending = descending && array[i] <= array[i - 1];
    //     orderedArrays;
    //     remainder = array[i] - array[i - 1];
    //   }

    //   if ((ascending || descending) && (remainder >= 1 || remainder <= 3)) {
    //     safeArrays++;
    //   }
    // });

    for (let i = 1; i < array.length; i++) {
      const difference = Math.abs(array[i] - array[i - 1]);
      if (difference < 1 || difference > 3) {
        isSafe = false;
        break;
      }
      ascending = ascending && array[i] >= array[i - 1];
      descending = descending && array[i] <= array[i - 1];
    }

    if (isSafe && (ascending || descending)) {
      safeArrays++;
    }
  });
  console.log(safeArrays);
}
main();

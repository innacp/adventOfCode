import { open } from "node:fs/promises";

export async function readFile(filePath) {
  const file = await open(filePath);

  const lines = [];

  for await (const line of file.readLines()) {
    lines.push(line);
  }
  return lines;
}

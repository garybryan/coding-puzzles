import fs from 'fs';

export function getDictionary(): string[] {
  return fs.readFileSync(`${__dirname}/dictionary.txt`).toString().split("\n");
}

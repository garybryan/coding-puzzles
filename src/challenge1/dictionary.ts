import fs from 'fs';

function getDictionary(): string[] {
  return fs.readFileSync(`${__dirname}/dictionary.txt`).toString().split("\n");
}

export const dictionary: readonly string[] = getDictionary();

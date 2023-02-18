import { Response } from './ordered-gatekeeper';

export async function findPassword(
  guess: (word: string) => Promise<Response>,
  dictionary: readonly string[],
): Promise<string> {
  let start = 0;
  let end = dictionary.length;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    const midWord = dictionary[mid];
    const response = await guess(midWord);

    if (response === 'correct') {
      return midWord;
    }

    if (response === 'after') {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return "Can't find the word";
}

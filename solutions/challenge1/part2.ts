import { Response } from './ordered-gatekeeper';

export async function findPassword(
  guess: (word: string) => Promise<Response>,
  dictionary: readonly string[],
): Promise<string> {
  // Binary search:
  // Pick the middle word. If it's incorrect, we are now told that the correct
  // one comes before or after it, so we can narrow the search down to either
  // all the words before or after the guess and repeat until either guessing
  // it correctly or being left with only the correct word.

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

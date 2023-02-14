import { Response } from './ordered-gatekeeper';

export async function findPassword(
  guess: (word: string) => Promise<Response>,
  dictionary: readonly string[],
): Promise<string> {
  for (const word of dictionary) {
    if ((await guess(word)) === 'correct') {
      return word;
    }
  }
  return 'I give up';
}

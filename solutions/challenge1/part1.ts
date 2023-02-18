export async function findPassword(
  guess: (word: string) => Promise<boolean>,
  dictionary: readonly string[]
): Promise<string> {
  for (const word of dictionary) {
    if (await guess(word)) {
      return word;
    }
  }
  return "Can't find the word";
}

export async function findPassword(
  guess: (word: string) => Promise<boolean>,
  dictionary: readonly string[],
): Promise<string> {
  /*
   * WRITE YOUR CODE HERE.
   * Make a guess using `await guess(word)`.
   */
  const word = 'word';
  await guess(word);
  return word;
}

type AskResponse = 'before' | 'after' | 'correct';
type AskFunc = (guessedWord: string) => AskResponse

const LIMIT = 20

export const getAsk = (word: string): AskFunc => {
  let counter = 0;

  return (guessedWord) => {
    if (counter >= LIMIT) {
      throw new Error(`You've already asked ${LIMIT} times; you lose!`);
    }

    counter += 1;

    if (word === guessedWord) {
      return 'correct';
    }
    if (word > guessedWord) {
      return 'after';
    }
    return 'before';
  };
}

export const getAskForRandomWord = (words: string[]): AskFunc =>
  getAsk(words[Math.floor(Math.random() * words.length)]);

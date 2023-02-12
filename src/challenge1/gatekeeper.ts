type AskFunc = (guessedWord: string) => boolean

const LIMIT = 20

export const getAsk = (word: string): AskFunc => {
  let counter = 0;

  return (guessedWord) => {
    if (counter >= LIMIT) {
      throw new Error(`You've already asked ${LIMIT} times; you lose!`);
    }

    counter += 1;

    return word === guessedWord;
  };
}

export const getAskForRandomWord = (words: string[]): AskFunc =>
  getAsk(words[Math.floor(Math.random() * words.length)]);

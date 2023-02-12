export abstract class Gatekeeper<ResponseType> {
  readonly word: string;

  constructor(word: string) {
    this.word = word;
  }

  protected abstract ask(word: string): ResponseType;

  protected logWord(word: string, text: string): void {
    console.log(`${word} is ${text}`);
  }
}

export function gatekeeperForRandomWord<ResponseType>(
  cls: new (word: string) => Gatekeeper<ResponseType>,
  words: string[],
) {
  return new cls(words[Math.floor(Math.random() * words.length)]);
}

export abstract class Gatekeeper<ResponseType> {
  counter = 0;
  readonly limit = 20;
  readonly word: string;

  constructor(word: string) {
    this.word = word;
  }

  protected abstract getResponse(word: string): ResponseType;

  ask(word: string): ResponseType {
    if (this.counter >= this.limit) {
      throw new Error(`You've already asked ${this.limit} times; you lose!`);
    }

    this.counter += 1;

    return this.getResponse(word);
  };
}

export function gatekeeperForRandomWord<ResponseType>(cls: new (word: string) => Gatekeeper<ResponseType>, words: string[]) {
  return new cls(words[Math.floor(Math.random() * words.length)]);
}

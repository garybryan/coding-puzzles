export abstract class Gatekeeper<ResponseType> {
  readonly word: string;

  constructor(word: string) {
    this.word = word;
  }

  protected abstract guess(word: string): ResponseType;

  protected logWord(word: string, text: string): void {
    console.log(`"${word}" is ${text}.`);
  }
}

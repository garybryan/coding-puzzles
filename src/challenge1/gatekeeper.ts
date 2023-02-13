export abstract class Gatekeeper<ResponseType> {
  readonly word: string;
  readonly delay = 300;

  constructor(word: string) {
    this.word = word;
  }

  protected abstract getResponse(word: string): ResponseType;

  async guess(word: string): Promise<ResponseType> {
    await new Promise((resolve) => setTimeout(resolve, this.delay));

    return this.getResponse(word);
  }

  protected logWord(word: string, text: string): void {
    console.log(`"${word}" is ${text}.`);
  }
}

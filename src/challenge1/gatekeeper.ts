export abstract class Gatekeeper<ResponseType> {
  readonly word: string;
  readonly delay = 1000;

  constructor(word: string) {
    this.word = word;
  }

  protected abstract getResponse(word: string): ResponseType;

  async guess(word: string): Promise<ResponseType> {
    function timeout(ms: number): Promise<void> {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    await timeout(1000);
    return this.getResponse(word);
  }

  protected logWord(word: string, text: string): void {
    console.log(`"${word}" is ${text}.`);
  }
}

import { Gatekeeper } from './gatekeeper';

type Response = 'before' | 'after' | 'correct';

export class OrderedGatekeeper extends Gatekeeper<Response> {
  counter = 0;
  readonly limit = 20;

  private getResult(word: string): Response {
    if (this.word === word) {
      return 'correct';
    }
    if (this.word > word) {
      return 'after';
    }
    return 'before';
  }

  getResponse(word: string) {
    this.counter += 1;

    if (this.counter > this.limit) {
      throw new Error(`You've already guessed ${this.limit} times; YOU LOSE!`);
    }

    const result = this.getResult(word);

    if (result === 'correct') {
      this.logWord(word, 'CORRECT');
    } else {
      const remaining = this.limit - this.counter;
      this.logWord(
        word,
        `WRONG; the correct word comes ${result.toUpperCase()} it. You have ${remaining} more guess${
          remaining === 1 ? '' : 'es'
        }`,
      );
    }

    return result;
  }
}

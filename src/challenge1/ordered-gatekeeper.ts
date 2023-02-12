import { Gatekeeper } from './gatekeeper';

type AskResponse = 'before' | 'after' | 'correct';

export class OrderedGatekeeper extends Gatekeeper<AskResponse> {
  counter = 0;
  readonly limit = 20;

  guess(word: string) {
    this.counter += 1;

    if (this.counter > this.limit) {
      throw new Error(`You've already guessed ${this.limit} times; YOU LOSE!`);
    }

    if (this.word === word) {
      this.logWord(word, 'CORRECT');
      return 'correct';
    }
    if (this.word > word) {
      this.logWord(word, 'WRONG; the correct word comes AFTER it.');
      return 'after';
    }
    this.logWord(word, 'WRONG; the correct word comes BEFORE it.');
    return 'before';
  }
}

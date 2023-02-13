import { Gatekeeper } from './gatekeeper';

export class BooleanGatekeeper extends Gatekeeper<boolean> {
  getResponse(word: string) {
    const result = this.word === word;
    this.logWord(word, result ? 'CORRECT' : 'WRONG');
    return result;
  }
}

import { Gatekeeper } from './gatekeeper';

type AskResponse = 'before' | 'after' | 'correct';

export class OrderedGatekeeper extends Gatekeeper<AskResponse> {
  getResponse(word: string) {
    if (this.word === word) {
      return 'correct';
    }
    if (this.word > word) {
      return 'after';
    }
    return 'before';
  };
}

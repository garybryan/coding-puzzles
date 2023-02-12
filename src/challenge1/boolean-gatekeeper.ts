import { Gatekeeper } from './gatekeeper';

export class BooleanGatekeeper extends Gatekeeper<boolean> {
  getResponse(word: string) {
    return this.word === word;
  };
}

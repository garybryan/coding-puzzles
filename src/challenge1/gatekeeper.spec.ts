import { gatekeeperForRandomWord } from './gatekeeper';
import { BooleanGatekeeper } from './boolean-gatekeeper';

describe('gatekeeperForRandomWord', () => {
  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
  });

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
  });

  it('returns a gatekeeper for a randomly-chosen word', () => {
    const words = ['apple', 'pear', 'banana'];
    const keeper = gatekeeperForRandomWord(BooleanGatekeeper, words);

    expect(keeper.ask('pear')).toBe(true);
    expect(keeper.ask('banana')).toBe(false);
  });
});

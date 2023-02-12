import { getAsk, getAskForRandomWord } from './gatekeeper';

describe('getAsk', () => {
  it('returns true for the correct word', () => {
    const ask = getAsk('banana');

    expect(ask('banana')).toBe(true);
  });

  it('returns false for an incorrect word', () => {
    const ask = getAsk('banana');

    expect(ask('pineapple')).toBe(false);
  });

  it('throws an error when guessing over 20 times', () => {
    const ask = getAsk('banana');

    for (let i = 0; i < 20; i += 1) {
      ask('peach');
    }

    expect(() => ask('banana')).toThrow("You've already asked 20 times; you lose!");
  });
});

describe('getAskForRandomWord', () => {
  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
  });

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
  });

  it('gives an ask function for a randomly-chosen word', () => {
    const words = ['apple', 'pear', 'banana']
    const ask = getAskForRandomWord(words);

    expect(ask('pear')).toBe(true);
    expect(ask('banana')).toBe(false);
  });
});

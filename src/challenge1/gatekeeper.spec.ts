import { getAsk, getAskForRandomWord } from './gatekeeper';

describe('getAsk', () => {
  it('returns true for the correct word', () => {
    const ask = getAsk('banana');

    expect(ask('banana')).toBe('correct');
  });

  it('returns before when the correct word comes before the guess', () => {
    const ask = getAsk('banana');

    expect(ask('pineapple')).toBe('before');
  });

  it('returns after when the correct word comes after the guess', () => {
    const ask = getAsk('banana');

    expect(ask('apple')).toBe('after');
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

    expect(ask('pear')).toBe('correct');
    expect(ask('banana')).toBe('after');
  });
});

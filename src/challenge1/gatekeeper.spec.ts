import { getAsk } from './gatekeeper';

describe('ask', () => {
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

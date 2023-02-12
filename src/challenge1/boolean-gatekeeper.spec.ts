import { BooleanGatekeeper } from './boolean-gatekeeper';

describe('BooleanGatekeeper', () => {
  it('returns true for the correct word', () => {
    const keeper = new BooleanGatekeeper('banana');

    expect(keeper.ask('banana')).toBe(true);
  });

  it('returns false for an incorrect word', () => {
    const keeper = new BooleanGatekeeper('banana');

    expect(keeper.ask('pineapple')).toBe(false);
  });

  it('throws an error when guessing over 20 times', () => {
    const keeper = new BooleanGatekeeper('banana');

    for (let i = 0; i < 20; i += 1) {
      keeper.ask('peach');
    }

    expect(() => keeper.ask('banana')).toThrow(
      "You've already asked 20 times; you lose!",
    );
  });
});

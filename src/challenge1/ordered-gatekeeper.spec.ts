import { OrderedGatekeeper } from './ordered-gatekeeper';

describe('OrderedGatekeeper', () => {
  it('returns correct for the correct word', () => {
    const keeper = new OrderedGatekeeper('banana');

    expect(keeper.ask('banana')).toBe('correct');
  });

  it('returns before when the correct word comes before the guess', () => {
    const keeper = new OrderedGatekeeper('banana');

    expect(keeper.ask('pineapple')).toBe('before');
  });

  it('returns after when the correct word comes after the guess', () => {
    const keeper = new OrderedGatekeeper('banana');

    expect(keeper.ask('apple')).toBe('after');
  });

  it('throws an error when guessing over 20 times', () => {
    const keeper = new OrderedGatekeeper('banana');

    for (let i = 0; i < 20; i += 1) {
      keeper.ask('peach');
    }

    expect(() => keeper.ask('banana')).toThrow(
      "You've already asked 20 times; you lose!",
    );
  });
});

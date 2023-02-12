import { OrderedGatekeeper } from './ordered-gatekeeper';

describe('OrderedGatekeeper', () => {
  it('returns correct for the correct word', () => {
    const keeper = new OrderedGatekeeper('banana');

    expect(keeper.guess('banana')).toBe('correct');
  });

  it('returns before when the correct word comes before the guess', () => {
    const keeper = new OrderedGatekeeper('banana');

    expect(keeper.guess('pineapple')).toBe('before');
  });

  it('returns after when the correct word comes after the guess', () => {
    const keeper = new OrderedGatekeeper('banana');

    expect(keeper.guess('apple')).toBe('after');
  });

  it('throws an error when guessing over 20 times', () => {
    const keeper = new OrderedGatekeeper('banana');

    for (let i = 0; i < 20; i += 1) {
      keeper.guess('peach');
    }

    expect(() => keeper.guess('banana')).toThrow(
      "You've already guessed 20 times; YOU LOSE!",
    );
  });
});

import { BooleanGatekeeper } from './boolean-gatekeeper';

describe('BooleanGatekeeper', () => {
  it('returns true for the correct word', () => {
    const keeper = new BooleanGatekeeper('banana');

    expect(keeper.guess('banana')).toBe(true);
  });

  it('returns false for an incorrect word', () => {
    const keeper = new BooleanGatekeeper('banana');

    expect(keeper.guess('pineapple')).toBe(false);
  });
});

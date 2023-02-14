import { degreesOfSeparation } from './part1';
import { getFriends } from './party';
import { DEGREE } from './top-secret';

describe('Degrees of separation', () => {
  it.skip('Finds the degrees of separation between you and Monica', () => {
    expect(degreesOfSeparation(getFriends)).toBe(DEGREE);
  });
});

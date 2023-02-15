import { degreesOfSeparationNames } from './part2';
import { getFriends } from './party';
import { PATH } from './top-secret';

describe('Degrees of separation', () => {
  it('Finds the degrees of separation between you and Monica', () => {
    expect(degreesOfSeparationNames(getFriends)).toStrictEqual(PATH);
  });
});

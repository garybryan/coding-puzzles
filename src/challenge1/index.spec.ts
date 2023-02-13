import { BooleanGatekeeper } from './boolean-gatekeeper';
import { PASSWORD } from './top-secret';
import { dictionary } from './dictionary';
import { findPassword } from '.';

describe('Challenge 1', () => {
  it('finds the password', async () => {
    const booleanGatekeeper = new BooleanGatekeeper(PASSWORD);

    expect(
      await findPassword((word) => booleanGatekeeper.guess(word), dictionary),
    ).toBe(PASSWORD);
  });
});

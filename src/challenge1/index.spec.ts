import { BooleanGatekeeper } from './boolean-gatekeeper';
import { PASSWORD } from './top-secret';
import { dictionary } from './dictionary';
import { findPassword } from '.';

jest.setTimeout(500000);

describe('Challenge 1', () => {
  it.skip('finds the password', async () => {
    const booleanGatekeeper = new BooleanGatekeeper(PASSWORD);

    expect(
      await findPassword(
        (word: string) => booleanGatekeeper.guess(word),
        dictionary,
      ),
    ).toBe(PASSWORD);
  });
});

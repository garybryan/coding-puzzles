import { OrderedGatekeeper } from './ordered-gatekeeper';
import { PASSWORD } from './top-secret';
import { dictionary } from './dictionary';
import { findPassword } from './part2';

jest.setTimeout(15000);

describe('Challenge 1, 20 Questions', () => {
  it('finds the password', async () => {
    const orderedGatekeeper = new OrderedGatekeeper(PASSWORD);

    expect(
      await findPassword(
        (word: string) => orderedGatekeeper.guess(word),
        dictionary,
      ),
    ).toBe(PASSWORD);
  });
});

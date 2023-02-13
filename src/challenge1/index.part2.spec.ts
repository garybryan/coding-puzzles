import { OrderedGatekeeper } from './ordered-gatekeeper';
import { PASSWORD } from './top-secret';
import { dictionary } from './dictionary';
import { findPassword } from './index.part2';

describe('Challenge 1, 20 Questions', () => {
  it.skip('finds the password', async () => {
    const orderedGatekeeper = new OrderedGatekeeper(PASSWORD);

    expect(
      await findPassword(
        (word: string) => orderedGatekeeper.guess(word),
        dictionary,
      ),
    ).toBe(PASSWORD);
  });
});

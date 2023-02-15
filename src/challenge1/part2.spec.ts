import { OrderedGatekeeper } from './ordered-gatekeeper';
import { PASSWORD_2 } from './top-secret';
import { dictionary } from './dictionary';
import { findPassword } from './part2';

describe('Challenge 1, 20 Questions', () => {
  it('finds the password', async () => {
    const orderedGatekeeper = new OrderedGatekeeper(PASSWORD_2);

    expect(
      await findPassword(
        (word: string) => orderedGatekeeper.guess(word),
        dictionary,
      ),
    ).toBe(PASSWORD_2);
  }, 15000);
});

import { OrderedGatekeeper } from './ordered-gatekeeper';

jest.useFakeTimers();

async function waitFor<T>(promise: Promise<T>): Promise<T> {
  jest.advanceTimersByTime(1000);
  jest.runAllTimers();
  return promise;
}

describe('OrderedGatekeeper', () => {
  it('returns correct for the correct word', async () => {
    const keeper = new OrderedGatekeeper('banana');

    expect(await waitFor(keeper.guess('banana'))).toBe('correct');
    jest.runAllTimers();
  });

  it('returns before when the correct word comes before the guess', async () => {
    const keeper = new OrderedGatekeeper('banana');

    expect(await waitFor(keeper.guess('pineapple'))).toBe('before');
    jest.runAllTimers();
  });

  it('returns after when the correct word comes after the guess', async () => {
    const keeper = new OrderedGatekeeper('banana');

    expect(await waitFor(keeper.guess('apple'))).toBe('after');
    jest.runAllTimers();
  });

  it('throws an error when guessing over 20 times', async () => {
    const keeper = new OrderedGatekeeper('banana');

    for (let i = 0; i < 20; i += 1) {
      await waitFor(keeper.guess('peach'));
    }

    expect(waitFor(keeper.guess('banana'))).rejects.toThrow(
      "You've already guessed 20 times; YOU LOSE!",
    );
  });
});

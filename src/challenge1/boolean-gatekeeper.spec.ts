import { BooleanGatekeeper } from './boolean-gatekeeper';

jest.useFakeTimers();

async function waitFor<T>(promise: Promise<T>): Promise<T> {
  jest.advanceTimersByTime(1000);
  jest.runAllTimers();
  return promise;
}

describe('BooleanGatekeeper', () => {
  it('returns true for the correct word', async () => {
    const keeper = new BooleanGatekeeper('banana');

    expect(await waitFor(keeper.guess('banana'))).toBe(true);
  });

  it('returns false for an incorrect word', async () => {
    const keeper = new BooleanGatekeeper('banana');

    expect(await waitFor(keeper.guess('pineapple'))).toBe(false);
  });
});

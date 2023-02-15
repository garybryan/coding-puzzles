import { maxMoney } from './part1';
import { employees } from './companies';
import { MAX_1 } from './top-secret';

describe('Maximum Money part 1', () => {
  it.skip('Finds the maximum possible income', () => {
    expect(maxMoney(employees)).toBe(MAX_1);
  });
});

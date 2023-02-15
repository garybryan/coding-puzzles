import { maxMoney } from './part2';
import { employees, months } from './companies';
import { MAX_2 } from './top-secret';

describe('Maximum Money part 2', () => {
  it.skip('Finds the maximum possible income considering acquisition time', () => {
    expect(maxMoney(employees, months)).toBe(MAX_2);
  });
});

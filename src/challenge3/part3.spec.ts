import { maxMoney } from './part3';
import { employees, months } from './clients';
import { MAX_3 } from './top-secret';

describe('Maximum Money part 3', () => {
  it.skip('Finds the maximum possible income with monthly subscriptions', () => {
    expect(maxMoney(employees, months)).toBe(MAX_3);
  });
});

import { maxMoney } from './part3';
import { employees, months } from './companies';
import { MAX_3 } from './top-secret';

jest.setTimeout(20000);

describe('Maximum Money part 3', () => {
  it.skip('Finds the maximum possible income with monthly subscriptions', () => {
    expect(maxMoney(employees, months)).toBe(MAX_3);
  });
});

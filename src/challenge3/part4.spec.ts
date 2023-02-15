import { maxMoney } from './part4';
import { employees, months } from './companies';
import { MAX_4 } from './top-secret';

jest.setTimeout(20000);

describe('Maximum Money part 4', () => {
  it('Finds the maximum possible income with monthly subscriptions and hiring salespeople', () => {
    expect(maxMoney(employees, months)).toBe(MAX_4);
  });
});

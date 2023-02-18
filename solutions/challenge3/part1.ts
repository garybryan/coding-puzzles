const FEE = 500;

export function maxMoney(employees: number[]): number {
  // JS sorts as strings, not numbers, unless told otherwise, so a comparison function is needed.
  // `y - x` makes it a descending sort.
  const result =
    employees
      .sort((x, y) => y - x)
      .slice(0, 24)
      .reduce((total, companyEmployees) => total + companyEmployees) * FEE;

  console.log('Max money for 24 biggest companies:', result.toLocaleString());
  return result;
}

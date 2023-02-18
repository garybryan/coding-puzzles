const FEE = 500;

export function maxMoney(employees: number[]): number {
  const result =
    employees
      .sort()
      .slice(-24)
      .reduce((total, companyEmployees) => total + companyEmployees) * FEE;

  console.log("Max money for 24 biggest companies:", result.toLocaleString());
  return result;
}

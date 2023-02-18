const FEE = 500;

export function maxMoney(employees: number[], months: number[]): number {
  const table = new Array<Array<number>>(employees.length);

  for (let i = 0; i < table.length; i += 1) {
    table[i] = new Array<number>(25).fill(0);
  }

  for (let company = 0; company < employees.length; company += 1) {
    const companyEmployees = employees[company];
    const companyMonths = months[company];

    for (let month = 1; month <= 24; month += 1) {
      const withoutCompany = company > 0 ? table[company - 1][month] : 0;

      const withCompany =
        month >= companyMonths
          ? companyEmployees +
            (company > 0 ? table[company - 1][month - companyMonths] : 0)
          : 0;

      table[company][month] = Math.max(withoutCompany, withCompany);
    }
  }

  const max = table[employees.length - 1][24] * FEE;
  console.log('Max money considering acquisition times:', max.toLocaleString());
  return max;
}

const FEE = 500;

export function maxMoney(employees: number[], months: number[]): number {
  /*
    Dynamic programming solution to the 0/1 Knapsack problem, which this is an
    instance of: get the overall solution by combining solutions to subproblems.
    
    Make a table with a column for each month (starting at zero) and a row for
    each company.
    
    Each cell `(c, m)` represents the maximum employees for all companies up
    to `c` in `m` months, recursively defined as the maximum of two choices:
    
    - The number of employees from taking on this company plus the max
      employees we could have in the remaining months for all previous
      companies (so, cell `(c - 1, m - months to take on company)`; and
    
    - The number of employees from not taking on this company, which is just
      the max for all previous companies, from the cell above: `(c - 1, m)`.
    
    The base cases are that for 0 months you cannot take on any company, so
    column 0 always has value 0, and for the first row you can only take the
    first company on if you have enough months.
    
    This can quite easily be optimised to use O(m) space instead of O(m * c):
    observe that values are only ever taken from the previous row, and from
    the current or a previous column.
    So a single array can just be reused, overwriting from right to left,
    as any value to the left of the current one is from the previous row.
   */

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

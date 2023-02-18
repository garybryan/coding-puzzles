import { Queue } from '@datastructures-js/queue';

const MONTHLY_FEE = 50;

type Companies = boolean[];

interface State {
  monthlyIncome: number;
  totalIncome: number;
  monthsRemaining: number;
  companies: Companies;
}

function getInitialState(): State {
  return {
    totalIncome: 0,
    monthlyIncome: 0,
    monthsRemaining: 24,
    companies: new Array<boolean>(40).fill(false),
  };
}

function acquireClient(companies: Companies, companyIndex: number) {
  const updatedCompanies = [...companies];
  updatedCompanies[companyIndex] = true;
  return updatedCompanies;
}

function getLowerBound({
  monthlyIncome,
  totalIncome,
  monthsRemaining,
}: State): number {
  return totalIncome + monthlyIncome * monthsRemaining;
}

export function maxMoney(employees: number[], months: number[]): number {
  function getNextStateForCompany(
    { monthsRemaining, monthlyIncome, totalIncome, companies }: State,
    companyIndex: number,
  ): State {
    const companyEmployees = employees[companyIndex];
    const companyMonths = months[companyIndex];

    return {
      monthlyIncome: monthlyIncome + companyEmployees * MONTHLY_FEE,
      totalIncome: totalIncome + monthlyIncome * companyMonths,
      monthsRemaining: monthsRemaining - companyMonths,
      companies: acquireClient(companies, companyIndex),
    };
  }

  function getNextStates(state: State): State[] {
    const { companies, monthsRemaining } = state;

    return companies
      .map(
        (isAcquired, companyIndex) =>
          [companyIndex, isAcquired] as [number, boolean],
      )
      .filter(
        ([companyIndex, isAcquired]) =>
          !isAcquired && months[companyIndex] < monthsRemaining,
      )
      .map(([companyIndex]) => getNextStateForCompany(state, companyIndex));
  }

  const q = new Queue<State>();

  q.push(getInitialState());

  let lowerBound = 0;

  while (!q.isEmpty()) {
    const state = q.pop();

    const nextStates = getNextStates(state);

    lowerBound = Math.max(lowerBound, getLowerBound(state));

    if (nextStates) {
      nextStates
        .filter((s) => getLowerBound(s) > lowerBound)
        .forEach((nextState) => q.push(nextState));
    }
  }

  console.log(
    'Max money with monthly subscriptions:',
    lowerBound.toLocaleString(),
  );
  return lowerBound;
}

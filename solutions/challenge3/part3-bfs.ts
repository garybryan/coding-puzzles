import { Queue } from '@datastructures-js/queue';

/*
  The order we take companies on now matters since the money we make from a company
  depends on the point of time, so the previous solution no longer works as it was
  based on constant values.

  This is a Breadth First Search solution based on exploring the whole space of
  possible states (total income so far, monthly income, months remaining, and
  which companies have been taken on so far).

  It's (maybe) correct, but it's very slow and runs out of memory because there
  are so many possible states: O(N!).

  A depth-first version might work better, as the tree will be much wider than
  deeper, but would still be very slow.
 */

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

  let maxMoney = 0;

  while (!q.isEmpty()) {
    const state = q.pop();

    const nextStates = getNextStates(state);

    if (nextStates) {
      nextStates.forEach((nextState) => {
        q.push(nextState);
      });
    } else {
      maxMoney = Math.max(maxMoney, state.totalIncome);
    }
  }

  console.log(
    'Max money with monthly subscriptions:',
    maxMoney.toLocaleString(),
  );
  return maxMoney;
}

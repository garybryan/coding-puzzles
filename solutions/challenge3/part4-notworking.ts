import { Queue } from '@datastructures-js/queue';

// TODO not working: never hires salespeople and just gets the same result as
// part 3 but much more slowly.

/*
  Modification of the branch-and-bound solution to part 3 to also consider
  taking on salespeople. This is just done by adding a state for taking one on
  when getting all possible next states.
 */

const MONTHLY_FEE = 50;
const RECRUITER_FEE = 20_000;
const MONTHLY_SALARY = 10_000;

type Companies = boolean[];

interface State {
  monthlyIncome: number;
  totalIncome: number;
  monthsRemaining: number;
  companies: Companies;
  salespeople: number;
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

function getInitialState(): State {
  return {
    totalIncome: 0,
    monthlyIncome: 0,
    monthsRemaining: 24,
    companies: new Array(40).fill(false),
    salespeople: 0,
  };
}

export function maxMoney(employees: number[], months: number[]): number {
  function getNextStateForCompany(state: State, companyIndex: number): State {
    const {
      monthsRemaining,
      monthlyIncome,
      totalIncome,
      companies,
      salespeople,
    } = state;
    const companyEmployees = employees[companyIndex];
    const companyMonths = Math.max(1, months[companyIndex] - salespeople);

    return {
      ...state,
      monthlyIncome: monthlyIncome + companyEmployees * MONTHLY_FEE,
      totalIncome: totalIncome + monthlyIncome * companyMonths,
      monthsRemaining: monthsRemaining - companyMonths,
      companies: acquireClient(companies, companyIndex),
    };
  }

  function getNextStateForSalesperson(state: State): State {
    const { totalIncome, monthlyIncome, monthsRemaining, salespeople } = state;

    return {
      ...state,
      totalIncome: totalIncome + monthlyIncome - RECRUITER_FEE,
      monthlyIncome: monthlyIncome - MONTHLY_SALARY,
      monthsRemaining: monthsRemaining - 1,
      salespeople: salespeople + 1,
    };
  }

  function canHireSalesperson(state: State): boolean {
    const can =
      state.totalIncome >= RECRUITER_FEE &&
      state.monthlyIncome >= MONTHLY_SALARY &&
      state.monthsRemaining >= 4; // 2 to hire, 1 to contribute, 1 to benefit from their contribution
    return can;
  }

  function getNextStates(state: State): State[] {
    const { companies, monthsRemaining } = state;

    const nextStates = companies
      .map(
        (isAcquired, companyIndex) =>
          [companyIndex, isAcquired] as [number, boolean],
      )
      .filter(
        ([companyIndex, isAcquired]) =>
          !isAcquired && months[companyIndex] < monthsRemaining,
      )
      .map(([companyIndex]) => getNextStateForCompany(state, companyIndex));

    if (canHireSalesperson(state)) {
      nextStates.unshift(getNextStateForSalesperson(state));
    }

    return nextStates;
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
    } else {
      console.log('terminal state', state);
    }
  }

  console.log(
    'Max money with monthly subscriptions:',
    lowerBound.toLocaleString(),
  );
  return lowerBound;
}

import { BooleanGatekeeper } from './boolean-gatekeeper';
import { OrderedGatekeeper } from './ordered-gatekeeper';

const SECRET_WORD_1 = 'sesame';
const SECRET_WORD_2 = 'password';

export const part1Gatekeeper = new BooleanGatekeeper(SECRET_WORD_1);

export const part2Gatekeeper = new OrderedGatekeeper(SECRET_WORD_2);

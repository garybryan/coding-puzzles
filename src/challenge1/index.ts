import { part1Gatekeeper, part2Gatekeeper } from './top-secret';
import { dictionary } from './dictionary';

function part1(): void {
  /*
   * WRITE YOUR CODE HERE.
   * Make a guess using `part1Gatekeeper.guess(word)`.
   */
  part1Gatekeeper.guess('word');
}

function part2(): void {
  /*
   * WRITE YOUR CODE HERE.
   * Make a guess using `part2Gatekeeper.guess(word)`.
   */
  part2Gatekeeper.guess('word');
}

if (require.main === module) {
  part1();
  // part2();
}

import { Queue } from '@datastructures-js/queue';

function tracePath(fromName: string, prev: Map<string, string>): string[] {
  const result: string[] = [fromName];
  let name: string = fromName;

  while (true) {
    name = prev.get(name) as string;
    result.push(name);
    if (name == 'Me') {
      return result.reverse();
    }
  }
}

export function degreesOfSeparationNames(
  getFriends: (name: string) => string[],
): string[] {
  /*
   * WRITE YOUR CODE HERE.
   */
  const toMeet = new Queue<[string, number]>();
  const seen = new Set<string>();
  const prev = new Map<string, string>();

  toMeet.push(['Me', 0]);

  while (!toMeet.isEmpty()) {
    const [name, degree] = toMeet.pop();

    if (name === 'Monica Hall') {
      return tracePath(name, prev);
    }

    for (const friendName of getFriends(name)) {
      if (!seen.has(friendName)) {
        toMeet.push([friendName, degree + 1]);
        prev.set(friendName, name);
        seen.add(friendName);
      }
    }
  }

  return [];
}

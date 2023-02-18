import { Queue } from '@datastructures-js/queue';

export function degreesOfSeparationNames(
  getFriends: (name: string) => string[],
): number {
  // Breadth-first search:
  // Start with your friends and get all their friends.
  // Repeat, keeping a list (queue) of people still to meet, going through them
  // in first-in-first-out order.
  // This will find the shortest path to Monica, if there is one.
  // Keep track of degrees in queue entries so we know the final degree once
  // Monica is found.
  // Keep track of who we've already seen, to avoid getting stuck in cycles.

  const toMeet = new Queue<[string, number]>();
  const seen = new Set<string>();

  toMeet.push(['Me', 0]);

  while (!toMeet.isEmpty()) {
    const [name, degree] = toMeet.pop();

    if (name === 'Monica Hall') {
      console.log('Degrees of separation between me and Monica:', degree);
      return degree;
    }

    for (const friendName of getFriends(name)) {
      if (!seen.has(friendName)) {
        toMeet.push([friendName, degree + 1]);
        seen.add(friendName);
      }
    }
  }

  return -1;
}

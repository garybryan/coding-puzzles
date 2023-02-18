import { Queue } from "@datastructures-js/queue";

export function degreesOfSeparationNames(
  getFriends: (name: string) => string[]
): number {
  const toMeet = new Queue<[string, number]>();
  const seen = new Set<string>();

  toMeet.push(["Me", 0]);

  while (!toMeet.isEmpty()) {
    const [name, degree] = toMeet.pop();

    if (name === "Monica Hall") {
      console.log("Degrees of separation between me and Monica:", degree);
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

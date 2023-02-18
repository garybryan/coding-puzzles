import { Queue } from "@datastructures-js/queue";

function tracePath(name: string, prev: Map<string, string>): string[] {
  const pathBack = [];
  let curName: string | undefined = name;

  while (curName) {
    pathBack.push(curName);
    curName = prev.get(curName);
  }

  const path = pathBack.reverse();
  console.log("Path from me to Monica:", path.join(", "));
  return path;
}

export function degreesOfSeparationNames(
  getFriends: (name: string) => string[]
): string[] {
  const toMeet = new Queue<string>();
  const seen = new Set<string>();
  const prev = new Map<string, string>();

  toMeet.push("Me");

  while (!toMeet.isEmpty()) {
    const name = toMeet.pop();

    if (name === "Monica Hall") {
      return tracePath(name, prev);
    }

    for (const friendName of getFriends(name)) {
      if (!seen.has(friendName)) {
        toMeet.push(friendName);
        prev.set(friendName, name);
        seen.add(name);
      }
    }
  }

  return [];
}

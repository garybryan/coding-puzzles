export class SocialNetwork {
  protected connections = new Map<string, string[]>();

  protected addConnection(source: string, dest: string): void {
    const friends = this.get(source);
    friends.push(dest);
    this.connections.set(source, friends);
  }

  get(name: string): string[] {
    return this.connections.get(name) || [];
  }

  add(name1: string, name2: string): void {
    this.addConnection(name1, name2);
    this.addConnection(name2, name1);
  }

  getFriends(name: string): string[] {
    return this.get(name);
  }
}

import { SocialNetwork } from './social-network';

const partyNetwork = new SocialNetwork();

export function getFriends(name: string): string[] {
  const friends = partyNetwork.getFriends(name);
  console.log(`Friends of ${name}: ${friends.join(', ')}`);
  return friends;
}

const names: readonly string[] = [
  'Me',
  'Erlich Bachman',
  'Nelson Bighetti',
  'Dinesh Chugtai',
  'Shaylee Kulas',
  'Mrs. Coty Volkman',
  'Celine Romaguera',
  'Mitchell Gerlach',
  'April Conroy',
  'Heath Keebler',
  'Otha Murray',
  'Gladyce Fahey',
  'Winifred Buckridge',
  'Salma Beatty Jr.',
  'Maverick Cartwright',
  'Scotty Graham',
  'Leon Schumm',
  'Tressa Kris MD',
  'Pascale Wolf',
  'Beatrice Ullrich',
  'Rosalia Lang',
  'Bill Daniel',
  'Natalia Zemlak',
  'Bart Bauch',
  'Wellington Waelchi',
  'Cletus Powlowski',
  'Sammie Steuber',
  'Lawrence Heidenreich',
  'Aileen Kohler II',
  'Tyson Wyman',
  'Lenore Greenholt',
  'Bobby Jerde',
  'Savanna Rempel',
  'Mauricio Bins',
  'Cornelius Zieme',
  'Ludie Jenkins',
  'Aryanna Grady',
  'Miss Dan Huel',
  'Meagan Pouros',
  'Ms. Karina Turcotte',
  'Camila Abernathy',
  'Emory Luettgen',
  'Judy Cronin',
  'Garfield Lowe',
  'Aubree DuBuque',
  'Claude Kautzer DDS',
  'Wade Leuschke',
  'Leonie Romaguera',
  'Brielle Stroman',
  'Mrs. Friedrich Jacobs',
  'Floyd Bogan',
  'Valerie Turcotte II',
  'Everett Paucek',
  'Jayde Gaylord',
  'Kayli Parisian',
  'Kailey Hayes',
  'Kenyon Brakus MD',
  'Raphaelle Senger',
  'Mr. Abner Leuschke',
  'Dr. Ashton Cole',
  'Faustino Harvey',
  'Willie Gibson',
  'Ms. Jacinthe Feil',
  'Andreanne Torp I',
  'Annabel Streich',
  'Lonzo Bauch',
  'Francisco Stokes',
  'Jaunita Kuvalis',
  'Joshuah McKenzie',
  'Monica Hall',
];

const edges = `0 1
0 2
0 3
0 4
1 4
1 6
1 7
10 17
10 5
11 16
11 17
11 5
12 17
13 24
14 8
14 9
15 10
15 16
15 23
15 8
16 21
17 19
17 20
18 12
18 19
18 52
19 27
2 4
2 5
20 16
20 25
20 48
22 15
22 23
22 29
22 30
24 14
24 32
25 28
26 27
27 20
27 45
28 33
29 21
30 31
30 35
30 38
33 25
33 42
34 35
37 32
37 36
39 37
4 10
4 5
40 41
41 21
41 68
43 42
44 43
45 26
46 43
47 19
48 67
48 68
48 69
5 12
50 28
54 56
55 54
56 52
57 12
57 2
57 55
59 13
59 9
6 8
6 9
60 9
67 68
69 19
8 4
9 13
9 8`;

function add(i: number, j: number): void {
  partyNetwork.add(names[i], names[j]);
}

for (const edge of edges.split('\n')) {
  const [from, to] = edge.split(' ');
  add(parseInt(from, 10), parseInt(to, 10));
}

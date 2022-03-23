const game = {
  team1: "chennai",
  team2: "bengaluru",
  players: [
    [
      "dhoni",
      "watson",
      "raina",
      "rayudu",
      "vijay",
      "jadeja",
      "sam",
      "bravo",
      "shardul",
      "chahar",
      "hazlewood",
    ],

    [
      "dinesh",
      "duplesis",
      "shabhaz",
      "virat",
      "ab de",
      "hazaranga",
      "morris",
      "cummins",
      "chahal",
      "maxwell",
      "zampa",
    ],
  ],
  odds: {
    team1: 2.3,
    x: 2.0,
    team2: 5.0,
  },
  centuryscored: ["virat", "maxwell", "watson", "dhoni"],
};

for (const [i, j] of game.centuryscored.entries()) {
  console.log(`century no ${i + 1}: ${j}`);
}
let avg = 0;
for (const values of Object.values(game.odds)) avg += values;
avg /= Object.values(game.odds).length;

console.log(avg);

for (const [s, t] of Object.entries(game.odds)) {
  const teamstr = s === "x" ? "draw" : `${game[s]}`;
  console.log(`odd of ${teamstr} ${t} `);
}

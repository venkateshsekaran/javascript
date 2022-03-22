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
};

const [player1, player2] = game.players;
console.log(player1, player2);

const [WK1, ...fieldplayers1] = player1;
const [WK2, ...fieldplayers2] = player2;
console.log(WK1, fieldplayers1, WK2, fieldplayers2);

const allplayers = [...player1, ...player2];
console.log(allplayers);

const playersfinal1 = [...player1, "moeen ali", "tahhir", "rutraj"];
const playersfinal2 = [...player2, "harshal", "umesh", "nehra"];
console.log(playersfinal1);
console.log(playersfinal2);
const allplayersfinal = [...playersfinal1, ...playersfinal2];
console.log(allplayersfinal);

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const centuryscored = function (...players) {
  console.log(
    `${players.length} ${
      players.length > 1 ? "players" : "player"
    } scored century today`
  );
};
centuryscored("virat");

const gameEvents = new Map([
  [17, "Goal"],
  [36, "Substitution"],
  [47, "Goal"],
  [61, "Substitution"],
  [64, "Yellow Card"],
  [69, "Red Card"],
  [70, "Substitution"],
  [72, "Substitution"],
  [76, "Goal"],
  [80, "Goal"],
  [92, "Yellow Card"],
]);

console.log(gameEvents.values());
let events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

console.log(
  `an event happened,on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(
  `an event happened,on average, every ${time / gameEvents.size} minutes`
);
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "first" : "second";
  console.log(`[${half}] half ${min}: ${event}`);
}

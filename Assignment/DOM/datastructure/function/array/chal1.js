let julia = [3, 5, 23, 1, 2];
let kate = [4, 2, 7, 12, 5];
let check = function (age) {
  for (const age1 of age) {
    if (age1 < 3) {
      console.log("puppy");
    } else {
      console.log("adult");
    }
  }
};
check(julia);
let newJulia = julia.slice(1, 3);
console.log(newJulia);
let join = newJulia.concat(kate);
console.log(join);
for ([i, dage] of join.entries()) {
  console.log(
    `Dog number ${i + 1} is an ${
      dage < 3 ? "puppy" : "adult"
    } and is ${dage} years old`
  );
}

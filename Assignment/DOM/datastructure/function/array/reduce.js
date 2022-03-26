let movements = [100, 200, 300, -4000, 34, -92];
/*const check = movements.reduce((acc, mov, i, arr) => {
  console.log(mov);
  return acc + mov;
}, 0);
console.log(check);*/

const check1 = movements.reduce((acc, mov, i, arr) => {
  console.log(mov);
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(check1);

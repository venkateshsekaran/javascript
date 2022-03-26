let movements = [100, 200, 300, -4000, 34, -92];
const check = movements.filter((mov) => {
  return mov > 0;
});
console.log(check);

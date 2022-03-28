function count_duplicate(a) {
  let count = {};

  for (let i = 0; i < a.length; i++) {
    if (count[a[i]]) {
      count[a[i]] += 1;
    } else {
      count[a[i]] = 1;
    }
  }
  let max = [];
  for (let prop in count) {
    if (count[prop] > max) {
      max = count[prop];
    }
  }
  console.log(max);
}
count_duplicate([1, 2, 3, 3, 3, 4, 4, 4, 4, 5, 6, 1]);

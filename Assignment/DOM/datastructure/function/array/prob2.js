let arr1 = ["A", "B", "C", "D"];
let arr2 = ["P", "Q", "A", "D"];
for (el of arr1) {
  console.log(`${el} - ${arr2.indexOf(el) < 0 ? "NA" : arr2.indexOf(el)} `);
}

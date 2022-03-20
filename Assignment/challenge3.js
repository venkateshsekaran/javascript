let data1 = [17, 21, 23];
let data2 = [12, 5, -5, 0, 4];
let printForeCast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}C in ${i + 1} days... `;
  }
  console.log("..." + str);
};
printForeCast(data1);

console.log("Venkatesh Sekaran".split(" "));

let check = function (str) {
  const joining = str.join(" ");
  const pad = joining.padStart(25, "_");
  const repeat = pad.repeat(5);
  console.log(repeat);
};
check(["hi", "hello", "hru"]);

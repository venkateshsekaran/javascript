const uppercase = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

const change = function (str, fn) {
  console.log(` original str:${str}`);
  console.log(`original fn:${fn.name}`);
  console.log(`original fn str:${fn(str)}`);
};
change("Hello Good Morning", uppercase);

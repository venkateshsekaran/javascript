let invite = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
let first = invite("Hello");
first("venkat");

invite("Hi")("Thiaghu");

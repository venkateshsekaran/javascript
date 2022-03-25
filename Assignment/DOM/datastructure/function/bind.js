const airindia = {
  airline: "Air India",
  iatacode: "AI",
  bookings: [],
  book(flightNum, names) {
    console.log(
      `${names} booked seat on ${this.airline} with ${this.iatacode} and ${flightNum}`
    );
    this.bookings.push({
      name: `${names}`,
      Airline: `${this.airline}`,
      ID: `${this.iatacode}`,
      Flight: `${flightNum}`,
    });
  },
};

const airasia = {
  airline: "Air Asia",
  iatacode: "GH",
  bookings: [],
};
const book = airindia.book;

const add1 = book.bind(airindia);
const add2 = book.bind(airasia);
add1(23, "ganesh");
add2(45, "bala");

//anaother example
//Normal application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 300));

//Partial application
let crt = addTax.bind("null", 0.3);
console.log(crt(1000));

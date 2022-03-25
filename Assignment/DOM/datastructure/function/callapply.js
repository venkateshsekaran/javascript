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

airindia.book("123A", "venkat");
airindia.book("133A", "venkatesh");
console.log(airindia);

const airasia = {
  airline: "Air Asia",
  iatacode: "GH",
  bookings: [],
};

//error unexpected token
/*airindia.book("933A", "venkatesh");*/
//call first
const book = airindia.book;
book.call(airasia, "143A", "Siva");
console.log(airasia);

//apply
//obsolete
const data = ["143A", "Siva"];
/*book.apply(airasia, data);*/
book.call(airasia, ...data);

const bookings = [];
const book = function (flightnum, passangers = 2, price = 10000 * passangers) {
  //es5
  /*passangers = passangers || 1;
  price = price | 10000;*/
  const booking = {
    flightnum,
    passangers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
book(123, 3, 30000);
book(123, 5);

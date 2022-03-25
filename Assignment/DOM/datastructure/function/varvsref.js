const flight = "123f";
const details = {
  name: "venkat",
  passport: 23456723,
};
const checkIn = function (flightnum, passanger) {
  flightnum = "213f";
  passanger = "Mr." + details.name;
  if (passanger.passport === details.passport) {
    console.log();
    ("checked in");
  } else {
    console.log();
    ("Wrong Password");
  }
};
checkIn(flight, details);
console.log(flight);
console.log(details);

const flightnum = flight;
const passanger = details;
const newpassport = function (person) {
  person.name = "Mr." + passanger.name;
  person.passport = Math.trunc(Math.random() * 10000000);
};
newpassport(details);
checkIn(flight, details);
console.log(flight);
console.log(details);

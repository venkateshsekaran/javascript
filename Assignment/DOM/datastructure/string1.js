let checkwinseat = function (seat) {
  let s = seat.slice(-1);
  s == "B" || s == "E"
    ? console.log("yes you have a seat in window side")
    : console.log("You are Unlucky");
};
checkwinseat("11B");
checkwinseat("12E");
checkwinseat("21A");

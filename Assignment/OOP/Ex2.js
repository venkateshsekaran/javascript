class car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at the speed of ${this.speed}Km/hr`);
  }

  brake() {
    this.speed -= 10;
    console.log(`${this.make} going at the speed of ${this.speed}Km/hr`);
  }
  get speedUs() {
    return `${this.make} is going at the speed of ${this.speed * 1.6}mi/h`;
  }
  set speedUs(speed) {
    this.speed = speed * 1.6;
  }
}
let call = new car("ford", 120);
console.log(call.speedUs);
call.accelerate();
call.accelerate();
call.brake();
call.speedUs = 50;
console.log(call);
call.accelerate();

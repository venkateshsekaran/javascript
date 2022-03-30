const car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at the speed of ${this.speed}Km/hr`);
};

car.prototype.brake = function () {
  this.speed -= 10;
  console.log(`${this.make} going at the speed of ${this.speed}Km/hr`);
};

const bmw = new car("BMW", 120);
const Honda = new car("Honda", 140);
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
Honda.brake();
Honda.brake();
Honda.accelerate();
Honda.accelerate();
Honda.accelerate();

const car = function (name, speed) {
  this.name = name;
  this.speed = speed;
};
car.prototype.accelerate = function () {
  return (this.speed = this.speed + 10);
};
const ev = function (name, speed, charge) {
  car.call(this, name, speed);
  this.charge = charge;
};
ev.prototype = Object.create(car.prototype);
ev.prototype.charge1 = function (value) {
  this.charge = value;
  console.log(
    `${this.name} is going at ${this.speed}Km/h,with a charge of ${this.charge}%`
  );
};
ev.prototype.accelerate = function () {
  this.speed += 10;
  this.charge--;
  console.log(
    `${this.name} is going at ${this.speed}Km/h,with a charge of ${this.charge}%`
  );
  ev.prototype.brake = function () {
    this.speed -= 10;
    this.charge++;
    console.log(
      `${this.name} is going at ${this.speed}Km/h,with a charge of ${this.charge}%`
    );
  };
};

const car1 = new ev("tesla", 120, 90);
console.log(car1);
car1.charge1(85);
car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.brake();

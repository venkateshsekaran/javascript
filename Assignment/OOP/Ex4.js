class carl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelarate() {
    this.speed += speed;
    console.log(`${this.make} is going at the speed of ${this.speed}km/hr`);
  }

  brake() {
    this.speed -= speed;
    console.log(`${this.make} is going at the speed of ${this.speed}km/hr`);
  }
}

class evl extends carl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  accelarate() {
    this.speed += 10;
    this.#charge--;
    console.log(
      `${this.make} is going at the speed of ${this.speed} with the charge of ${
        this.#charge
      } %`
    );
  }
  brake() {
    this.speed -= 15;
    this.#charge++;
    console.log(
      `${this.make} is going at the speed of ${this.speed} with the charge of ${
        this.#charge
      } %`
    );
  }
}
const tesla = new evl("Tesla", 120, 90);
console.log(tesla);
tesla.accelarate();
tesla.accelarate();
tesla.brake();

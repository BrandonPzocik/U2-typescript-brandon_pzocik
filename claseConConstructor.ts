class Car1 {
  make: string;
  constructor(make: string) {
    this.make = make;
  }

  drive() {
    console.log(`Driving a ${this.make}`);
  }
}

const otherCar = new Car1("BMW");
otherCar.drive();

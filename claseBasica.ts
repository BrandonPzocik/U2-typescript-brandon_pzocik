class Car {
  make: string = "Ford";

  drive() {
    console.log(`Driving a ${this.make}`);
  }
}

const myCar = new Car();
myCar.drive();

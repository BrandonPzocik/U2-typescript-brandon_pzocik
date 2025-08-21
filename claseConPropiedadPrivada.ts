class Car2 {
  private make: string;

  constructor(make: string) {
    this.make = make;
  }

  getMake() {
    return this.make;
  }
}

const otherCar2 = new Car2("Ferrari");
otherCar2.getMake();

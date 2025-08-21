interface Shape {
  area(): number;
}

class Circule implements Shape {
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const circule = new Circule(4);
console.log(circule.area());

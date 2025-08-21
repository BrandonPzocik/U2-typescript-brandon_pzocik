class EletricCar extends Car2 {
  batteryLife: number;

  constructor(baterryLife: number, make: string) {
    super(make);
    this.batteryLife = baterryLife;
  }

  charge() {
    return "El auto se esta cargando";
  }
}

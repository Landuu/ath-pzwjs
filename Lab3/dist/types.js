class Car {
    name;
    fuel;
    constructor(name, fuel) {
        this.name = name;
        this.fuel = fuel;
    }
    print() {
        console.log(`${this.name}, paliwo ${this.fuel}L`);
    }
}
class Truck extends Car {
    cargo;
    constructor(name, fuel, cargo) {
        super(name, fuel);
        this.cargo = cargo;
    }
}
export { Car, Truck };

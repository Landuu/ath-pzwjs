class Car {
    constructor(name, fuel) {
        this.name = name;
        this.fuel = fuel;
    }
    print() {
        console.log(`${this.name}, paliwo ${this.fuel}L`);
    }
}
class Truck extends Car {
    constructor(name, fuel, cargo) {
        super(name, fuel);
        this.cargo = cargo;
    }
}
export { Car, Truck };

class Car {
    name: string;
    fuel: number;

    constructor(name: string, fuel: number) {
        this.name = name;
        this.fuel = fuel;
    }

    print(): void {
        console.log(`${this.name}, paliwo ${this.fuel}L`);
    }
}

class Truck extends Car {
    cargo: string;

    constructor(name: string, fuel: number, cargo: string) {
        super(name, fuel);
        this.cargo = cargo;
    }
}

export {Car, Truck};
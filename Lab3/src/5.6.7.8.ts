/*
    5. Zdefiniuj klasę car, oraz 3 obiekty będące jej instancjami,
    6. Dodaj do klasy konstruktor oraz funkcję wyświetlającą opis obiektu,
    7. Zdefiniuj klasę truck dziedzicząca z klasy car. Skorzystaj z operatora super
    8. Przerób klasy car i truck do postaci modułu – zaimportuj klasy
*/

import { Car, Truck } from './types.js';

let auto = new Car("Fiat", 4);
let auto2 = new Car("Ferrari", 40);
let auto3 = new Car("Mazdaa", 15);
auto.print();

let tir = new Truck("Volvo", 100, "Ananasy");
tir.print();
/*
    2. Napisz funkcję ze zmienną liczbą atrybutów (operator …). Wynikiem funkcji jest suma
        parametrów np.: suma(2)=>2 suma(3,4)=>7 suma(1,2,3)=>6

    10. Zaimplementuj funkcję w postaci „strzałek” (dowolną)
*/
const sum = (...params) => {
    let output = 0;
    params.forEach(param => {
        output += param;
    });
    return output;
};
let wynik = sum(1, 2, 5, 9, 19, 32);
console.log(wynik);

// 4. Zdefiniuj inferfejs (warunkowy na 5) osoba i wykorzystaj go w funkcji wyświetlające dane tej osoby,
const showPerson = (person) => {
    console.log(`${person.name} ${person.lastName} lat ${person.age}`);
};
const person = {
    name: "Jan",
    lastName: "Kowalski",
    age: 35
};
showPerson(person);

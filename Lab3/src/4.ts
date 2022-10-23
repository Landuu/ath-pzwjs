// 4. Zdefiniuj inferfejs (warunkowy na 5) osoba i wykorzystaj go w funkcji wyświetlające dane tej osoby,

interface Person {
    name: string,
    lastName: string,
    age: number
}

const showPerson = (person: Person) => {
    console.log(`${person.name} ${person.lastName} lat ${person.age}`);
}

const person: Person = {
    name: "Jan",
    lastName: "Kowalski",
    age: 35
}

showPerson(person);
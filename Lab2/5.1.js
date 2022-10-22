/*
    `5.Praca z plikami JSON:
        •Stworzyć bazę danych (3 osoby) w zmiennej opartej o strukturę JSON. (zmienna tekstowy)
        •Skonwertować  tekstowy na obiekt(JSON.parse),
        •Wyświetlićosoby w pętli,
        •Dodać osobę,
        •Zamienić na ciąg znakówi wyświetlić.`
*/

const json = `
    [
        {
            "id": 1,
            "firstName": "Jan",
            "lastName": "Kowalski"
        },
        {
            "id": 2,
            "firstName": "Adam",
            "lastName": "Nowak"
        },
        {
            "id": 3,
            "firstName": "Marcin",
            "lastName": "Polak"
        }
    ]
`;

const data = JSON.parse(json);

for(let i = 0; i < data.length; i++) {
    const el = data[i];
    console.log(el);
}

data.push({
    id: 4,
    firstName: "Marek",
    lastName: "Kloc"
});

const dataString = JSON.stringify(data);
console.log(dataString);
/*
7. Obsługa strumieni:
    - Wczytaj 2 pliki synchronicznie i asynchronicznie –wyświetl wyniki na ekranie
*/

const fs = require('fs');

const file = fs.readFileSync('7.1.txt', 'utf-8');
console.log(file);

console.log('\n');

fs.readFile('7.1.txt', (err, buffer) => {
    console.log(buffer.toString('utf-8'));
});

/*
7. Obsługa strumieni:
    - Za pomocą strumieni wczytaj plik,
    - W strumieniu usuń wszystkie znaki nie będące literami i spacjami,
    - Dla liter zastosuj szyfr cezara,
    - Zapisz wynik do drugiego pliku (strumieniowo),
*/

const fs = require('fs');
const { cipher } = require('@oliveringle/caesar-cipher');

const stream = fs.createReadStream('7.1.txt');
stream.on('data', (s) => {
    const text = s.toString('utf-8');
    const isLetter = (char) => char.toLowerCase() != char.toUpperCase();
    let filtered = '';
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if(isLetter(char) || char == ' ' || char == '\n') filtered += char;
    }
    console.log(filtered);

    console.log('\n');
    const enc = cipher(filtered, 9);
    console.log(enc);

    const writeStream = fs.createWriteStream('caesar.txt');
    writeStream.write(enc, 'utf-8');
    writeStream.end();
});
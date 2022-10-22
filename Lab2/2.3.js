/*
    Dla 30 elementowej tablicy (z alfabetem) wyświetlić po kolei co 0,5s litery przy czym jeżeli jest to samogłoska 
    dodać przerwę 2 sekundową.
*/

const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const samogloski = ["A", "E", "I", "O", "U", "Y"]
const chars = [...charset];

const defaultTimespan = 500;
let timespanNext = defaultTimespan;
let i = 0;

const loop = () => {
    setTimeout(() => {
        if(i >= chars.length) return;
        timespanNext = defaultTimespan;
        const char = chars[i];
        if(samogloski.indexOf(char) != -1) timespanNext = 2000;
        console.log(char);
        i++;
        loop();
    }, timespanNext)
}

loop();
/*
    5. (na 5) wykonaj komunikację pomiędzy klientem a serwerem w ramach jednej aplikacji: co 1 sekunde klient wysyła zapytanie a serwer zwraca plik json.
*/

const http = require('http');
const axios = require('axios');

const listener = (req, res) => {
    res.writeHead(200);
    const obj = {
        true: Math.random() < 0.5,
        value: Math.random()
    };
    res.end(JSON.stringify(obj));
}

const server = http.createServer(listener);
server.listen(8000);

setInterval(() => {
    axios.get('http://127.0.0.1:8000/')
        .then(res => {
            console.log(res.data);
        });
}, 1000)


/*
3. Zdarzenia
    - Napisać program, który generuje zdarzeniew przypadku otrzymania żądania do serwera www,
*/

const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200);
    console.log("Otrzymano żądanie");
    res.end();
}).listen(8080);
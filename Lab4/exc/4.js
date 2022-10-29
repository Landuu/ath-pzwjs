/*
    4. Zaimplementuj serwer http obsługujący 2 strony /nowa i /stara z różnymi treściami (użyj funkcji write oraz end)
*/

const http = require('http');


const listener = (req, res) => {
    res.writeHead(200);
    if(req.url == '/nowa') {
        res.end('Nowa strona!');
    } else if(req.url == '/stara') {
        res.end('Stara strona!')
    } else {
        res.end('Ok');
    }
}

const server = http.createServer(listener);
server.listen(8000);

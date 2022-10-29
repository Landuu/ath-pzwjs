/*
    7. Zaimplementuj serwer w uwierzytelnianiem HTTPS z funkcjonalnością z 2 stronami /stara /nowa
*/

const https = require('https');
const fs = require('fs');


const options = {
    key: fs.readFileSync(`./server.key`),
    cert: fs.readFileSync(`./server.crt`)
  };
  

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

const server = https.createServer(options, listener);
server.listen(8000);

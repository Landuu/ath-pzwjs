var http = require('http');

http.createServer((req, res) => {
    res.writeHead(200);
    console.log("Request received");
    res.end();
}).listen(8080);
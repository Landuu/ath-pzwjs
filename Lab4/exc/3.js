/*
    3. Za pomocą klienta http połącz się z dowolną stroną i wyświetl w konsoli wynik
*/

const http = require('http');

const res = http.get('http://example.com');
console.log(res);

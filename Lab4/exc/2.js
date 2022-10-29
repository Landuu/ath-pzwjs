/*
    2. Za pomocą modułu querystring przeanalizuj stronę /witaj?imie=xxxxx&nazwisko=yyyyyy i
    jako odpowiedź zwróć: witaj xxxxxx yyyyyy
*/

const querystring = require('querystring');

const baseUrl = 'http://localhost:8000/witaj?imie=xxxxx&nazwisko=yyyyy';
const qs = baseUrl.substring(baseUrl.indexOf('?') + 1);

const kvp = querystring.parse(qs);
console.log(`witaj ${kvp.imie} ${kvp.nazwisko}`);

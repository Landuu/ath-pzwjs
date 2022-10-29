/*
    6. (na 5) pobierz dane o pogodzie i wyświetl we własnej aplikacji.
*/

const axios = require('axios');

axios.get('https://api.open-meteo.com/v1/forecast?latitude=49.783385&longitude=19.057842&hourly=temperature_2m')
    .then(res => {
        const wData = res.data.hourly;
        for (let i = 0; i < wData.time.length; i++) {
            const hour = wData.time[i];
            const temp = wData.temperature_2m[i];
            console.log(`DATA: ${hour}, TEMPERATURA: ${temp}`);
        }
    })
    .catch(err => console.log('Wystąpił błąd!'))

/*
    8. Za pomocą gniazda (moduł net) prześlij informacje pomiędzy klientem i serwerem.
*/

const net = require('net');

// Socket server
const socket = net.createServer(socket => {
    console.log('[SRV] Start');

    socket.on('data', data => {
        const msg = `[SRV] Received: ${data.toString()}`;
        console.log(msg);
    });

	socket.pipe(socket);
});

socket.listen(7219, '127.0.0.1');

// Socket client
const client = new net.Socket();
client.connect(7219, '127.0.0.1', () => {
	console.log('[KL] Połączono z serwerem');
	client.write('Wiadomość od klienta!');
});

client.on('data', data => {
    console.log(`[KL] Received: ${data.toString()}`);
})


import WebSocket from 'ws';

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws: WebSocket) => {
console.log('Client connected');

ws.on('message', (message: string) => {
console.log(`Received message: ${message}`);
ws.send(`You sent: ${message}`);
});

ws.on('close', () => {
console.log('Client disconnected');
});
});
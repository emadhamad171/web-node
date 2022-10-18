// Read Environment Parameters
import * as http from 'http';

// The Firebase Admin SDK to access Firestore.

const port = Number(process.env.PORT) || 3001;
const greeting = 'With best regards, Hamad Emad';
const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end(`${greeting}\n`);
});
server.listen(port);

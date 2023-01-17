import http from 'http';
import express from 'express';
import expressApp from './express-app.js';

const app = express();
const server = http.createServer(app);
const port = 3555;

expressApp(app);

server
  .listen(port, (): void => {
    console.log(`initiated Service`);
  })
  .on('listening', () => console.log(`listening on port ${port}`));

export default app;

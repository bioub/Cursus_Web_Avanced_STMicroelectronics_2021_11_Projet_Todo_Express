import http from 'http';
import mongoose from 'mongoose';
import { app } from './app';

mongoose.connect('mongodb://localhost:27017/test');

const server = http.createServer(app);

server.on('error', (err) => {
  console.log(err);
});

server.listen(3000, () => {
  console.log('Server started : http://localhost:3000');
});

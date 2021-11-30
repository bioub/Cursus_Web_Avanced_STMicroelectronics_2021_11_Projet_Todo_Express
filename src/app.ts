import express from 'express';
import cors from 'cors';
import { todosRoutes } from './todos/routes';

const app = express();
app.use(cors({
  origin: ['http://localhost:8080', 'http://127.0.0.1:8080'],
  credentials: true,
}));

app.use('/todos', todosRoutes);

export { app };

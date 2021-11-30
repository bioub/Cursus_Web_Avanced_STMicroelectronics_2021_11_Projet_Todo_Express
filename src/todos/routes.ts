import { todoAddCtrl, todoDeleteCtrl, todoListCtrl } from "./controllers";
import express, { Router } from 'express';

const todosRoutes = Router();

todosRoutes.get('/', todoListCtrl);
todosRoutes.post('/', express.json(), todoAddCtrl);
todosRoutes.delete('/:todoId', todoDeleteCtrl);

export {
  todosRoutes
}

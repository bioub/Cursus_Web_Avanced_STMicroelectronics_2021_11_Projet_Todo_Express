import express, { Router } from 'express';
import { todoAddCtrl, todoDeleteCtrl, todoListCtrl } from './controllers';

const todosRoutes = Router();

todosRoutes.get('/', todoListCtrl);
todosRoutes.post('/', express.json(), todoAddCtrl);
todosRoutes.delete('/:todoId', todoDeleteCtrl);

export { todosRoutes };

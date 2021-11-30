import { Request, Response } from 'express';
import model from './model-mongoose';
import { Todo } from './todo';

export async function todoListCtrl(req: Request, res: Response) {
  const todos = await model.find();
  res.json(todos);
}

export async function todoAddCtrl(req: Request<any, Todo>, res: Response) {
  const todo = await model.create(req.body);
  res.status(201).json(todo);
}

export async function todoDeleteCtrl(
  req: Request<{ todoId: string }>,
  res: Response,
) {
  const todo = await model.findByIdAndDelete(req.params.todoId);

  if (!todo) {
    return res.status(404).json({
      reason: 'Todo not found',
    });
  }

  res.json(todo);
}

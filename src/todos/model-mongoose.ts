import mongoose from 'mongoose';
import { Todo } from './todo';

const schemaTodo = new mongoose.Schema<Todo>({
  title: {
    type: String,
    required: true,
  },
  completed: Boolean,
});

export default mongoose.model('Todo', schemaTodo);

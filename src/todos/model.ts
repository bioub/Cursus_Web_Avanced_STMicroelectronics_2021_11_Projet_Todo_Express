import { Todo } from './todo';

export class TodoArrayService {
  todos: Todo[] = [
    {
      id: 1,
      title: 'ABC',
      completed: true,
    },
    {
      id: 2,
      title: 'XYZ',
      completed: false,
    },
  ];

  static countCompleted(inputTodos: Todo[]) {
    return inputTodos.filter((t) => t.completed).length;
  }

  find(): Promise<Todo[]> {
    return Promise.resolve(this.todos);
  }

  // retourne le prochain id
  nextId() {
    return this.todos.reduce((acc, t) => t.id ?? 0 > acc ? t.id ?? 0 : acc, 0) + 1;
  }

  create(todoDto: Todo): Promise<Todo> {
    const todo = { ...todoDto, id: this.nextId() };

    this.todos.push(todo);

    return Promise.resolve(todo);
  }

  findByIdAndDelete(id: string | number): Promise<Todo | null> {
    const todoId = +id;

    const index = this.todos.findIndex((t) => t.id === todoId);

    if (index === -1) {
      return Promise.resolve(null);
    }

    const todoDeleted = this.todos[index];
    this.todos.splice(index, 1);

    return Promise.resolve(todoDeleted);
  }
}

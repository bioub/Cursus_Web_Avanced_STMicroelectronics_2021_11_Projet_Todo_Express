import { expect } from 'chai';

function immutableAdd<V = any, O = any>(
  object: O,
  key: string | symbol,
  val: V,
) {
  return {
    ...object,
    [key]: val,
  };
}

interface Todo {
  id?: number;
  title: string;
  completed: boolean;
}

describe('immutableAdd function', () => {
  it('should add key be creating a new object', () => {
    const todo: Todo = {
      title: 'ABC',
      completed: true,
    };

    const newTodo = immutableAdd(todo, 'id', 123);

    expect(newTodo).to.deep.equal({ title: 'ABC', completed: true, id: 123 }); // deepEqual
    expect(newTodo).not.equal(todo); // !==
  });
});

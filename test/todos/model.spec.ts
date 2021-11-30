import { expect } from 'chai';
import { TodoArrayService } from '../../src/todos/model';

describe('TodoArrayService class', () => {
  let service: TodoArrayService;

  beforeEach(() => {
    service = new TodoArrayService();
    service.todos = [{ id: 1, title: 'ABC', completed: false }];
  });

  describe('method find', () => {
    it('should resolve an array of todos', async () => {
      const todos = await service.find();
      expect(todos).to.deep.equal([{ id: 1, title: 'ABC', completed: false }]);
    });
  });

  // Exercice 1
  // Fonction pure
  describe('method static countCompleted', () => {
    it('should return number of completed todos', async () => {
      const count = TodoArrayService.countCompleted([
        { id: 1, title: 'ABC', completed: true },
        { id: 2, title: 'DEF', completed: false },
        { id: 3, title: 'GHI', completed: true },
      ]);

      expect(count).to.equals(2);

      // Vérifier que l'appel de countCompleted retourne 2
    });
  });

  // Exercice 2
  // Méthode create
  describe('method create', () => {
    it('should return number of completed todos', async () => {
      const todoToCreate = {title: 'XYZ', completed: false}
      const newTodo = await service.create(todoToCreate);

      // Vérifier que la fonction create resolve un nouvel objet todo
      // avec le prochain id (voir le beforeEach)
      // et un nouvel objet (différent de todoToCreate)
      expect(newTodo).to.deep.equal({ title: 'XYZ', completed: false, id: 2 }); // deepEqual
      expect(newTodo).not.equal(todoToCreate); // !==
    });
  });
});

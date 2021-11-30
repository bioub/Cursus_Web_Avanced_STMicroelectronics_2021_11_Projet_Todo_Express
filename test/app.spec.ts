import chaiHttp from 'chai-http';
import chai, { expect } from 'chai';
import { app } from '../src/app';
import sinon from 'sinon';
import model from '../src/todos/model-mongoose';

chai.use(chaiHttp);

describe('functional tests', () => {
  describe('GET /todos', () => {
    it('should return todos with status 200', async () => {
      const mock = sinon.mock(model);

      mock
        .expects('find')
        .once()
        .resolves([{ id: 1, title: 'ABC', completed: true }]);

      const res = await chai.request(app)
        .get('/todos');

      expect(res).to.have.status(200);
      expect(res.body).to.deep.equal([{ id: 1, title: 'ABC', completed: true }]);

      mock.verify();
    });
  });
})

import chai from 'chai';
import supertest from 'supertest';

import server from '../../server';

const todo = {text: 'eating'}
const request = supertest(server);
const { expect } = chai;


describe('Todo Controller', () => {
  it('should create a new todo', (done) => {
    request.post('/api/v1/todo')
      .send(todo)
      .end((err, res) => {
        expect(res.body.message).to.equal('Successfully Created');
        return done();
      });
  });
  it('should retrieve all todos', (done) => {
    request.get('/api/v1/todo')
    .end((err, res) => {
      expect(res.body.todo.text).to.equal('NewTodo');
      return done();
    });
  });
  it('should delete all todos', (done) => {
    request.delete('/api/v1/todo')
      .end((err, res) => {
        expect(res.body.message).to.equal('successfully deleted');
        return done();
      });
  });
});

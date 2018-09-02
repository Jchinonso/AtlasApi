import TodosController from '../controllers/TodoController';

const TodosRoutes = (router) => {
  router.route('/todo')
    .post(TodosController.createTodos)
    .get(TodosController.retrieveAllTodos)
    .delete(TodosController.deleteTodo)
};

export default TodosRoutes;
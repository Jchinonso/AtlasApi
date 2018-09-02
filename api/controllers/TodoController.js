import {client} from '../utils/utils'
   


const TodoController = {

  /** Create Todos
   * @desc Create a new Todo
   *
   * @method
   *
   * @memberof Todo controller
   *
   * @param {Object} req Request Object
   * @param {Object} res Response Object
   *
   */

  createTodos(req, res) {
    const {text}  = req.body;
    client.sadd(['Todos', text ], function(err, reply) {
      if(err) {
        res.send({message: 'unexpected error'})
      } else {
        res.send({
          message: 'Successfully Created'
        })
      }
  });
  },
  /** Retrieve Todos
   * @desc Retrieve all Todos
   *
   * @method
   *
   * @memberof Todo controller
   *
   * @param {Object} req Request Object
   * @param {Object} res Response Object
   *
   * @returns {object} Returns all Todos
   */
  retrieveAllTodos(req, res) {
    client.smembers('Todos', function(err, reply) {
      if(err) {
        console.log(err)
        res.send({message: 'unexpected error'})
      } else {
        res.send({
          'Todos': reply
        })
      }
    });
  },
  
  /** deleteTask
   * @desc delete todos
   *
   * @method
   *
   * @memberof Todo controller
   *
   * @param {Object} req Request Object
   * @param {Object} res Response Object
   *
   */
  deleteTodo(req, res) {
    client.del('Todos', function(err, reply) {
      if(err) {
        res.send({message: 'Unexpected error occured'})
      } else {
        res.send({
          message: 'successfully deleted'
        })
      }
  });
  }
}
export default TodoController;
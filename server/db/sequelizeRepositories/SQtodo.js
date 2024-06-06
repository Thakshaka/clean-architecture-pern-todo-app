const TodoRepository = require('../../entities/repository/TodoRepository')
const Todo = require('../sequelize/models').todo

module.exports = class SQtodo extends TodoRepository {
  async add (todo) {
    const { description } = todo

    let newTodo = null

    try {
      newTodo = await Todo.create({ description })
    } catch (error) {
      // handle unique key violation error
      if (error.name === 'SequelizeUniqueConstraintError') {
        return null
      }

      throw new Error(error)
    }

    return newTodo
  }
}

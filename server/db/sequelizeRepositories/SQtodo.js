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

  async getById (id) {
    let todo = null

    try {
      todo = await Todo.findByPk(id)
    } catch (error) {
      // Handle invalid uuid error
      if (error.name === 'SequelizeDatabaseError') {
        return null
      }

      throw new Error(error)
    }

    return todo
  }

  async getAll () {
    let Todos = null
    try {
      Todos = await Todo.findAll()
    } catch (error) {
      throw new Error(error)
    }

    return Todos
  }

  async updateById (id, data) {
    let todo

    try {
      // todo = await Todo.update({ description: data }, { where: { id }, returning: true, raw: true })
      todo = await Todo.update({ ...data }, { where: { id }, returning: true, raw: true })
    } catch (error) {
      // Handle invalid id error
      if (error.name === 'SequelizeDatabaseError') {
        return null
      }

      throw new Error(error)
    }

    // Check how many rows were updated
    if (todo[0] === 0) {
      return null
    } else {
      return todo[1][0]
    }
  }

  async delete (id) {
    let todo
    try {
      todo = await Todo.destroy({ where: { id } })
    } catch (error) {
      // Handle invalid uuid error
      if (error.name === 'SequelizeDatabaseError') {
        return null
      } else if (error.name === 'SequelizeForeignKeyConstraintError') {
        return null
      }

      throw new Error(error)
    }

    // destroy() returns the number of rows destroyed
    // Return true or false
    return (todo !== 0)
  }
}

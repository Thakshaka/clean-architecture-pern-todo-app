const express = require('express')
const TodoController = require('../controllers/TodoController')

const TodoRoutes = (database) => {
  const router = express.Router()

  const controller = TodoController(database)

  router.route('/')
    .get(controller.getAllTodos)
    .post(controller.addNewTodo)

  router.route('/:id')
    .get(controller.getTodo)
    .put(controller.updateTodo)
    .delete(controller.deleteTodo)

  return router
}

module.exports = TodoRoutes
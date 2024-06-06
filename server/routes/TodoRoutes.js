const express = require('express')
const TodoController = require('../controllers/TodoController')

const TodoRoutes = (database) => {
  const router = express.Router()

  const controller = TodoController(database)

  router.route('/')
    .post(controller.addNewTodo)

  return router
}

module.exports = TodoRoutes
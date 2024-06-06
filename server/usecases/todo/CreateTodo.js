const Todo = require('../../entities/Todo')

async function CreateTodo (description, TodoRepository) {
  if (!TodoRepository) {
    throw new Error('TodoRepository not specified')
  }

  // Bussiness rule validations
  if (!description) {
    throw new Error('parameter empty')
  }

  console.log(description);

  // Create new object
  let newTodo = new Todo(description)

  console.log(newTodo.description);

  // Add to datababse
  newTodo = await TodoRepository.add(newTodo)

  return newTodo
}

module.exports = CreateTodo

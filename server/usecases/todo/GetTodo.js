async function GetTodo (id, TodoRepository) {
    if (!TodoRepository) {
      throw new Error('TodoRepository not specified')
    }
  
    // Bussiness rule validations
    if (!id) {
      throw new Error('id not found')
    }
  
    // Find and get from datababse
    const Todo = await TodoRepository.getById(id)
  
    return Todo
  }
  
  module.exports = GetTodo
  
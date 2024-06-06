async function GetAllTodos (TodoRepository) {
    if (!TodoRepository) {
      throw new Error('TodoRepository not specified')
    }
  
    const Todo = TodoRepository.getAll()
  
    return Todo
  }
  
  module.exports = GetAllTodos
  
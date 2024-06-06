async function UpdateTodo (id, data, TodoRepository) {
    if (!TodoRepository) {
      throw new Error('TodoRepository not specified')
    }
  
    // Bussiness rule validations
    if (!id) {
      throw new Error('id not found')
    }
  
    if (data && data.constructor === Object && Object.keys(data).length === 0) {
      throw Error('no data to update')
    }
  
    // Find and update from database
    const Todo = await TodoRepository.updateById(id, data)
  
    return Todo
  }
  
  module.exports = UpdateTodo
  
async function DeleteTodo (id, TodoRepository) {
    if (!TodoRepository) {
      throw new Error('TodoRepository not specified')
    }
  
    // Bussiness rule validations
    if (!id) {
      throw new Error('id not found')
    }
  
    // Find and delete from database
    const results = await TodoRepository.delete(id)
  
    return results
  }
  
  module.exports = DeleteTodo
  
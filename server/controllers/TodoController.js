// Import all usecases for entity
const CreateTodo = require('../usecases/todo/CreateTodo')

module.exports = (database) => {
    const addNewTodo = async (req, res) => {
      // Recieve data
      const { description } = req.body
  
      // Call the usecase and pass the data
      const newTodo = await CreateTodo(description, database)
  
      if (!newTodo) {
        res.status(400).json({ status: 'fail', message: 'Already exists', data: null })
      } else {
        res.status(201).json({ status: 'success', data: newTodo })
      }
    }
  
    return {
      addNewTodo
    }
  }

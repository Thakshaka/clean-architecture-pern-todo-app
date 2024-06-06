// Import all usecases for entity
const CreateTodo = require('../usecases/todo/CreateTodo')
const UpdateTodo = require('../usecases/todo/UpdateTodo')
const DeleteTodo = require('../usecases/todo/DeleteTodo')
const GetTodo = require('../usecases/todo/GetTodo')
const GetAllTodos = require('../usecases/todo/GetAllTodos')

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

    const updateTodo = async (req, res) => {
        // Recieve data
        const { id } = req.params
        // const { description  } = req.body // Destructure from req.body

        // Call the usecase and pass the data
        // const Todo = await UpdateTodo(id, description, database)
        const Todo = await UpdateTodo(id, req.body, database)
    
        if (!Todo) {
          res.status(404).json({ status: 'fail', message: 'Todo not found', data: null })
        } else {
          res.status(200).json({ status: 'success', data: Todo })
        }
      }
    
      const deleteTodo = async (req, res) => {
        // Recieve data
        const { id } = req.params
    
        // Call the usecase and pass the data
        const results = await DeleteTodo(id, database)
    
        if (!results) {
          res.status(404).json({ status: 'fail', message: 'Todo not found / cannot delete', data: null })
        } else {
          res.status(200).json({ status: 'success', data: null })
        }
      }
    
      const getTodo = async (req, res) => {
        // Recieve data
        const { id } = req.params
    
        // Call the usecase and pass the data
        const Todo = await GetTodo(id, database)
    
        if (!Todo) {
          res.status(404).json({ status: 'fail', message: 'Todo not found', data: null })
        } else {
          res.status(200).json({ status: 'success', data: Todo })
        }
      }
    
      const getAllTodos = async (req, res) => {
        // Call the usecase
        const Todos = await GetAllTodos(database)
        res.json(Todos)
        res.status(200).json({ status: 'success', data: Todos })
      }
  
    return {
        addNewTodo,
        updateTodo,
        deleteTodo,
        getTodo,
        getAllTodos
    }
  }

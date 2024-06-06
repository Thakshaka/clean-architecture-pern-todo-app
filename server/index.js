const express = require("express");
const app = express();
const cors = require("cors");
const db = require('./db/sequelize/models/index');

// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json

// Sequelize Repositories 
const SQtodo = require('./db/sequelizeRepositories/SQtodo')
const TodoRepo = new SQtodo()

// Routes localhost:5000
const TodoRoutes = require('./routes/TodoRoutes')

// Routes
app.use('/todos', TodoRoutes(TodoRepo))

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

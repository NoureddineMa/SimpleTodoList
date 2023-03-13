const express = require('express')
const app = express()

const {
    CreateTask,
    DeleteOneTask,
    GetAllTasks
} = require('../controllers/TasksController')

app.post('/posttask', CreateTask)
app.get('/getalltasks', GetAllTasks)
app.delete('/deletetask/:id', DeleteOneTask)


module.exports = app;